<template>
  <Head>
    <title>Your Dream - Budgeting</title>
  </Head>
  <div class="frame">
    <section id="page" class="dark:bg-gray-900 bg-[#f4f4f4] dark:text-white">
      <NavbarDetail :title="titelNav" :link="urlPath" />

      <!-- name Priority -->
      <div class="form-group">
        <span class="font-medium">Nama Kebutuhan </span>
        <div class="input-custom">
          <input
            type="text"
            v-model="namePriority"
            placeholder="cth: Beli kopi perbulan"
          />
        </div>

        <!-- Budget -->
        <div class="form-group" v-if="namePriority !== ''">
          <span class="font-medium">Budget perbulan </span>
          <div class="input-custom">
            Rp
            <input
              type="text"
              v-model="formattedBudgeting"
              placeholder=" 200.000"
            />
          </div>
        </div>

        <div class="form-group" v-if="formattedBudgeting !== ''">
          <span class="font-medium">Budget perbulan </span>
          <div class="input-custom">
            <input type="month" v-model="monthBudgeting" />
          </div>
        </div>

        <div v-if="monthBudgeting !== ''" class="btn-group">
          <span class="font-medium">yuhuu, yuk simpan budgetingmu</span>
          <button class="btn btn-submit" @click="saveBudgetig">
            Simpan Budgeting
          </button>
        </div>
      </div>

      <!-- Modal -->
      <dialog id="modalResult" class="modal">
        <div class="modal-box dark:bg-gray-800 bg-[#f4f4f4] dark:text-white">
          <h3 class="font-bold text-lg text-center">
            Budgeting kamu bulan {{ monthBudgeting }} sudah disimpan
          </h3>
          <div class="modal-content">
            <div class="flex flex-col justify-center items-center">
              <img
                src="~/assets/icons/success-budgeting.png"
                class="w-[150px]"
                alt=""
              />
              <div class="btn-group">
                <button class="btn btn-submit" @click="toHome">
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import NavbarDetail from "@/components/NavbarDetail.vue";

export default defineComponent({
  components: {
    NavbarDetail,
  },
  data() {
    return {
      urlPath: "/",
      namePriority: "",
      budgeting: 0,
      monthBudgeting: "",
    };
  },
  computed: {
    formattedBudgeting: {
      get() {
        return this.formatCurrency(this.budgeting);
      },
      set(value) {
        const parsedValue = value.replace(/\D/g, "");
        this.budgeting = parseInt(parsedValue);
      },
    },
  },
  methods: {
    openModal() {
      let modal = document.getElementById("modalResult");
      modal.showModal();
    },
    formatCurrency(value) {
      if (!value) return "";
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(value);
    },
    saveBudgetig() {
      const data = [
        {
          name: this.namePriority,
          budget: this.budgeting,
          month: this.monthBudgeting,
        },
      ];

      this.openModal();
      localStorage.setItem("dataBudgeting", JSON.stringify(data));
    },
    toHome() {
      this.$router.push("/");
    },
  },
});
</script>
