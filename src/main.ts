import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import Home from "./components/home/Home.vue";
import Shop from "./components/shop/Shop.vue";
import ShopHome from "./components/shop/ShopHome.vue";
import About from "./components/about/About.vue";
import Contact from "./components/contact/Contact.vue";
import ProductDetail from "./components/product/ProductDetail.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/shop",
      component: Shop,
      children: [
        { path: "", component: ShopHome },
        {
          path: "detail",
          name: "ProductDetail",
          component: ProductDetail,
          props: (route) => ({
            product: JSON.parse(route.params.value.toString()),
          }),
        },
      ],
    },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
  ],
});

createApp(App).use(router).mount("#app");
