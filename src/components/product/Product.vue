<template>
  <div class="flex flex-col place-items-center mx-2 space-y-1 mt-4">
    <img
      :src="'http://localhost:8000/' + product.img"
      class="h-72 w-full object-cover object-center rounded-md shadow-lg"
    />
    <div class="text-brand-black">{{ product.name }}</div>
    <div class="text-brand-black">${{ product.price }}</div>
  </div>
</template>
<script  lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Product",
  props: {
    product: Object,
  },
  setup(props) {
    const getImageURL = (img) => {
      /* var images = require.context("../assets/", false, /\.png$/);
      return images("./" + pet + ".png"); */
    };
  },
});
</script>