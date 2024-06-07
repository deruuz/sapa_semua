<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
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

  <section class="py-16">
    <div>
      <h3 class="text-4xl font-semibold mb-2 ml-20">Materi Belajar</h3>
    </div>
    <div class="flex ml-20 mr-20">
      <div
        class="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-60 h-auto"
            src="./assets/img/huruf.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Alphabet
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Kamu akan mempelajari huruf alfabet dan bagaimana cara penggunaanya
            dalam bentuk video.
          </p>
        </div>
      </div>

      <div
        class="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-60 h-auto"
            src="./assets/img/huruf.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Angka
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>

      <div
        class="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-60 h-auto"
            src="./assets/img/huruf.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Hewan
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>

      <div
        class="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-60 h-auto"
            src="./assets/img/huruf.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Buah - Buahan
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>

      <div
        class="m-4 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center"
      >
        <a href="#">
          <img
            class="rounded-t-lg w-60 h-auto"
            src="./assets/img/huruf.png"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Sayuran
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
