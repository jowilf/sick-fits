<template>
  <div class="relative flex flex-col mx-12 lg:mx-14 my-6">
    <Header @navclick="navclick" />
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
    <div
      class="absolute w-full h-full inset-0 bg-white flex place-content-center"
      v-if="open"
    >
      <sidebar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
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
    const navclick = () => {
      open.value = !open.value;
      console.log("navclick" + open.value);
    };
    return { open, navclick };
  },
});
</script>