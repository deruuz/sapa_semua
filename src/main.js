import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home.vue";
import About from "./About.vue";
import Course from "./Course.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'DefaultHome',
      component: Home,
    },
    {
      path: "/Home",
      name: "Home",
      component: Home,
    },
    {
      path: "/About",
      name: "About",
      component: About,
    },
    {
      path: "/Course",
      name: "Course",
      component: Course,
    },

    // tambahkan rute lainnya di sini
  ],
});

createApp(App).use(router).mount("#app");
