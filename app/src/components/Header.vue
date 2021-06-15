<template>
  <header>
    <Popover class="relative shadow bg-secondary-dark">
      <div class="px-4 mx-auto max-w-10xl sm:px-6">
        <div class="navbar-container">
          <div class="flex justify-start">
            <router-link to="/">
              <span class="sr-only">Welcomer</span>
              <img class="w-auto h-8" src="/src/assets/logo.svg" alt="" />
            </router-link>
          </div>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton class="navbar-open-menu">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-5 md:flex">
            <div class="inline-flex text-base">
              <button
                type="button"
                class="cta-button bg-primary hover:bg-primary-dark"
              >
                Invite Welcomer
              </button>
            </div>

            <div class="inline-flex text-base">
              <router-link to="/premium">
                <button
                  type="button"
                  class="cta-button bg-donate hover:bg-donate-dark"
                >
                  Premium
                </button>
              </router-link>
            </div>

            <div class="inline-flex my-auto space-x-6">
              <Popover class="relative" v-slot="{ open }">
                <PopoverButton
                  :class="[
                    open ? 'text-gray-300' : 'text-white',
                    'group navbar-drop-button',
                  ]"
                >
                  <span>Features</span>
                  <ChevronDownIcon
                    :class="[
                      open ? 'text-gray-300' : 'text-white',
                      'navbar-drop-arrow',
                    ]"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <PopoverPanel class="popover-panel">
                    <div class="popover-container">
                      <div class="popover-panel-grid">
                        <router-link
                          v-for="item in navfeatures"
                          :key="item.name"
                          :to="item.href"
                          class="group popover-panel-grid-item"
                        >
                          <div class="flex-shrink-0">
                            <div class="popover-panel-icon">
                              <svg-icon
                                type="mdi"
                                :path="item.icon"
                                class="w-8 h-8"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                          <div class="my-auto ml-4 leading-none">
                            <p class="text-lg font-medium text-white">
                              {{ item.name }}
                            </p>
                            <p class="text-sm text-gray-300">
                              {{ item.description }}
                            </p>
                          </div>
                        </router-link>
                        <a
                          class="text-white underline hover:text-gray-300"
                          href="#"
                          >View all features</a
                        >
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>

              <Popover class="relative" v-slot="{ open }">
                <PopoverButton
                  :class="[
                    open ? 'text-gray-300' : 'text-white',
                    'group navbar-drop-button',
                  ]"
                >
                  <span>Help</span>
                  <ChevronDownIcon
                    :class="[
                      open ? 'text-gray-300' : 'text-white',
                      'navbar-drop-arrow',
                    ]"
                    aria-hidden="true"
                  />
                </PopoverButton>

                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
                  <PopoverPanel class="popover-panel">
                    <div class="popover-container">
                      <div class="popover-panel-grid">
                        <router-link
                          v-for="item in navresources"
                          :key="item.name"
                          :to="item.href"
                          class="group popover-panel-grid-item"
                        >
                          <div class="flex-shrink-0">
                            <div class="popover-panel-icon">
                              <svg-icon
                                type="mdi"
                                :path="item.icon"
                                class="w-6 h-6"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                          <div class="my-auto ml-4 leading-none">
                            <p class="text-lg font-medium text-white">
                              {{ item.name }}
                            </p>
                            <p class="text-sm text-gray-300">
                              {{ item.description }}
                            </p>
                          </div>
                        </router-link>
                      </div>
                    </div>
                  </PopoverPanel>
                </transition>
              </Popover>
            </div>
          </PopoverGroup>
          <div class="navbar-login-container">
            <a href="#" class="navbar-login-button"> Login with Discord </a>
          </div>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="scale-95 opacity-0"
        enter-to-class="scale-100 opacity-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="scale-100 opacity-100"
        leave-to-class="scale-95 opacity-0"
      >
        <PopoverPanel focus class="navbar-mobile-panel">
          <div class="navbar-mobile-menu">
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="w-auto h-8"
                    src="/src/assets/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="navbar-mobile-close">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="w-6 h-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="w-full cta-button bg-primary hover:bg-primary-dark"
                >
                  Login with Discord
                </a>
              </div>
            </div>

            <div class="px-4 py-4">
              <div class="grid grid-cols-2 gap-x-8">
                <a href="#" class="cta-button bg-primary hover:bg-primary-dark">
                  Invite Welcomer
                </a>
                <router-link to="#" class="cta-button bg-donate hover:bg-donate-dark">
                  Premium
                </router-link>
              </div>
            </div>

            <div class="px-4 py-4">
              <nav class="grid grid-cols-2">
                <router-link
                  v-for="item in navfeatures"
                  :key="item.name"
                  :to="item.href"
                  class="navbar-mobile-menu-item"
                >
                  <div class="popover-panel-icon">
                    <svg-icon
                      type="mdi"
                      :path="item.icon"
                      class="navbar-mobile-menu-item-icon"
                      aria-hidden="true"
                    />
                  </div>
                  <span class="navbar-mobile-menu-item-text">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>

            <div class="px-4 py-4">
              <nav class="grid grid-cols-2">
                <router-link
                  v-for="item in navresources"
                  :key="item.name"
                  :to="item.href"
                  class="navbar-mobile-menu-item"
                >
                  <div class="popover-panel-icon">
                    <svg-icon
                      type="mdi"
                      :path="item.icon"
                      class="navbar-mobile-menu-item-icon"
                      aria-hidden="true"
                    />
                  </div>
                  <span class="navbar-mobile-menu-item-text">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
</template>

<script>
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { ChevronDownIcon } from "@heroicons/vue/solid";

import {
  mdiTooltipImage,
  mdiEmoticon,
  mdiGavel,
  mdiArchive,
  mdiMicrophoneSettings,
  mdiChartTimelineVariantShimmer,
  mdiCastle,
  mdiPulse,
  mdiLifebuoy,
  mdiHelpRhombus,
  mdiYoutube,
  mdiImageText,
  mdiCardText,
  mdiFormatPaint,
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

const navfeatures = [
  {
    name: "Welcome Images",
    href: "#",
    description: "Welcome users to your servers with customizable images",
    icon: mdiTooltipImage,
  },
  {
    name: "Reaction Roles",
    href: "#",
    description: "Allow users to control what roles they receive",
    icon: mdiEmoticon,
  },
  {
    name: "Moderation",
    href: "#",
    description:
      "Easily moderate your guilds and have easy access to who has done what",
    icon: mdiGavel,
  },
  {
    name: "Logging",
    href: "#",
    description:
      "Have easy access to all interactions with your guild both online and in guilds",
    icon: mdiArchive,
  },
  {
    name: "Temporary Channels",
    href: "#",
    description: "Allow users to make temporary voice channels in your server",
    icon: mdiMicrophoneSettings,
  },
  {
    name: "Guild Analytics",
    href: "#",
    description: "View information about your server such as user joins",
    icon: mdiChartTimelineVariantShimmer,
  },
  {
    name: "Borderwall",
    href: "#",
    description:
      "Secure your server by making them manually verify their identity",
    icon: mdiCastle,
  },
];

const navresources = [
  {
    name: "Status",
    href: "#",
    description: "View the current status of the bot",
    icon: mdiPulse,
  },
  {
    name: "Support Server",
    href: "#",
    description:
      "Join our support server for extra support, make new suggestions and more",
    icon: mdiLifebuoy,
  },
  {
    name: "FAQ",
    href: "#",
    description: "Check out our FAQ, your question may already be answered",
    icon: mdiHelpRhombus,
  },
  {
    name: "Video Tutorials",
    href: "#",
    description:
      "View some of our video tutorials to get a better idea of how to setup the bot",
    icon: mdiYoutube,
  },
  {
    name: "Welcome Image Backgrounds",
    href: "#",
    description:
      "View our list of image backgrounds you can use with welcome images",
    icon: mdiImageText,
  },
  {
    name: "Custom Embed Builder",
    href: "#",
    description: "View our custom embed builder to see how embeds may look",
    icon: mdiCardText,
  },
  {
    name: "Text Formatting",
    href: "#",
    description:
      "View how to format your text with information about the user and more",
    icon: mdiFormatPaint,
  },
];

export default {
  components: {
    SvgIcon,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    ChevronDownIcon,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      navfeatures,
      navresources,

      mdiTooltipImage,
      mdiEmoticon,
      mdiGavel,
      mdiArchive,
      mdiMicrophoneSettings,
      mdiChartTimelineVariantShimmer,
      mdiCastle,

      mdiPulse,
      mdiLifebuoy,
      mdiHelpRhombus,
      mdiYoutube,
      mdiImageText,
      mdiCardText,
      mdiFormatPaint,
    };
  },
};
</script>
