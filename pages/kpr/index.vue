<template>
  <Head>
    <title>Hitung KPR</title>
  </Head>
  <div>
    <section id="page">
      <NavbarDetail />

      <div class="form">
        <!-- Property Price -->
        <div class="form-group flex flex-col gap-4">
          <span class="font-medium">Harga properti impianmu saat ini </span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            Rp
            <input
              v-model="formattedPropertyPrice"
              type="text"
              class="grow"
              placeholder="8.000.000"
            />
          </label>
        </div>

        <!-- Down Payment -->
        <div
          v-if="propertyPrice !== ''"
          class="form-group flex flex-col gap-4 mt-4"
        >
          <span class="font-medium"
            >Berapa % yang mau kamu DP (Down Payment)</span
          >
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input
              v-model="downPaymentPercentage"
              type="text"
              class="grow"
              placeholder="30"
            />
            %
          </label>
        </div>

        <!-- Monthly Income -->
        <div
          v-if="downPaymentPercentage !== ''"
          class="form-group flex flex-col gap-4 mt-4"
        >
          <span class="font-medium">Penghasilan bulananmu</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            Rp
            <input
              v-model="formattedmonthlyIncome"
              type="text"
              class="grow"
              placeholder="6.000.000"
            />
          </label>
        </div>

        <!-- KPR Duration -->
        <div
          v-if="monthlyIncome !== ''"
          class="form-group flex flex-col gap-4 mt-4"
        >
          <span class="font-medium">Kamu mau KPR berapa lama?</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input
              v-model="kprDuration"
              type="text"
              class="grow"
              placeholder="24"
            />
            bulan
          </label>
        </div>

        <!-- Bunga Fix -->
        <div
          v-if="kprDuration !== ''"
          class="form-group flex flex-col gap-4 mt-4"
        >
          <span class="font-medium">Bunga fix</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input
              v-model="fixedInterestRate"
              type="text"
              class="grow"
              placeholder="25"
            />
            %
          </label>
        </div>

        <!-- Period Bunga Fix -->
        <div
          v-if="fixedInterestRate !== ''"
          class="form-group flex flex-col gap-4 mt-4"
        >
          <span class="font-medium">Periode bunga fix </span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input
              v-model="fixedInterestPeriod"
              type="text"
              class="grow"
              placeholder="2"
            />
            bulan
          </label>
        </div>

        <!-- Bunga Floating -->
        <div
          v-if="fixedInterestPeriod !== ''"
          class="form-group flex flex-col gap-4 mt-4"
        >
          <span class="font-medium">Bunga floating</span>
          <label
            class="input input-bordered input-info flex items-center gap-2"
          >
            <input
              v-model="floatingInterestRate"
              type="text"
              class="grow"
              placeholder="3"
            />
            %
          </label>
        </div>

        <div
          v-if="floatingInterestRate !== ''"
          class="btn-group flex flex-col gap-4 mt-4"
        >
          <span class="font-medium"
            >yuhuu, mimpimu sudah mendapatkan strategi</span
          >
          <button class="btn btn-submit" @click="calculateKPR">
            Lihat Strategimu
          </button>
        </div>
      </div>

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
                Cicilan KPRmu dalam rentang
                <strong>{{ installmentRange }}</strong> atau setara dengan
                <strong>{{ installmentPercentage }}%</strong> dari penghasilan
                bulananmu.
              </p>
            </div>
            <div class="percent-bunga">
              <p>
                % cicilanmu yang sangat ideal, kamu bisa mempertimbangkan untuk
                melunasi KPR mu lebih awal. Kamu bisa menambah cicilan bulananmu
                menjadi <strong>{{ increasedInstallment }}</strong> dan bisa
                menyelesaikan KPR mu dalam
                <strong>{{ monthsToFinish }}</strong> bulan /
                <strong>{{ yearsToFinish }}</strong> tahun.
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

      // Hitung jumlah pokok pinjaman
      const loanAmount = propertyPrice * (1 - downPaymentPercentage / 100);

      // Hitung total bunga KPR dengan bunga tetap
      const totalFixedInterest =
        (loanAmount * fixedInterestRate * fixedInterestPeriod) / 100;

      // Hitung total bunga KPR dengan bunga mengambang (jika ada)
      const totalFloatingInterest =
        (loanAmount *
          floatingInterestRate *
          (kprDuration - fixedInterestPeriod)) /
        100;

      // Total bunga KPR
      const totalInterest = totalFixedInterest + totalFloatingInterest;

      // Persentase bunga KPR terhadap pokok pinjaman
      const interestPercentage = (totalInterest / loanAmount) * 100;

      // Rentang cicilan bulanan
      const totalMonths = kprDuration * 12;
      const monthlyInstallment = loanAmount / totalMonths;

      // Cicilan minimum
      const minInstallment = monthlyInstallment + totalInterest / totalMonths;
      const maxInstallment = minInstallment * 2;

      // Persentase cicilan KPR terhadap penghasilan bulanan
      const installmentPercentage = (minInstallment / monthlyIncome) * 100;

      // Cicilan yang sangat ideal
      const idealInstallmentMin = monthlyInstallment * 1.5;
      const idealInstallmentMax = monthlyInstallment * 2;
      const idealInstallmentRange = `Rp${this.formatCurrency(
        idealInstallmentMin.toFixed(2)
      )} - Rp${this.formatCurrency(idealInstallmentMax.toFixed(2))}`;

      // Waktu untuk melunasi KPR
      const monthsToFinish = Math.ceil(loanAmount / idealInstallmentMin / 12);
      const yearsToFinish = Math.floor(monthsToFinish / 12);

      // Set data hasil perhitungan
      this.totalInterest = totalInterest.toFixed(2);
      this.interestPercentage = interestPercentage.toFixed(1); // Dibulatkan menjadi 1 angka di belakang koma
      this.installmentRange = `Rp${this.formatCurrency(
        minInstallment.toFixed(2)
      )} - Rp${this.formatCurrency(maxInstallment.toFixed(2))}`;
      this.installmentPercentage = installmentPercentage.toFixed(2);
      this.increasedInstallment = idealInstallmentRange;
      this.monthsToFinish = monthsToFinish;
      this.yearsToFinish = yearsToFinish;

      // Tampilkan hasil perhitungan
      this.openModal();
      this.showResults = true;
    },
  },
});
</script>