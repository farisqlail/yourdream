<template>
  <div>
    <section id="page">
        <Navbar />

        <Footer />
    </section>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
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
