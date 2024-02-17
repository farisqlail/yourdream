<template>
  <section id="page">
    <Navbar />
    <div class="banner">
      <img src="~/assets/images/banner.png" alt="" />
    </div>

    <div class="title">
      <h5>Pilih Impianmu ?</h5>
    </div>

    <div class="row-item flex justify-between mt-3">
      <div class="item">
        <div class="icon">
          <img src="~/assets/icons/kpr.png" class="w-20" alt="" />
        </div>
        Simulasi KPR
      </div>
      <div class="item">
        <div class="icon">
          <img src="~/assets/icons/menikah.png" class="w-20" alt="" />
        </div>
        Menikah
      </div>
      <div class="item">
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

export default defineComponent({
  component: {
    Navbar,
    Footer,
  },
  setup() {},
});
</script>

<style lang="scss">
#page {
  padding-left: 30rem;
  padding-right: 30rem;
  display: flex;
  flex-direction: column;
  gap: 26px;

  .row-item {
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
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
}
</style>