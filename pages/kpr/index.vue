<template>
  <Head>
    <title>Your Dream - Hitung KPR</title>
  </Head>
  <div class="frame">
    <section id="page" class="dark:bg-gray-900 bg-[#f4f4f4] dark:text-white">
      <NavbarDetail :title="titelNav" :link="urlPath" />

      <!-- Property Price -->
      <div class="form-group">
        <span class="font-medium">Harga properti impianmu saat ini </span>
        <div class="input-custom">
          Rp
          <input
            v-model="formattedPropertyPrice"
            type="text"
            placeholder="800.000.000"
          />
        </div>
      </div>

      <!-- Down Payment -->
      <div v-if="propertyPrice !== ''" class="form-group">
        <span class="font-medium"
          >Berapa % yang mau kamu DP (Down Payment)</span
        >
        <div class="input-custom">
          <input v-model="downPaymentPercentage" type="text" placeholder="30" />
          %
        </div>
      </div>

      <!-- Monthly Income -->
      <div v-if="downPaymentPercentage !== ''" class="form-group">
        <span class="font-medium">Gaji Bulanan Kamu</span>
        <div class="input-custom">
          Rp
          <input
            v-model="formattedMonthlyIncome"
            type="text"
            placeholder="10.000.000"
          />
        </div>
      </div>

      <!-- KPR Duration -->
      <div v-if="formattedMonthlyIncome !== ''" class="form-group">
        <span class="font-medium">Kamu mau KPR berapa lama?</span>
        <div class="input-custom">
          <input v-model="kprDuration" type="text" placeholder="24" />
          bulan
        </div>
      </div>

      <!-- Bunga Fix -->
      <div v-if="kprDuration !== ''" class="form-group">
        <span class="font-medium">Bunga Tetap</span>
        <div class="input-custom">
          <input v-model="fixedInterestRate" type="text" placeholder="5" />
          %
        </div>
      </div>

      <!-- Bunga Floating -->
      <div v-if="fixedInterestRate !== ''" class="form-group">
        <span class="font-medium">Bunga floating</span>
        <div class="input-custom">
          <input v-model="floatingInterestRate" type="text" placeholder="3" />
          %
        </div>
      </div>

      <div v-if="floatingInterestRate !== ''" class="btn-group">
        <span class="font-medium"
          >yuhuu, mimpimu sudah mendapatkan strategi</span
        >
        <button class="btn btn-submit" @click="calculateKPR">
          Lihat Strategimu
        </button>
      </div>

      <!-- Modal -->
      <dialog id="modalResult" class="modal ">
        <div class="modal-box dark:bg-gray-800 bg-[#f4f4f4] dark:text-white">
          <h3 class="font-bold text-lg">Analisa Hasil Perhitungan KPR</h3>
          <!-- Tampilkan hasil perhitungan KPR di dalam modal -->
          <div class="modal-content ">
            <!-- Alert -->
            <div v-if="alertMessage" :class="['alert', alertType]">
              <span>{{ alertMessage }}</span>
            </div>

            <div class="total-bunga dark:bg-gray-900 bg-[#e6e6e6] dark:text-white">
              <p>
                Total bunga KPR yang harus kamu bayarkan adalah
                <strong>Rp{{ formatCurrency(totalInterest) }}</strong> setara
                dengan <strong>{{ interestPercentage }}%</strong> dari pokok
                pinjamanmu.
              </p>
            </div>

            <div class="cicilan-payment dark:bg-gray-900 bg-[#e6e6e6] dark:text-white">
              <p>
                Cicilan Pokok KPRmu
                <strong>Rp{{ formatCurrency(principalInstallments) }}</strong>
                dan total Cicilan KPR perbulan kamu menjadi
                <strong>Rp{{ formatCurrency(totalInstallments) }}</strong>
              </p>
            </div>
          </div>
          <div class="modal-action">
            <form @submit.prevent="closeModal">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn-outline">Okey, udah paham strateginya</button>
              <button class="btn" @click="saveStrategy">
                Simpan Strategiku
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <!-- <BottomNav /> -->
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import NavbarDetail from "@/components/NavbarDetail.vue";
import Footer from "@/components/Footer.vue";
import BottomNav from "@/components/BottomNav.vue";

export default defineComponent({
  components: {
    NavbarDetail,
    Footer,
    BottomNav,
  },
  data() {
    return {
      urlPath: "/",
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
      titelNav: "Simulasi KPR",

      // Alert
      alertMessage: "",
      alertType: "",
    };
  },
  computed: {
    formattedPropertyPrice: {
      get() {
        return this.formatCurrency(this.propertyPrice);
      },
      set(value) {
        const parsedValue = value.replace(/\D/g, "");
        this.propertyPrice = parseInt(parsedValue);
      },
    },

    formattedMonthlyIncome: {
      get() {
        return this.formatCurrency(this.monthlyIncome);
      },
      set(value) {
        const parsedValue = value.replace(/\D/g, "");
        this.monthlyIncome = parseInt(parsedValue);
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
        this.formattedMonthlyIncome.replace(/[^0-9]/g, "")
      );
      const kprDuration = parseInt(this.kprDuration.replace(/[^0-9]/g, ""));
      const fixedInterestRate = parseFloat(
        this.fixedInterestRate.replace(/[^0-9.]/g, "")
      );

      const perYears = kprDuration / 12;

      // Hitung jumlah pokok pinjaman
      const loanAmount = propertyPrice * (1 - downPaymentPercentage / 100);

      // Hitung total bunga KPR dengan bunga tetap
      const totalFixedInterest = Math.round(
        (((loanAmount * fixedInterestRate) / 100) * perYears) / kprDuration
      );

      // Hitung percent dari bunga KPR tetap
      const interestPercentage = (totalFixedInterest / loanAmount) * 100;

      // Hitung Cicilan pokok KPR
      const principalInstallments = Math.round(loanAmount / kprDuration);

      // Hitung total cicilan KPR perbulan
      const totalInstallments = Math.round(
        principalInstallments + totalFixedInterest
      );

      // Set data hasil perhitungan
      this.totalInterest = totalFixedInterest;
      this.interestPercentage = interestPercentage.toFixed(2);
      this.principalInstallments = principalInstallments;
      this.totalInstallments = totalInstallments;

      // Periksa apakah monthlyIncome mendekati atau melebihi totalInstallments
      if (monthlyIncome > totalInstallments) {
        this.alertMessage =
          "Gaji bulanan Anda cukup untuk membayar cicilan KPR.";
        this.alertType = "alert-green";
      } else if (monthlyIncome * 0.8 <= totalInstallments) {
        this.alertMessage =
          "Gaji bulanan Anda hampir tidak cukup untuk membayar cicilan KPR.";
        this.alertType = "alert-red";
      } else {
        this.alertMessage = "";
        this.alertType = "";
      }

      // Tampilkan hasil perhitungan
      this.openModal();
      this.showResults = true;
    },
    saveStrategy() {
      const dataInputKpr = {
        propertyPrice: this.propertyPrice,
        downPaymentPercentage: this.downPaymentPercentage,
        monthlyIncome: this.monthlyIncome,
        kprDuration: this.kprDuration,
        fixedInterestRate: this.fixedInterestRate,
        fixedInterestPeriod: this.fixedInterestPeriod,
        floatingInterestRate: this.floatingInterestRate,
      };

      const resultDataKpr = {
        totalInstallments: this.totalInstallments,
        principalInstallments: this.principalInstallments,
        totalInterest: this.totalInterest,
        interestPercentage: this.interestPercentage,
      };

      const combinedKprData = {
        ...dataInputKpr,
        ...resultDataKpr,
      };

      localStorage.setItem("dataKPR", JSON.stringify(combinedKprData));
    },
  },
});
</script>