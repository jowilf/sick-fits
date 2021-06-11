<template>
  <div class="flex flex-col place-items-center mx-2 space-y-1 mt-4">
    <div class="relative">
      <span
        class="absolute bg-brand text-white text-xs py-1 px-4 rounded-tl-sm"
        v-if="product.label"
        >{{ product.label }}</span
      >
      <img
        :src="'http://localhost:8000/' + product.img"
        class="h-72 w-full object-cover object-center rounded-sm"
      />
    </div>
    <div class="text-brand-black text-sm">{{ product.name }}</div>
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
  },
});
</script>