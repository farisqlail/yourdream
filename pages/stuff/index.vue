<template>
  <div>
    <section id="page">
      <NavbarDetail />

      <!-- Input Price -->
      <div class="form-group">
        <span class="font-medium">Harga Barang Impian:</span>
        <div class="input-custom">
          Rp
          <input type="text" v-model="hargaBarang" placeholder="8.000.000" />
        </div>
      </div>

      <!-- Input Monthly Investment -->
      <div class="form-group">
        <span class="font-medium">Investasi Tiap Bulan:</span>
        <div class="input-custom">
          Rp
          <input type="text" v-model="investasiTiapBulan" placeholder="1.000.000" />
        </div>
      </div>

      <!-- Input Current Money -->
      <div class="form-group">
        <span class="font-medium">Uang yang Dimiliki Sekarang:</span>
        <div class="input-custom">
          Rp
          <input type="text" v-model="uangSekarang" placeholder="5.000.000" />
        </div>
      </div>

      <div class="btn-group">
        <span class="font-medium">Yuk, hitung strategimu!</span>
        <button class="btn btn-submit" @click="hitung">Lihat Strategimu</button>
      </div>

      <!-- Modal -->
      <dialog id="modalResult" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Analisa Hasil Perhitungan Investasi Barang Impian</h3>
          <div class="modal-content">
            <p>Total uang setelah target bulan: {{ formatCurrency(totalUang) }}</p>
            <p>Total uang setelah diinvestasikan: {{ formatCurrency(totalInvestasi) }}</p>
            <p>Bulan yang diperlukan untuk mencapai target: {{ bulanYangDiperlukan }}</p>
          </div>

          <div class="modal-action">
            <button class="btn" @click="closeModal">Oke, saya mengerti</button>
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
      showResults: false,
    };
  },
  methods: {
    formatCurrency(value) {
      if (!value) return "";
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(value);
    },
    hitung() {
      // Hitung total uang yang akan Anda miliki setelah target bulan
      this.totalUang = this.uangSekarang + (this.investasiTiapBulan * targetBulan);
    
      // Hitung total uang yang akan Anda miliki setelah target bulan jika diinvestasikan
      // dengan suku bunga tahunan sebesar 5% (misalnya, Anda bisa mengubah sesuai kebutuhan)
      const sukuBungaTahunan = 0.05;
      this.totalInvestasi = this.totalUang * Math.pow((1 + sukuBungaTahunan), (targetBulan / 12));
    
      // Hitung jumlah bulan yang diperlukan untuk mencapai target harga barang
      const sisaHargaBarang = this.hargaBarang - this.totalInvestasi;
      this.bulanYangDiperlukan = Math.ceil(sisaHargaBarang / this.investasiTiapBulan);

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
