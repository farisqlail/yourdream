<template>
  <!-- <div> -->
  <NuxtPwaManifest />
  <NuxtPage />
  <!-- </div> -->
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { useHead, useDark, useToggle } from "@vueuse/core";

useHead({
  meta: [
    {
      name: "theme-color",
      content: isDark.value ? "#000000" : "#f4f4f4", // Warna untuk mode gelap dan terang
    },
  ],
});

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
</style>