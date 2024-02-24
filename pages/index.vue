<template>
  <Head>
    <title>Hitung Impianmu</title>
  </Head>
  <section id="page-index">
    <Navbar />
    <div class="banner">
      <img src="~/assets/images/banner.png" class="img-hero" alt="" />
    </div>

    <div class="title">
      <h5>Pilih Impianmu ?</h5>
    </div>

    <div class="row-item flex justify-between mt-3">
      <div class="item" @click="kpr">
        <div class="icon">
          <img src="~/assets/icons/kpr.png" class="w-20" alt="" />
        </div>
        Simulasi KPR
      </div>
      <div class="item" @click="wedding">
        <div class="icon">
          <img src="~/assets/icons/menikah.png" class="w-20" alt="" />
        </div>
        Menikah
      </div>
      <div class="item" @click="property">
        <div class="icon">
          <img src="~/assets/icons/properti.png" class="w-20" alt="" />
        </div>
        DP Properti
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  component: {
    Navbar,
    Footer,
  },
  setup() {},
  methods: {
    kpr() {
      this.$router.push("/kpr");
    },
    wedding() {
      this.$router.push("/wedding");
    },
    property() {
      this.$router.push("/property");
    },
  },
};
</script>
