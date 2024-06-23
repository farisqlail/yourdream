<template>
  <Head>
    <title>Your Dream</title>
  </Head>
  <div class="frame">
    <section id="page">
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
        <div class="item" @click="stuff">
          <div class="icon">
            <img src="~/assets/icons/monitor.png" class="w-20" alt="" />
          </div>
          Barang
        </div>
        <div class="item">
          <div class="icon-disabled">
            <img src="~/assets/icons/properti.png" class="w-20" alt="" />
          </div>
          DP Properti
        </div>
      </div>

      <div class="row-item flex justify-between mt-3">
        <div class="item">
          <div class="icon-disabled">
            <img src="~/assets/icons/menikah.png" class="w-20" alt="" />
          </div>
          Menikah
        </div>
      </div>
<!-- 
      <div class="row-carousel">
        <div class="title">
          <h5>Kunjungi juga</h5>
        </div>
        <div class="carousel rounded-box mt-3">
          <div class="carousel-item">
            <nuxt-link
              to="https://www.instagram.com/p/C3Ct7rHSv-n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="blank"
            >
              <div class="card">
                <img src="~/assets/images/konten.png" alt="Shoes" />
                <div class="card-body">
                  <span class="card-title"
                    >Buku yang mungkin bisa buat kamu mikir nggak cuma logic
                    kode aja.</span
                  >
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="carousel-item">
            <nuxt-link
              to="https://www.instagram.com/p/C21D35zS9tO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="blank"
            >
              <div class="card">
                <img src="~/assets/images/konten-2.png" alt="Shoes" />
                <div class="card-body">
                  <span class="card-title"
                    >Makin banyak nih job buat "No Code Programming", bisa lah
                    buat tambahan ilmu belajar nih.</span
                  >
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="carousel-item">
            <nuxt-link
              to="https://www.instagram.com/p/C18VDa6SnBB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="blank"
            >
              <div class="card">
                <img src="~/assets/images/konten-3.png" alt="Shoes" />
                <div class="card-body">
                  <span class="card-title"
                    >Teknologi bukan kaleng-kaleng, sudah banyak yang pakai
                    teknologi ini agar bisa jadi native apps.</span
                  >
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="carousel-item">
            <nuxt-link
              to="https://www.instagram.com/p/C0-fi5jvejd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="blank"
            >
              <div class="card">
                <img src="~/assets/images/konten-4.png" alt="Shoes" />
                <div class="card-body">
                  <span class="card-title"
                    >Semua itu tergantung dari projek yang dibuild
                    masing-masing, keduanya juga memiliki kekurangan dan
                    kelebihan sendiri.</span
                  >
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="carousel-item">
            <nuxt-link
              to="https://www.instagram.com/p/C1lJEGjvrE4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              target="blank"
            >
              <div class="card">
                <img src="~/assets/images/konten-5.png" alt="Shoes" />
                <div class="card-body">
                  <span class="card-title"
                    >Hey, mau share template simple landing page buat
                    kamu.</span
                  >
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div> -->

      <Footer />
      <BottomNav />
    </section>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import BottomNav from "@/components/BottomNav.vue";

export default {
  component: {
    Navbar,
    Footer,
    BottomNav,
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
    stuff() {
      this.$router.push("/stuff");
    },
  },
};
</script>
