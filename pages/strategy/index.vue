<template>
  <Head>
    <title>Your Dream - Strategiku</title>
  </Head>
  <div class="frame">
    <section id="page">
      <NavbarDetail :title="titelNav" :link="urlPath" />

      <div v-if="dataKpr" class="list-kpr">
        <div class="items" @click="goToKpr()">
          {{ dataKpr }}
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
              fill="#0F0F0F"
            />
          </svg>
        </div>
      </div>
      <div class="empty-state" v-else>
        <img src="~/assets/images/empty.png" alt="" srcset="" />
        <span>Belum ada strategi, yuk bikin</span>
      </div>

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
      dataKpr: {},
      urlPath:  "/"
    };
  },
  mounted() {
    this.getDataKpr();
  },
  methods: {
    getDataKpr() {
      const kpr = JSON.parse(localStorage.getItem("dataKPR"));
      if (kpr) {
        this.dataKpr = "KPR";
      }
    },
    goToKpr(){
      return this.$router.push("/strategy/kpr")
    }
  },
});
</script>
