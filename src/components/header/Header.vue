<template>
  <div class="flex">
    <div class="flex items-center">
      <span class="sm:block hidden text-3xl text-brand-dark">Sick Fits</span>
      <button
        @click="$emit('navclick')"
        type="button"
        class="
          inline-flex
          items-center
          justify-center
          p-2
          rounded-md
          text-brand
          hover:text-white
          hover:bg-brand
          mr-2
          focus:outline-none
          sm:hidden
          focus:ring-2 focus:ring-inset focus:ring-white
        "
        aria-controls="mobile-menu"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          /></svg
        ><svg
          class="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    <div class="flex-grow sm:block hidden"><span></span></div>
    <div class="flex flex-row flex-grow sm:flex-grow-0">
      <div
        class="
          relative
          w-full
          sm:w-40
          lg:w-52
          text-gray-500
          border
          h-10
          sm:h-8
          border-gray-400
          rounded-sm
        "
      >
        <span class="absolute inset-y-0 left-0 flex items-center mx-1">
          <button
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-4 h-4"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="text"
          class="h-9 sm:h-7 mb-0 border-0 focus:ring-0 mx-4 text-xs"
          placeholder="Search..."
        />
      </div>
      <div class="text-brand-black mb-1 flex items-center ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { ref } from "vue";
import Sidebar from "../sidebar/Sidebar.vue";

export default defineComponent({
  name: "Header",
  components: {
    Sidebar,
  },
  emits: ["nav"],
});
</script>
