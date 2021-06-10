import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/home/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [{ path: "/", component: Home }],
});

createApp(App).use(router).mount("#app");
