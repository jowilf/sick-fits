<template>
  <div class="flex flex-col">
    <div class="flex place-items-center mt-6">
      <div class="flex-grow sep mr-4"></div>
      <div class="text-brand">BEHIND THE BRAND</div>
      <div class="flex-grow sep ml-4"></div>
    </div>
    <div class="relative flex justify-end mr-32 mt-4">
      <div class="absolute h-full flex flex-col justify-center">
        <img
          class="
            w-32
            h-36
            mr-44
            shadow-2xl
            rounded-sm
            object-cover object-center
          "
          src="http://localhost:8000/img7.jpg"
        />
      </div>
      <img
        class="w-52 h-64 rounded-sm object-cover object-center"
        src="http://localhost:8000/img10.jpg"
      />
    </div>
    <p class="mr-32 mt-4 text-right text-sm text-brand-black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p class="mr-32 mt-4 text-right text-sm text-brand-black font-light">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout. The point of using
      Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like
      readable English. Many desktop publishing packages and web page editors
      now use Lorem Ipsum as their default model text, and a search for 'lorem
      ipsum' will uncover many web sites still in their infancy. Various
      versions have evolved over the years, sometimes by accident, sometimes on
      purpose (injected humour and the like).
    </p>
  </div>
</template>
<script lang="ts">
export default {};
</script>