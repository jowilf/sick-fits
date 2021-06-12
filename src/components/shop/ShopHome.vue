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
      <product
        :product="product"
        v-for="product in products"
        :key="product.id"
      />
      <product
        :product="product"
        v-for="product in products"
        :key="product.id + 123"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Product from "../product/Product.vue";
import { ALL_PRODUCTS } from "../product/product";

export default defineComponent({
  name: "ShopHome",
  components: {
    Product,
  },
  setup(props) {
    const products = ALL_PRODUCTS;
    return { products };
  },
});
</script>