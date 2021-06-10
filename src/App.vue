<template>
  <div class="flex flex-col mx-12 lg:mx-14 my-6">
    <Header></Header>
    <div class="grid grid-cols-5">
      <div class="col-span-1">
        <div class="mt-32 flex flex-col"></div>
        <ul>
          <div v-for="r in routes" :key="r ?? 'home'">
            <router-link
              :to="'/' + (r ?? '')"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
              custom
            >
              <li>
                <a
                  :class="['link', isActive && 'text-brand-dark']"
                  :href="href"
                  @click="navigate"
                  >{{ r ?? "home" }}</a
                >
              </li>
            </router-link>
          </div>
        </ul>
      </div>
      <div class="col-span-4">
        <transition>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/header/Header.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    Header,
    Sidebar,
  },
  setup(props) {
    const routes = [null, "shop", "about", "contact"];
    return { routes };
  },
});
</script>