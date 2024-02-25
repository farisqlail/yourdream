<template>
  <Head>
    <title>Hitung KPR</title>
  </Head>
  <div>
    <section id="page">
      <NavbarDetail />

     

      <!-- Modal -->
      <dialog id="modalResult" class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Analisa Hasil Perhitungan KPR</h3>
          <!-- Tampilkan hasil perhitungan KPR di dalam modal -->
          <div class="modal-content">
            <div class="total-bunga">
              <p>
                Total bunga KPR yang harus kamu bayarkan adalah
                <strong>Rp{{ formatCurrency(totalInterest) }}</strong> setara
                dengan <strong>{{ interestPercentage }}%</strong> dari pokok
                pinjamanmu.
              </p>
            </div>

            <div class="cicilan-payment">
              <p>
                Cicilan Pokok KPRmu
                <strong>Rp{{ formatCurrency(principalInstallments) }}</strong> atau setara dengan
                <strong>{{ installmentPercentage }}%</strong> dari penghasilan
                bulananmu.
              </p>
            </div>
            <div class="percent-bunga">
              <p>
                Total Cicilan KPR perbulan kamu menjadi <strong>Rp{{ formatCurrency(totalInstallments) }}</strong>
              </p>
            </div>
          </div>
          <div class="modal-action">
            <form @submit.prevent="closeModal">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Okey, udah paham strateginya</button>
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
      // Data yang diperlukan untuk hasil perhitungan
      showResults: false,
      totalInterest: 0,
      interestPercentage: 0,
      installmentRange: "",
      installmentPercentage: 0,
      increasedInstallment: 0,
      monthsToFinish: 0,
      yearsToFinish: 0,
      principalInstallments: 0,
      totalInstallments: 0,

      // Data dari form
      propertyPrice: "",
      downPaymentPercentage: "",
      monthlyIncome: "",
      kprDuration: "",
      fixedInterestRate: "",
      fixedInterestPeriod: "",
      floatingInterestRate: "",
    };
  },
  computed: {
    formattedPropertyPrice: {
      get() {
        return this.formatCurrency(this.propertyPrice);
      },
      set(value) {
        // Menghapus karakter non-digit dari nilai input
        const parsedValue = value.replace(/\D/g, "");
        this.propertyPrice = parseInt(parsedValue);
      },
    },

    formattedmonthlyIncome: {
      get() {
        return this.formatCurrency(this.monthlyIncome);
      },
      set(value) {
        // Menghapus karakter non-digit dari nilai input
        const parsedValue = value.replace(/\D/g, "");
        this.monthlyIncome = parseInt(parsedValue);
      },
    },
  },
  methods: {
    formatCurrency(value) {
      if (!value) return "";
      const formatter = new Intl.NumberFormat("id-ID");
      return formatter.format(value);
    },

    openModal() {
      let modal = document.getElementById("modalResult");
      modal.showModal();
    },
    closeModal() {
      let modal = document.getElementById("modalResult");
      modal.close();
    },

    calculateKPR() {
      // Konversi data dari input string menjadi angka jika diperlukan
      const propertyPrice = parseFloat(
        this.formattedPropertyPrice.replace(/[^0-9]/g, "")
      );
      const downPaymentPercentage = parseFloat(
        this.downPaymentPercentage.replace(/[^0-9]/g, "")
      );
      const monthlyIncome = parseFloat(
        this.formattedmonthlyIncome.replace(/[^0-9]/g, "")
      );
      const kprDuration = parseInt(this.kprDuration.replace(/[^0-9]/g, ""));
      const fixedInterestRate = parseFloat(
        this.fixedInterestRate.replace(/[^0-9.]/g, "")
      );
      const fixedInterestPeriod = parseInt(
        this.fixedInterestPeriod.replace(/[^0-9]/g, "")
      );
      const floatingInterestRate = parseFloat(
        this.floatingInterestRate.replace(/[^0-9.]/g, "")
      );

      const perYears = kprDuration / 12;

      // Hitung jumlah pokok pinjaman
      const loanAmount = propertyPrice * (1 - downPaymentPercentage / 100);

      // Hitung total bunga KPR dengan bunga tetap
      const totalFixedInterest =
        (((loanAmount * fixedInterestRate) / 100) * perYears) / kprDuration;

      // Hitung percent dari bunga KPR tetap
      const interestPercentage = (totalFixedInterest / loanAmount) * 100;

      //Hitung Cicilan pokok KPR
      const principalInstallments = loanAmount / kprDuration;

      // Hitung total cicilan KPR perbulan
      const totalInstallments = principalInstallments + totalFixedInterest;

      // Set data hasil perhitungan
      this.totalInterest = totalFixedInterest;
      this.interestPercentage = interestPercentage.toFixed(2);
      this.principalInstallments = principalInstallments;
      this.totalInstallments = totalInstallments;

      // Tampilkan hasil perhitungan
      this.openModal();
      this.showResults = true;
    },
  },
});
</script>