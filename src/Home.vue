<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    let text = new SplitType("#moto");
    let characters = document.querySelectorAll(".char");
    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.add("translate-y-full");
    }
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.02,
      duration: 0.5,
    });
  },
};
</script>

<template>
  <!-- Jumbotron -->
  <section
    class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
  >
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1
        id="moto"
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
      >
        Learning Today, Leading Tomorrow
      </h1>
      <p
        class="animate-fade animate-delay-[1500ms] animate-ease-in mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"
      >
        SapaSemua adalah platform pembelajaran bahasa isyarat yang memungkinkan
        kamu untuk belajar bahasa isyarat dengan mudah dan menyenangkan.
      </p>
      <div
        class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"
      >
        <a
          href="https://drive.google.com/file/d/1hxvWs0heOP7EofgqS6AnmBrslwzUjMpz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="animate-fade animate-delay-[1800ms] animate-ease-in inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Get started
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
  <!-- end Jumbotron -->

  <!-- feature -->
  <section class="py-16">
    <div class="container mx-auto">
      <h2 class="text-4xl font-semibold text-center mb-8">
        Berbagai Fitur di SapaSemua
      </h2>
      <!-- Feature 1 -->
      <div class="flex items-center justify-center">
        <img
          src="./assets/img/kuis.png"
          alt="Feature 1"
          class="object-contain w-1/5 h-auto rounded-lg mr-10"
        />
        <div>
          <h3 class="text-xl font-semibold mb-2">Kuis Seru</h3>
          <p class="text-gray-600 text-lg">
            ✅Tes kemampuan bahasa isyaratmu lewat kuis-kuis asik!<br />
            ✅Tersedia Berbagai macam kuis sesuai dengan materi yang
            dipelajari<br />
            ✅Kamu bisa mengulang lagi kuis yang sudah pernah dikerjakan<br />
            ✅Kamu bisa melihat nilai yang kamu dapatkan setelah mengerjakan
            kuis<br />
          </p>
        </div>
      </div>
      <!-- Feature 2 -->
      <div class="flex items-center justify-center mt-8">
        <div class="w-1/2">
          <h3 class="text-xl font-semibold mb-2">Materi Video Keren</h3>
          <p class="text-gray-600 text-lg">
            ✅Kamu bisa lihat video-video yang bakal buat kamu paham gerakan
            bahasa isyarat.<br />
            ✅Video-video yang disediakan juga sangat mudah dipahami<br />
            ✅Kamu bisa mengulang video-video yang sudah kamu tonton<br />
          </p>
        </div>
        <img
          src="./assets/img/video.png"
          alt="Feature 2"
          class="object-contain w-1/5 h-auto rounded-lg ml-4"
        />
      </div>
      <!-- Feature 3 -->
      <div class="flex items-center justify-center">
        <img
          src="./assets/img/translate.png"
          alt="Feature 1"
          class="object-contain w-1/4 h-auto rounded-lg mr-10"
        />
        <div>
          <h3 class="text-xl font-semibold mb-2">Translator</h3>
          <p class="text-gray-600 text-lg">
            ✅Kamu bisa terjemahin gerakan bahasa isyarat jadi teks<br />
            ✅Terjemahkan bahasa isyarat ke bahasa lisan untuk komunikasi lebih
            luas.<br />
          </p>
        </div>
      </div>
      <!-- Feature 4 -->
      <div class="flex items-center justify-center mt-8">
        <div class="w-1/2">
          <h3 class="text-xl font-semibold mb-2">Forum Komunitas</h3>
          <p class="text-gray-600 text-lg">
            ✅Di sini kamu bisa sharing, dan diskusi bareng teman-teman yang
            juga suka bahasa isyarat. <br />
            ✅Kamu bisa tanya jawab dengan teman-teman yang lain.<br />
            ✅Kamu bisa sharing pengalaman kamu dalam belajar bahasa isyarat.<br />
          </p>
        </div>
        <img
          src="./assets/img/forum.png"
          alt="Feature 4"
          class="object-contain w-1/6 h-auto rounded-lg ml-4"
        />
      </div>
    </div>
  </section>
  <!-- end feature -->

  <!-- disclosure -->
  <div class="w-full px-16 pt-20 mb-8">
    <h2 class="text-4xl font-semibold text-center mb-8">
      Yang Sering ditanyakan
    </h2>
    <div class="mx-auto max-w-6xl rounded-3xl bg-white p-6">
      <!-- 1 -->
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-blue-700 px-6 py-3 text-left text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
        >
          <span>Apa itu SAPASEMUA ?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-6 w-6 text-white"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-6 pb-3 pt-6 text-lg text-gray-500">
          SAPASEMUA adalah platform pembelajaran bahasa isyarat dengan bantuan
          AI yang memungkinkan pembelajaran bahasa isyarat dengan mudah dan
          menyenangkan.
        </DisclosurePanel>
      </Disclosure>
      <!-- 2 -->
      <Disclosure as="div" class="mt-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-blue-700 px-6 py-3 text-left text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
        >
          <span>Apa saja fitur di SAPASEMUA ?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-6 w-6 text-white-500"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-6 pb-3 pt-6 text-lg text-gray-500">
          Platform pembelajaran bahasa isyarat yang menyenangkan. Nikmati kuis,
          materi video, dan terjemahan instan. Bergabunglah dengan komunitas,
          pantau progress belajar, dan dapatkan sertifikat. Gratis dan fleksibel
          untuk belajar di mana saja, kapan saja. Mulai belajar bahasa isyarat
          dengan Sapa Semua hari ini!
        </DisclosurePanel>
      </Disclosure>
      <!-- 3 -->
      <Disclosure as="div" class="mt-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-blue-700 px-6 py-3 text-left text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
        >
          <span>Apakah SAPASEMUA berbayar ?</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-6 w-6 text-white"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-6 pb-3 pt-6 text-lg text-gray-500">
          Tidak, SAPASEMUA adalah platform pembelajaran bahasa isyarat yang
          gratis untuk kamu gunakan oleh siapa saja.
        </DisclosurePanel>
      </Disclosure>
      <!-- 4 -->
      <Disclosure as="div" class="mt-4" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-blue-700 px-6 py-3 text-left text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75"
        >
          <span
            >Kemana saya bisa mendapatkan informasi untuk bekerjasama atau jika
            terdapat kendala ?</span
          >
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-6 w-6 text-white"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-6 pb-3 pt-6 text-lg text-gray-500">
          Jika Anda tertarik untuk bekerja sama atau memiliki kendala yang perlu
          diselesaikan, Anda bisa menghubungi kami melalui salah satu cara
          berikut:<br />
          Email: info@sapasemua.com & Telepon: +62 812 3456 7890
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>

  <!-- end disclosure -->
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/20/solid";
</script>
