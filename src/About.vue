<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <router-view />

  <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    style="margin: 50px"
  ></div>

  <!-- About -->
  <section class="py-16">
    <div class="container mx-auto">
      <h2 class="text-4xl font-semibold text-center mb-8">Tentang Kami</h2>
      <div class="flex items-center justify-center">
        <img
          src="./assets/img/mockup.png"
          alt="Feature 1"
          class="object-contain w-1/3 h-auto rounded-lg mr-10"
        />
        <div>
          <h3 class="text-xl font-semibold mb-2">Tentang kami</h3>
          <p class="text-gray-600 text-lg">
            Kami adalah aplikasi pembelajaran bahasa isyarat dengan menggunakan
            kecerdasan buatan (AI). Kami menyediakan berbagai materi dan latihan
            untuk membantu pengguna belajar bahasa isyarat dengan mudah dan
            efektif. Dengan bantuan teknologi AI, kami dapat memberikan umpan
            balik yang personal dan membantu pengguna meningkatkan kemampuan
            mereka dalam berkomunikasi menggunakan bahasa isyarat.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- end About -->
</template>
