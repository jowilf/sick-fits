<template>
  <div class="flex flex-col">
    <div class="flex place-items-center mt-6">
      <div class="flex-grow sep mr-4"></div>
      <div class="text-brand">THE COLLECTION</div>
      <div class="flex-grow sep ml-4"></div>
    </div>
    <div
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-2"
    >
      <product :product="product" v-for="product in products" :key="product" />
      <product :product="product" v-for="product in products" :key="product" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Product from "../product/Product.vue";

export default defineComponent({
  name: "ShopHome",
  components: {
    Product,
  },
  setup(props) {
    const imgs = [
      "https://docs.google.com/uc?export=download&id=1PM69ATaTXj-D7qmwiz2iiv_mxGBOqP_w",
      "https://docs.google.com/uc?export=download&id=1DqSDzxYQ1kqM2A_Y6XcZ8wWwyg8FYSXk",
      "https://docs.google.com/uc?export=download&id=1B9kqLd4ykPOzRdCxP5W7ZNwCQ4LXTutY",
      "https://docs.google.com/uc?export=download&id=1S0UlOnTYeZiVGgtZpnhZjb9d4EAHveAU",
      "https://docs.google.com/uc?export=download&id=1rqUQ1bgSWi4bzh20uLnq8WeHptJP7Kzm",
      "https://docs.google.com/uc?export=download&id=124mey7q_o4Jo7FapOLm0mDgIxlpKLSTy",
      "https://docs.google.com/uc?export=download&id=13IaLfew_j5rX3P3rxoAkYcY_7grx_RZh",
      "https://docs.google.com/uc?export=download&id=1TMLPbAXiJ6P1ObmICG-jLVb1dH2w9mlM",
      "https://docs.google.com/uc?export=download&id=1aeWcmP5v_w4NQXdda-kA8k61AXcV_3WG",
      "https://docs.google.com/uc?export=download&id=1lXx8fHeG3mElRsgtXcdzpUDYbYy7eEmo",
    ];
    const products = [
      {
        name: "Anna Blouse",
        price: "15.00",
        img: "img1.jpg",
        label: "Best Seller",
      },
      {
        name: "Anna Blouse",
        price: "115.00",
        img: "img2.jpg",
      },
      {
        name: "Anna Blouse",
        price: "16.00",
        img: "img3.jpg",
        label: "New",
      },
      {
        name: "Anna Blouse",
        price: "55.00",
        img: "img4.jpg",
      },
      {
        name: "Anna Blouse",
        price: "39.00",
        img: "img5.jpg",
      },
      {
        name: "Anna Blouse",
        price: "1500.00",
        img: "img6.jpg",
      },
      {
        name: "Anna Blouse",
        price: "220.00",
        img: "img7.jpg",
      },
      {
        name: "Anna Blouse",
        price: "67.00",
        img: "img8.jpg",
      },
      {
        name: "Anna Blouse",
        price: "999.00",
        img: "img9.jpg",
      },
      {
        name: "Anna Blouse",
        price: "499.00",
        img: "img10.jpg",
      },
    ];
    return { products };
  },
});
</script>