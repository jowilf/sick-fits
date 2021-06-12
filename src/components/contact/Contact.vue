<template>
  <div class="flex flex-col">
    <div class="flex place-items-center mt-6">
      <div class="flex-grow sep mr-4"></div>
      <div class="text-brand uppercase">Contact us</div>
      <div class="flex-grow sep ml-4"></div>
    </div>
    <div class="flex justify-center">
      <span class="max-w-sm m-5 sm:m-10 text-brand-black">
        For all order support, please include your order number and date that
        your order was placed
      </span>
    </div>
    <div class="flex justify-center text-brand-black text-sm">
      <div
        class="grid sm:grid-cols-2 w-full mx-5 sm:w-[30rem] grid-cols-1 gap-2"
      >
        <div class="flex flex-col space-y-1">
          <span>Enter your First Name</span>
          <input
            class="focus:ring-brand focus:border-brand"
            type="text"
            placeholder="First Name"
          />
        </div>

        <div class="flex flex-col space-y-1">
          <span>Enter your Last Name</span>
          <input
            class="focus:ring-brand focus:border-brand"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div class="flex flex-col space-y-1">
          <span>Enter your Email</span>
          <input
            class="focus:ring-brand focus:border-brand"
            type="email"
            placeholder="Email"
          />
        </div>
        <div class="flex flex-col w-full space-y-1">
          <span>Enter your Phone</span>
          <input
            class="focus:ring-brand focus:border-brand"
            type="text"
            placeholder="Phone"
          />
        </div>
        <div class="flex flex-col w-full space-y-1 sm:col-span-2">
          <span>Enter your Message Here</span>
          <textarea
            class="focus:ring-brand focus:border-brand resize-none"
            rows="3"
            placeholder="Type your Message Here"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <span
        class="
          border border-gray-400
          hover:bg-brand-light
          active:bg-brand
          hover:text-white
          active:text-white
          px-8
          py-1
          mt-5
          cursor-pointer
          text-brand-black
        "
        >Submit</span
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup(props) {
    const inputs = [
      "Enter your First Name",
      "Enter your Last Name",
      "Enter your Email",
      "Enter your Phone",
    ];
  },
});
</script>