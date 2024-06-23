<template>
  <Head>
    <title>Your Dream - Strategiku</title>
  </Head>
  <div class="frame">
    <section id="page">
      <NavbarDetail :title="titelNav" />

      <Footer />
      <BottomNav />
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
        titelNav: "Strategiku",
    }
  },
});
</script>
