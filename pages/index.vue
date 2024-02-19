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

<style lang="scss">
body,
html {
  margin: 0;
  padding: 0;
}

#page-index {
  margin-left: 29rem;
  margin-right: 29rem;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background: #f4f4f4;
  padding-left: 20px;
  padding-right: 20px;
  height: 800px;

  .img-hero {
    border-radius: 10px;
  }

  .title {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
  }

  .row-item {
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      .icon {
        background: #004aad;
        padding: 14px;
        display: flex;
        justify-content: center;
        width: 60%;
        align-items: center;
        border-radius: 8px;
      }
    }
  }

  .footer-wrapper {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding-left: 30rem;
    padding-right: 30rem;
    color: #2d2d2e;
  }
}
</style>