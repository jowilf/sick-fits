<template>
  <div class="flex">
    <div class="flex items-center">
      <span class="text-3xl text-brand-dark">Sick Fits</span>
    </div>
    <div class="flex-grow"><span></span></div>
    <div class="flex flex-row">
      <div class="relative text-gray-500 border h-8 border-gray-400 rounded-sm">
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
          class="h-7 w-40 lg:w-52 mb-0 border-0 focus:ring-0 mx-4 text-xs"
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
<script lang="ts" src="./Header.tsx"></script>
<style lang="">
</style>