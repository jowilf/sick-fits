<template>
  <div class="flex flex-col">
    <div class="mt-4 mr-1">
      <img
        class="
          w-full
          h-32
          xs:h-40
          sm:h-56
          lg:h-96
          object-cover object-right
          rounded-md
        "
        src="https://docs.google.com/uc?export=download&id=1TMLPbAXiJ6P1ObmICG-jLVb1dH2w9mlM"
      />
    </div>
    <div class="flex place-items-center mt-6">
      <div class="flex-grow sep mr-4"></div>
      <div class="text-brand">FEATURED ITEMS</div>
      <div class="flex-grow sep ml-4"></div>
    </div>
    <div
      class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-2"
    >
      <product
        :product="product"
        v-for="product in products"
        :key="product.id"
      />
    </div>
    <div class="mt-10 flex place-content-center">
      <router-link to="/shop" v-slot="{ href, navigate }" custom>
        <a
          class="
            border border-gray-400
            hover:bg-brand-light
            active:bg-brand
            hover:text-white
            active:text-white
            px-8
            py-1
            cursor-pointer
            text-brand-black
          "
          :href="href"
          @click="navigate"
          >Shop All</a
        >
      </router-link>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Product from "../product/Product.vue";
import {  ALL_PRODUCTS } from "../product/product";

export default defineComponent({
  name: "Home",
  components: {
    Product,
  },
  setup(props) {
    const products = ALL_PRODUCTS;
    return { products };
  },
});
</script>