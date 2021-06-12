<template>
  <div class="relative">
    <Header @navclick="navclick" />
    <main>
      <div class="flex flex-col mx-4 sm:mx-12 lg:mx-14 my-6">
        <div class="grid grid-cols-5 flex-grow">
          <div class="sm:block hidden">
            <sidebar />
          </div>
          <div class="sm:col-span-4 col-span-5">
            <transition>
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </transition>
          </div>
        </div>
      </div>
    </main>
    <div
      :class="[
        'absolute',
        'w-full',
        'h-screen',
        'top-0',
        'bg-white',
        'flex',
        'place-content-center',
        'transform',
        'transition-all',
        'duration-500',
        'ease-in-out',
        'fixed',
        'z-50',
        open ? 'translate-x-0' : '-translate-x-full',
      ]"
      ref="mobileMenu"
    >
      <sidebar @navclick="navclick" @navclose="navclose" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import Header from "./components/header/Header.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Sidebar,
  },
  setup(props) {
    const open = ref(false);
    const mobileMenu = ref(null);
    watchEffect(
      () => {
        console.log(mobileMenu.value);
      },
      {
        flush: "post",
      }
    );
    const navclick = () => {
      open.value = !open.value;
      console.log("navclick" + open.value);
    };
    const navclose = () => {
      open.value = false;
      console.log("navclose" + open.value);
    };
    return { open, navclick, navclose, mobileMenu };
  },
});
</script>