<template>
  <div class="relative flex flex-col place-items-center mx-2 mt-4">
    <div class="relative">
      <span
        class="absolute bg-brand text-white text-xs py-1 px-4 rounded-tl-sm"
        v-if="product.label"
        >{{ product.label }}</span
      >
      <img
        :src="product.img"
        class="h-72 w-full object-cover object-center rounded-sm"
      />
    </div>
    <div class="text-brand-black text-sm mt-2 text-center">{{ product.name }}</div>
    <div class="text-brand-black mt-2 font-medium">${{ product.price }}</div>
    <div
      class="
        absolute
        inset-y-0 inset-x-0
        h-full
        w-full
        active:bg-white
        active:opacity-20
        cursor-pointer
      "
      @click="gotoDetail"
    ></div>
  </div>
</template>
<script  lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { ProductObject } from "./product";
import ProductDetailVue from "./ProductDetail.vue";
export default defineComponent({
  name: "Product",
  props: {
    product: {
      type: ProductObject,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const gotoDetail = () => {
      router.push({
        name: "ProductDetail",
        params: { value: JSON.stringify(props.product) },
      });
    };
    return { gotoDetail };
  },
});
</script>