<template>
  <div>
    <section id="page">
      <NavbarDetail />
      <div class="form">
        <!-- property price -->
        <div class="form-group flex flex-col gap-4">
          <span class="font-medium">Harga properti impianmu saat ini </span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            Rp
            <input type="text" class="grow" placeholder="800.000.000" />
          </label>
        </div>

        <!-- down payment -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Berapa % yang mau kamu DP (Down Payment)</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input type="text" class="grow" placeholder="30" />
            %
          </label>
        </div>

        <!-- total loan -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Jumlah pinjaman pokokmu</span>
          <div class="loan-badge">Rp5,600,000</div>
        </div>

        <!-- monthly income -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Penghasilan bulananmu</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input type="text" class="grow" placeholder="30" />
            %
          </label>
        </div>

        <!-- monthly KPR -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Kamu mau KPR berapa lama?</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input type="text" class="grow" placeholder="24" />
            bulan
          </label>
        </div>

        <!-- Bunga fix -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Bunga fix</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input type="text" class="grow" placeholder="25" />
            %
          </label>
        </div>

        <!-- Period bunga fix -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Periode bunga fix </span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input type="text" class="grow" placeholder="2" />
            bulan
          </label>
        </div>

        <!-- Bunga floating -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Bunga floating</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input type="text" class="grow" placeholder="3" />
            %
          </label>
        </div>

        <!-- Period bunga floating -->
        <div class="form-group flex flex-col gap-4 mt-4">
          <span class="font-medium">Periode bunga floating</span>
          <div class="period-badge">Rp5,600,000</div>
        </div>
      </div>

      <div class="btn-group flex flex-col gap-4">
        <span class="font-medium">yuhuu, mimpimu sudah mendapatkan strategi</span>
        <button class="btn btn-submit">Lihat Strategimu</button>
      </div>
      <Footer />
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import NavbarDetail from "@/components/NavbarDetail.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  component: {
    NavbarDetail,
    Footer,
  },
  setup() {},
});
</script>

<style lang="scss">
.form {
  .form-group {
    label {
      width: 100% !important;
      background: none;
    }

    .loan-badge {
      background: #004aad;
      width: fit-content;
      color: #fff;
      padding: 12px;
      border-radius: 10px;
    }

    .period-badge {
      background: #004aad;
      width: fit-content;
      color: #fff;
      padding: 12px;
      border-radius: 10px;
    }
  }
}

.btn-group {
  .btn-submit {
    border: 1px solid #004aad;
    color: #004aad;
  }
  .btn-submit:hover {
    background: #004aad;
    color: #fff;
  }
}
</style>
