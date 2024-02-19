<template>
  <div>
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  font-family: "Poppins", sans-serif;
  color: #2d2d2e;
  background: #d3d3d3;
}


#page {
  margin-left: 29rem;
  margin-right: 29rem;
  display: flex;
  flex-direction: column;
  gap: 26px;
  background: #f4f4f4;
  padding-left: 20px;
  padding-right: 20px;
}
</style>