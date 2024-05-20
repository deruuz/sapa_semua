import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import Course from "./Course.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Home", // Tambahkan rute ini
      name: "Home",
      component: Home,
    },
    {
      path: "/Course", // Tambahkan rute ini
      name: "Course",
      component: Course,
    },

    // tambahkan rute lainnya di sini
  ],
});

createApp(App).use(router).mount("#app");
