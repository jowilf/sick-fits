<template>
  <div class="flex flex-col mx-5 mt-10">
    <div class="flex justify-between">
      <span class="font-light text-xs lg:text-sm text-gray-500"
        >Home / Shop / {{ product.name }}</span
      >
      <span class="text-brand hidden"> &lt; Prev | next &gt;</span>
    </div>
    <div class="mt-10 grid sm:grid-cols-2">
      <div class="flex flex-col">
        <img
          :src="product.img"
          class="
            w-full
            h-72
            lg:h-80
            rounded-sm
            shadow-sm
            object-cover object-center
          "
        />
        <p class="text-brand-black text-sm mt-4 sm:block hidden">
          {{ product.description }}
        </p>
      </div>

      <div class="flex flex-col sm:ml-8">
        <span class="sm:mt-0 mt-4 text-xl text-brand-black">{{
          product.name
        }}</span>
        <span class="text-2xl text-brand-black mt-2">${{ product.price }}</span>

        <p class="text-brand-black text-sm mt-4 sm:hidden">
          {{ product.description }}
        </p>
        <span class="text-gray-500 mt-4">Size</span>
        <select
          class="border-gray-300 border-2 text-brand-black"
          name="size"
          id="size"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
        </select>
        <span class="text-gray-500 mt-4">Color</span>
        <div class="flex flex-row mt-1 space-x-2">
          <div class="w-6 h-6 bg-brand rounded-full ring-1 ring-brand"></div>
          <div class="w-6 h-6 bg-white rounded-full ring-1 ring-brand"></div>
        </div>
        <span class="text-gray-500 mt-4">Quantity</span>
        <input
          class="w-28 focus:ring-brand focus:border-brand mt-1 text-brand-black"
          type="text"
          placeholder="1"
        />
        <div class="flex flex-row mt-4 space-x-2">
          <div
            class="
              flex-grow flex
              border
              text-brand
              border-brand
              justify-center
              active:bg-gray-200
              cursor-pointer
            "
          >
            <span class="my-auto">Add to Cart</span>
          </div>
          <div
            class="
              flex
              border
              text-brand
              border-brand
              active:bg-gray-200
              cursor-pointer
              justify-center
              px-4
              py-2
            "
            @click="isLike = !isLike"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              v-if="!isLike"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              v-else
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div
          class="
            text-white
            bg-brand
            mt-4
            flex
            justify-center
            active:bg-brand-dark
            cursor-pointer
            py-2
          "
        >
          <span class="">Buy now</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script  lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import { ProductObject } from "./product";

export default defineComponent({
  props: {
    product: {
      type: ProductObject,
      required: true,
    },
  },
  setup(props) {
    const isLike = ref(true);
    console.log(props);
    return { isLike };
  },
});
</script>