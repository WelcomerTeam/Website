<template>
  <div>
    <div
      v-if="$store.getters.isLoadingGuild"
      class="justify-center flex h-10 items-center"
    >
      <LoadingIcon />
    </div>
    <div v-else class="flex items-center flex-shrink-0 px-4">
      <img
        class="w-10 h-10 rounded-lg"
        :src="
          'https://cdn.discordapp.com/icons/' +
          $store.getters.getCurrentSelectedGuild?.id +
          '/' +
          $store.getters.getCurrentSelectedGuild?.icon +
          '.webp?size=128'
        "
      />
      <div class="pl-2 overflow-hidden">
        <router-link to="/dashboard">
          <h3 class="truncate font-bold leading-none">
            {{ $store.getters.getCurrentSelectedGuild?.name }}
          </h3>
        </router-link>
        <router-link
          class="text-xs leading-none font-semibold text-gray-600"
          to="/dashboard/myguilds"
          @click="$emit('onChangeGuild')"
          >Change Guild</router-link
        >
      </div>
    </div>

    <!-- Sidebar -->
    <nav
      class="flex flex-col flex-1 px-3 mt-5 overflow-y-auto divide-y divide-gray-300"
      aria-label="Sidebar"
    >
      <div
        v-for="(nav, index) in navigation"
        v-bind:key="index"
        :class="[index === 0 ? '' : 'pt-3 mt-3']"
      >
        <div>
          <span
            class="text-xs font-bold uppercase text-secondary-light"
            v-if="nav.title"
            >{{ nav.title }}</span
          >
          <router-link
            v-for="item in nav.items"
            :key="item.name"
            :to="item.href"
            :class="[
              $route.path === item.href
                ? 'bg-gray-200 text-primary'
                : 'text-secondary-light',
              'hover:bg-gray-200 group flex items-center px-2 py-2 text-sm leading-6 font-semibold rounded-md',
              item.extendedClass,
            ]"
          >
            <font-awesome-icon
              :icon="item.icon"
              :class="[
                $route.path === item.href
                  ? 'text-primary'
                  : 'text-secondary-dark',
                'flex-shrink-0 w-6 h-6 mr-4',
                item.extendedClass,
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
import { XIcon } from "@heroicons/vue/outline";

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
import LoadingIcon from "../LoadingIcon.vue";

const navigation = [
  {
    items: [
      {
        name: "Memberships",
        href: "/dashboard/memberships",
        icon: "heart",
        extendedClass: "text-donate-light",
      },
    ],
  },
  {
    items: [
      {
        name: "Guild Overview",
        href: "/dashboard",
        icon: "chart-line",
      },
      {
        name: "Bot Settings",
        href: "/dashboard/settings",
        icon: "wrench",
      },
    ],
  },
  {
    items: [
      {
        name: "Welcomer",
        href: "/dashboard/welcomer",
        icon: "user-plus",
      },
      {
        name: "Rules",
        href: "/dashboard/rules",
        icon: "list-ol",
      },
      {
        name: "Borderwall",
        href: "/dashboard/borderwall",
        icon: "door-closed",
      },
      {
        name: "AutoRoles",
        href: "/dashboard/autorole",
        icon: "user-check",
      },
      {
        name: "Leaver",
        href: "/dashboard/leaver",
        icon: "user-minus",
      },
    ],
  },
  {
    items: [
      {
        name: "FreeRoles",
        href: "/dashboard/freeroles",
        icon: "list-check",
      },
      {
        name: "TimeRoles",
        href: "/dashboard/timeroles",
        icon: "user-clock",
      },
      {
        name: "TempChannels",
        href: "/dashboard/tempchannels",
        icon: "microphone-lines",
      },
    ],
  },
  {
    items: [{ name: "AutoMod", href: "/dashboard/automod", icon: "shield" }],
  },
];

export default {
  components: {
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
    LoadingIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>
