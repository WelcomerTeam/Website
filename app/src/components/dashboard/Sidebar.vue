<template>
  <div>
    <div
      v-if="$store.getters.isLoadingGuild"
      class="justify-center flex h-10 items-center"
    >
      <LoadingIcon />
    </div>
    <div v-else>
      <div class="flex items-center flex-shrink-0 px-4">
        <img
          v-if="$store.getters.getCurrentSelectedGuild"
          class="w-10 h-10 rounded-lg"
          :src="
            $store.getters.getCurrentSelectedGuild?.icon !== ''
              ? `https://cdn.discordapp.com/icons/${$store.getters.getCurrentSelectedGuild?.id}/${$store.getters.getCurrentSelectedGuild?.icon}.webp?size=128`
              : '/assets/discordServer.svg'
          "
          alt="Guild icon"
        />
        <div class="pl-2 overflow-hidden dark:text-gray-50">
          <router-link
            @click="$emit('onTabClick')"
            :to="{ name: 'dashboard.guild.overview', params: $route.params }"
            v-if="$store.getters.getCurrentSelectedGuild"
          >
            <h3 class="truncate font-bold leading-none hover:underline">
              {{ $store.getters.getCurrentSelectedGuild?.name }}
            </h3>
          </router-link>
          <h3 v-else class="truncate font-bold leading-none">
            No Guild Selected
          </h3>
          <router-link
            @click="$emit('onTabClick')"
            class="text-xs leading-none font-semibold text-gray-600 dark:text-gray-300 hover:underline"
            :to="{ name: 'dashboard.guilds', params: $route.params }"
            >Change Guild</router-link
          >
        </div>
      </div>

      <!-- Sidebar -->
      <nav
        class="flex flex-col flex-1 px-3 mt-5 overflow-y-auto divide-y divide-gray-300 dark:divide-secondary custom-scroll"
        aria-label="Sidebar"
        v-if="$store.getters.getCurrentSelectedGuild"
      >
        <div
          v-for="(nav, index) in navigation"
          v-bind:key="index"
          :class="[index === 0 ? '' : 'pt-3 mt-3']"
        >
          <div>
            <span
              class="text-xs font-bold uppercase text-secondary-light dark:text-gray-50"
              v-if="nav.title"
              >{{ nav.title }}</span
            >
            <router-link
              @click="$emit('onTabClick')"
              v-for="item in nav.items"
              :key="item.name"
              :to="{ name: item.linkname, params: $route.params }"
              :class="[
                $route.name === item.linkname
                  ? 'text-primary'
                  : 'text-secondary dark:text-white',
                'hover:bg-gray-200 dark:hover:bg-secondary-light group flex items-center px-2 py-2 text-sm leading-6 font-semibold rounded-md',
                item.extendedClass,
              ]"
            >
              <font-awesome-icon
                :icon="item.icon"
                :class="[
                  $route.name === item.linkname
                    ? 'text-primary'
                    : 'text-secondary-dark dark:text-gray-300',
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
  </div>
</template>

<script>
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
import LoadingIcon from "@/components/LoadingIcon.vue";

const navigation = [
  {
    items: [
      {
        name: "Memberships",
        linkname: "dashboard.guild.memberships",
        icon: "heart",
      },
    ],
  },
  {
    items: [
      {
        name: "Guild Overview",
        linkname: "dashboard.guild.overview",
        icon: "chart-line",
      },
      {
        name: "Bot Settings",
        linkname: "dashboard.guild.settings",
        icon: "wrench",
      },
    ],
  },
  {
    items: [
      {
        name: "Welcomer",
        linkname: "dashboard.guild.welcomer",
        icon: "user-plus",
      },
      {
        name: "Rules",
        linkname: "dashboard.guild.rules",
        icon: "list-ol",
      },
      {
        name: "Borderwall",
        linkname: "dashboard.guild.borderwall",
        icon: "door-closed",
      },
      {
        name: "AutoRoles",
        linkname: "dashboard.guild.autoroles",
        icon: "user-check",
      },
      {
        name: "Leaver",
        linkname: "dashboard.guild.leaver",
        icon: "user-minus",
      },
    ],
  },
  {
    items: [
      {
        name: "FreeRoles",
        linkname: "dashboard.guild.freeroles",
        icon: "list-check",
      },
      {
        name: "TimeRoles",
        linkname: "dashboard.guild.timeroles",
        icon: "user-clock",
      },
      {
        name: "TempChannels",
        linkname: "dashboard.guild.tempchannels",
        icon: "microphone-lines",
      },
    ],
  },
  {
    items: [
      {
        name: "Examples",
        linkname: "dashboard.guild.example",
        icon: "list-check",
      },
    ],
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
