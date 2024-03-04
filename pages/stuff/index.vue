<template>
  <div>
    <section id="page">
      <NavbarDetail :title="titelNav" />

      <!-- Input Price -->
      <div class="form-group">
        <span class="font-medium">Harga Barang Impian</span>
        <div class="input-custom">
          Rp
          <input
            type="text"
            v-model="formattedStuffPrice"
            placeholder="8.000.000"
          />
        </div>
      </div>

      <!-- Input Monthly Investment -->
      <div class="form-group" v-if="formattedStuffPrice !== ''">
        <span class="font-medium">Investasi Tiap Bulan</span>
        <div class="input-custom">
          Rp
          <input
            type="text"
            v-model="formattedPriceNow"
            placeholder="1.000.000"
          />
        </div>
      </div>

      <!-- Input Current Money -->
      <div class="form-group" v-if="formattedPriceNow !== ''">
        <span class="font-medium">Uang yang Dimiliki Sekarang</span>
        <div class="input-custom">
          Rp
          <input
            type="text"
            v-model="formattedCurrentMoney"
            placeholder="5.000.000"
          />
        </div>
      </div>

      <!-- Input Target Bulan -->
      <div class="form-group" v-if="formattedCurrentMoney !== ''">
        <span class="font-medium">Target Bulan Barang Terbeli</span>
        <div class="input-custom">
          <input type="text" v-model="targetBulan" placeholder="5" />
          Bulan
        </div>
      </div>

      <!-- Input Annual Interest Rate -->
      <div class="form-group" v-if="targetBulan !== ''">
        <span class="font-medium">Suku Bunga Tahunan (%)</span>
        <div class="input-custom">
          <input type="text" v-model="annualInterestRate" placeholder="5" />
          %
        </div>
      </div>

      <div class="btn-group" v-if="annualInterestRate !== ''">
        <span class="font-medium">Yuk, hitung strategimu!</span>
        <button class="btn btn-submit" @click="hitung">Lihat Strategimu</button>
      </div>

      <!-- Modal -->
      <dialog id="modalResult" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Analisa Hasil Perhitungan Investasi Barang Impian
          </h3>
          <div class="modal-content">
            <div class="total-bunga">
              <p>
                Harga barang incaran kamu
                <strong>Rp {{ formatCurrency(hargaBarang) }} </strong>, total
                investasi kamu seharusnya
                <strong>Rp {{ formatCurrency(totalInvestasi) }}</strong
                >. Kemungkinan tiap Bulan kamu harus menabung
                <strong>Rp {{ formatCurrency(monthlyMoney) }}</strong>
              </p>
            </div>
          </div>

          <div class="modal-action">
            <form action="">
              <button class="btn" @click="closeModal">
                Oke, saya mengerti
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <Footer />
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import NavbarDetail from "@/components/NavbarDetail.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    NavbarDetail,
    Footer,
  },
  data() {
    return {
      hargaBarang: 0,
      investasiTiapBulan: 0,
      uangSekarang: 0,
      totalUang: 0,
      totalInvestasi: 0,
      bulanYangDiperlukan: 0,
      monthlyMoney: 0,
      showResults: false,
      targetBulan: "",
      annualInterestRate: "",
      titelNav: "Barang Impian"
    };
  },
  computed: {
    formattedStuffPrice: {
      get() {
        return this.formatCurrency(this.hargaBarang);
      },
      set(value) {
        // Menghapus karakter non-digit dari nilai input
        const parsedValue = value.replace(/\D/g, "");
        this.hargaBarang = parseInt(parsedValue);
      },
    },

    formattedPriceNow: {
      get() {
        return this.formatCurrency(this.investasiTiapBulan);
      },
      set(value) {
        // Menghapus karakter non-digit dari nilai input
        const parsedValue = value.replace(/\D/g, "");
        this.investasiTiapBulan = parseInt(parsedValue);
      },
    },

    formattedCurrentMoney: {
      get() {
        return this.formatCurrency(this.uangSekarang);
      },
      set(value) {
        // Menghapus karakter non-digit dari nilai input
        const parsedValue = value.replace(/\D/g, "");
        this.uangSekarang = parseInt(parsedValue);
      },
    },
  },
  methods: {
    formatCurrency(value) {
      if (!value) return "";
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(value);
    },
    hitung() {
      // Hitung total uang yang akan Anda miliki setelah target bulan
      this.totalUang =
        this.uangSekarang +
        this.investasiTiapBulan * parseInt(this.targetBulan);

      // Use the dynamic annual interest rate
      const sukuBungaTahunan = parseFloat(this.annualInterestRate) / 100;

      this.totalInvestasi = Math.round(
        this.totalUang *
          Math.pow(1 + sukuBungaTahunan, parseInt(this.targetBulan) / 12)
      );

      this.monthlyMoney = Math.round(
        this.investasiTiapBulan *
          Math.pow(1 + sukuBungaTahunan, parseInt(this.targetBulan) / 12)
      );

      // Hitung jumlah bulan yang diperlukan untuk mencapai target harga barang
      const sisaHargaBarang = this.hargaBarang - this.totalInvestasi;
      this.bulanYangDiperlukan = Math.ceil(
        sisaHargaBarang / this.investasiTiapBulan
      );

      // Tampilkan modal
      this.showResults = true;
      this.openModal();
    },

    openModal() {
      let modal = document.getElementById("modalResult");
      modal.showModal();
    },
    closeModal() {
      let modal = document.getElementById("modalResult");
      modal.close();
    },
  },
});
</script>

<style scoped>
/* CSS styles here */
</style>
