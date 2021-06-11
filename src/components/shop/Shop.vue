<template>
  <div class="flex flex-col">
    <div class="flex place-items-center mt-6">
      <div class="flex-grow sep mr-4"></div>
      <div class="text-brand">THE COLLECTION</div>
      <div class="flex-grow sep ml-4"></div>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-2">
      <product :product="product" v-for="product in products" :key="product" />
      <product :product="product" v-for="product in products" :key="product" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Product from "../product/Product.vue";

export default defineComponent({
  name: "Shop",
  components: {
    Product,
  },
  setup(props) {
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
    ];
    return { products };
  },
});
</script>