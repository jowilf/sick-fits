import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/home/Home.vue";
import Shop from "./components/shop/Shop.vue";
import About from "./components/about/About.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/shop", component: Shop },
    { path: "/about", component: About },
  ],
});

createApp(App).use(router).mount("#app");
