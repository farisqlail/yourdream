<template>
  <div>
    <NuxtPwaManifest/>
    <NuxtPage />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
</style>