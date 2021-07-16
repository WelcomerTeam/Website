<template>
  <div>
    <div class="flex items-center flex-shrink-0 px-4">
      <img class="w-10 h-10 rounded-lg" src="https://cdn.discordapp.com/icons/336642139381301249/3aa641b21acded468308a37eef43d7b3.webp?size=128" />
      <div class="pl-2 overflow-hidden text-base">
        <h3 class="leading-tight truncate">discord.py</h3>
        <!-- <a class="text-xs leading-tight text-gray-500" @click.prevent="selectingGuild = true">Change Guild</a> -->
        <router-link class="text-xs leading-tight text-gray-500" to="/dashboard/myguilds">Change Guild</router-link>
      </div>
    </div>

    <!-- Sidebar -->
    <nav
      class="flex flex-col flex-1 px-3 mt-5 overflow-y-auto divide-y divide-gray-300 "
      aria-label="Sidebar"
    >
      <div v-for="(nav, index) in navigation" v-bind:key="index" :class="[index == 0 ? '' : 'pt-3 mt-3']">
        <div>
          <router-link
            v-for="item in nav"
            :key="item.name"
            :to="item.href"
            :class="[
              $route.path == item.href ? 'bg-second-800 text-primary' : 'text-secondary-light',
              'hover:bg-gray-200 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
            ]"
          >
            <svg-icon
              type="mdi"
              :path="item.icon"
              :class="[
                $route.path == item.href ? 'text-primary' : 'text-secondary',
                'flex-shrink-0 w-6 h-6 mr-4',
              ]"
              aria-hidden="true"
            />
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import { XIcon } from '@heroicons/vue/outline';

import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import {
  mdiHelpRhombus
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

const navigation = [
  [
    { name: "Home", href: "/dashboard", icon: mdiHelpRhombus },
    { name: "a", href: "/dashboard/myguilds", icon: mdiHelpRhombus },
    { name: "b", href: "#", icon: mdiHelpRhombus },
    { name: "c", href: "#", icon: mdiHelpRhombus },
    { name: "d", href: "#", icon: mdiHelpRhombus },
    { name: "e", href: "#", icon: mdiHelpRhombus },
  ],
  [
    { name: "Home", href: "#", icon: mdiHelpRhombus },
    { name: "a", href: "#", icon: mdiHelpRhombus },
    { name: "b", href: "#", icon: mdiHelpRhombus },
    { name: "c", href: "#", icon: mdiHelpRhombus },
    { name: "d", href: "#", icon: mdiHelpRhombus },
    { name: "e", href: "#", icon: mdiHelpRhombus },
  ],
  [
    { name: "Home", href: "#", icon: mdiHelpRhombus },
    { name: "a", href: "#", icon: mdiHelpRhombus },
    { name: "b", href: "#", icon: mdiHelpRhombus },
    { name: "c", href: "#", icon: mdiHelpRhombus },
    { name: "d", href: "#", icon: mdiHelpRhombus },
    { name: "e", href: "#", icon: mdiHelpRhombus },
  ],
];

export default {
  components: {
    SvgIcon,
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    DialogTitle,
    TransitionRoot,
    XIcon,
  },
  setup() {
    const selectingGuild = ref(false)

return {
      navigation,

      selectingGuild,

      mdiHelpRhombus,
    };
  },
};
</script>
