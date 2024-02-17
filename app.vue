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
  height: 100vh; 

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
}
</style>