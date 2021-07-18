<template>
  <div>
    <div class="flex items-center flex-shrink-0 px-4">
      <img class="w-10 h-10 rounded-lg" src="https://cdn.discordapp.com/icons/336642139381301249/3aa641b21acded468308a37eef43d7b3.webp?size=128" />
      <div class="pl-2 overflow-hidden text-base">
        <h3 class="leading-tight truncate">discord.py</h3>
        <router-link class="text-xs leading-tight text-gray-500" to="/dashboard/myguilds" @click="$emit('onChangeGuild')">Change Guild</router-link>
      </div>
    </div>

    <!-- Sidebar -->
    <nav
      class="flex flex-col flex-1 px-3 mt-5 overflow-y-auto divide-y divide-gray-300"
      aria-label="Sidebar"
    >
      <div v-for="(nav, index) in navigation" v-bind:key="index" :class="[index === 0 ? '' : 'pt-3 mt-3']">
        <div>
          <span class="text-xs font-bold uppercase text-secondary-light" v-if="nav.title">{{ nav.title }}</span>
          <router-link
            v-for="item in nav.items"
            :key="item.name"
            :to="item.href"
            :class="[
              $route.path === item.href ? 'bg-second-800 text-primary' : 'text-secondary-light',
              'hover:bg-gray-200 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
              item.extendedClass
            ]"
          >
            <svg-icon
              type="mdi"
              :path="item.icon"
              :class="[
                $route.path === item.href ? 'text-primary' : 'text-secondary-dark',
                'flex-shrink-0 w-6 h-6 mr-4',
                item.extendedClass
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
  mdiPulse,
  mdiLifebuoy,

  mdiImageText,
  mdiCardText,
  mdiFormatPaint,

  mdiCardBulletedOutline,
  mdiHeartBox,
  mdiCog,

  mdiTimelinePlus,
  mdiCastle,
  mdiAccountDetails,
  mdiFormatListBulletedSquare,
  mdiExitToApp,

  mdiPlaylistStar,
  mdiFormatListNumbered,
  mdiTimelineClock,
  mdiChartBox,
  mdiRayStartVertexEnd,
  mdiRayStartArrow,

  mdiRobotAngry,
  mdiProgressClock,
  mdiPin,
  mdiMessageTextLock,
  mdiVolumePlus,

  mdiPail,
  mdiFileTree,
  mdiBookshelf,
  mdiBookSettings,

  mdiAccountGroup,
  mdiAccountStar,
  mdiHelpRhombus,
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

const navigation = [
  {
    title: "Debug",
    items: [
      { name: "Field Test", href: "/dashboard/fieldtest", icon: mdiHelpRhombus },
      { name: "Example", href: "/dashboard/example", icon: mdiHelpRhombus },
    ]
  },
  {
    items: [
      { name: "Status", href: "/status", icon: mdiPulse },
      { name: "Support Server", href: "/support", icon: mdiLifebuoy },
    ]
  },
  {
    title: "Utilities",
    items: [
      { name: "Image Backgrounds", href: "/backgrounds", icon: mdiImageText },
      { name: "Custom Embed Builder", href: "/builder", icon: mdiCardText },
      { name: "Text Formatting", href: "/formatting", icon: mdiFormatPaint },
    ]
  },
  {
    title: "Guild",
    items: [
      { name: "View Guild Page", href: "/dashboard/guild", icon: mdiCardBulletedOutline },
      { name: "Guild Membership", href: "/dashboard/memberships", icon: mdiHeartBox, extendedClass: "text-donate-light" },
      { name: "Welcomer Settings", href: "/dashboard/settings", icon: mdiCog },
    ]
  },
  {
    title: "Members",
    items: [
      { name: "Welcomer", href: "/dashboard/welcomer", icon: mdiTimelinePlus },
      { name: "Borderwall", href: "/dashboard/borderwall", icon: mdiCastle },
      { name: "AutoRole", href: "/dashboard/autorole", icon: mdiAccountDetails },
      { name: "Rules", href: "/dashboard/rules", icon: mdiFormatListBulletedSquare },
      { name: "Leaver", href: "/dashboard/leaver", icon: mdiExitToApp },
    ]
  },
  {
    title: "Engagement",
    items: [
      { name: "ReactionRoles", href: "/dashboard/reactionroles", icon: mdiPlaylistStar },
      { name: "FreeRoles", href: "/dashboard/freeroles", icon: mdiFormatListNumbered },
      { name: "TimeRoles", href: "/dashboard/timeroles", icon: mdiTimelineClock },
      { name: "Polls", href: "/dashboard/polls", icon: mdiChartBox },
      { name: "XP", href: "/dashboard/xp", icon: mdiRayStartVertexEnd },
      { name: "LevelRoles", href: "/dashboard/levelroles", icon: mdiRayStartArrow },
    ]
  },
  {
    title: "Guild Management",
    items: [
      { name: "AutoMod", href: "/dashboard/automod", icon: mdiRobotAngry },
      { name: "AutoReminders", href: "/dashboard/autoreminders", icon: mdiProgressClock },
      { name: "StickyRoles", href: "/dashboard/stickyroles", icon: mdiPin },
      { name: "Lockdown", href: "/dashboard/lockdown", icon: mdiMessageTextLock },
      { name: "TempChannels", href: "/dashboard/tempchannels", icon: mdiVolumePlus },
    ]
  },
  {
    title: "Automation",
    items: [
      { name: "Usage", href: "/dashboard/automation/usage", icon: mdiPail  },
      { name: "Rules", href: "/dashboard/automation", icon: mdiFileTree },
      { name: "Share Rules", href: "/dashboard/automation/library", icon: mdiBookshelf },
      { name: "Audit Logs", href: "/dashboard/automation/audit", icon: mdiBookSettings },
    ]
  },
  {
    title: "Invites",
    items: [
      { name: "InviteRoles", href: "/dashboard/inviteroles", icon: mdiAccountGroup },
      { name: "InviteRewards", href: "/dashboard/inviterewards", icon: mdiAccountStar },
    ]
  }
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
    return {
      navigation,

      mdiPulse,
      mdiLifebuoy,

      mdiImageText,
      mdiCardText,
      mdiFormatPaint,

      mdiCardBulletedOutline,
      mdiHeartBox,
      mdiCog,

      mdiTimelinePlus,
      mdiCastle,
      mdiAccountDetails,
      mdiFormatListBulletedSquare,
      mdiExitToApp,

      mdiPlaylistStar,
      mdiFormatListNumbered,
      mdiTimelineClock,
      mdiChartBox,
      mdiRayStartVertexEnd,
      mdiRayStartArrow,

      mdiRobotAngry,
      mdiProgressClock,
      mdiPin,
      mdiMessageTextLock,
      mdiVolumePlus,

      mdiPail,
      mdiFileTree,
      mdiBookshelf,
      mdiBookSettings,

      mdiAccountGroup,
      mdiAccountStar,
    };
  },
};
</script>
