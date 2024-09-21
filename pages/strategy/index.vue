<template>
  <Head>
    <title>Your Dream - Strategiku</title>
  </Head>
  <div class="frame">
    <section id="page" class="dark:bg-gray-900 bg-[#f4f4f4] dark:text-white">
      <NavbarDetail :title="titelNav" :link="urlPath" />

      <div v-if="dataKpr !== null" class="list-kpr">
        <div class="items dark:bg-gray-800" @click="goToKpr()">
          {{ dataKpr }}
          <svg
            fill="none"
            height="50px"
            width="50px"
            version="1.1"
            id="XMLID_287_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
            xml:space="preserve"
            class="fill-[#2d2d2e] dark:fill-white w-5 h-5 icon"
          >
            <g id="next">
              <g>
                <polygon
                  points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="empty-state" v-else>
        <img src="~/assets/images/empty.png" alt="" srcset="" />
        <span>Belum ada strategi, yuk bikin</span>
      </div>

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
      urlPath: "/",
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
    goToKpr() {
      return this.$router.push("/strategy/kpr");
    },
  },
});
</script>
