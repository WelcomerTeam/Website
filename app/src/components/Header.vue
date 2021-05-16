<template>
  <header>
    <Popover class="relative bg-secondary-dark shadow">
      <div class="max-w-10xl mx-auto px-4 sm:px-6">
        <div class="navbar-container">
          <div class="flex justify-start">
            <router-link to="/">
              <span class="sr-only">Welcomer</span>
              <img class="h-8 w-auto" src="/src/assets/logo.svg" alt="" />
            </router-link>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <PopoverButton class="navbar-open-menu">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden md:flex space-x-5">
            <div class="inline-flex text-base">
              <button
                type="button"
                class="cta-button bg-primary hover:bg-primary-dark"
              >
                Invite Welcomer
              </button>
            </div>

            <div class="inline-flex text-base">
              <button
                type="button"
                class="cta-button bg-donate hover:bg-donate-dark"
              >
                Premium
              </button>
            </div>

            <div class="my-auto inline-flex space-x-6">
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
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
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
                                class="h-8 w-8"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                          <div class="ml-4 my-auto leading-none">
                            <p class="text-lg font-medium text-white">
                              {{ item.name }}
                            </p>
                            <p class="text-sm text-gray-300">
                              {{ item.description }}
                            </p>
                          </div>
                        </router-link>
                        <a
                          class="text-white hover:text-gray-300 underline"
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
                  enter-active-class="transition ease-out duration-200"
                  enter-from-class="opacity-0 translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition ease-in duration-150"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 translate-y-1"
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
                                class="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                          </div>
                          <div class="ml-4 my-auto leading-none">
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
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel focus class="navbar-mobile-panel">
          <div class="navbar-mobile-menu">
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="/src/assets/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="navbar-mobile-close">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <a
                  href="#"
                  class="cta-button w-full bg-primary hover:bg-primary-dark"
                >
                  Login with Discord
                </a>
              </div>
            </div>

            <div class="py-4 px-4">
              <div class="grid grid-cols-2 gap-x-8">
                <a href="#" class="cta-button bg-primary hover:bg-primary-dark">
                  Invite Welcomer
                </a>
                <router-link to="#" class="cta-button bg-donate hover:bg-donate-dark">
                  Premium
                </router-link>
              </div>
            </div>

            <div class="py-4 px-4">
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

            <div class="py-4 px-4">
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

<style lang="scss" scoped>
@layer components {
  .cta-button {
    @apply inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none;
  }
  .popover-panel {
    @apply absolute bg-secondary-dark rounded-md left-1/2 z-10 -translate-x-1/2 transform mt-3 px-2 w-screen max-w-md lg:max-w-lg sm:px-0;
  }
  .popover-panel-grid {
    @apply relative grid gap-6 bg-secondary-dark px-5 py-6 sm:gap-8 sm:p-8 rounded-lg;
  }
  .popover-panel-grid-item {
    @apply -m-3 p-2 flex items-start rounded-lg hover:bg-secondary;
  }
  .popover-panel-icon {
    @apply flex-shrink-0 inline-flex items-center justify-center h-10 w-10 rounded-md bg-secondary-light group-hover:bg-primary text-white sm:h-12 sm:w-12;
  }

  .navbar-container {
    @apply flex justify-between items-center py-6 md:justify-start md:space-x-10;
  }
  .navbar-open-menu {
    @apply rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-400 focus:outline-none;
  }
  .navbar-drop-button {
    @apply rounded-md inline-flex items-center text-base hover:text-gray-300 focus:outline-none;
  }
  .navbar-drop-arrow {
    @apply ml-1 h-5 w-5 group-hover:text-gray-300;
  }

  .navbar-login-container {
    @apply hidden md:flex items-center justify-end md:flex-1 lg:w-0;
  }
  .navbar-login-button {
    @apply whitespace-nowrap text-base text-white hover:text-gray-300;
  }

  /* Styling for mobile only popover */
  .navbar-mobile-panel {
    @apply absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden;
  }
  .navbar-mobile-menu {
    @apply rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-secondary-dark divide-y-2 divide-secondary-light;
  }
  .navbar-mobile-menu-item {
    @apply p-2 m-1 flex items-center rounded-md hover:bg-secondary;
  }
  .navbar-mobile-menu-item-icon {
    @apply flex-shrink-0 h-6 w-6 text-white;
  }
  .navbar-mobile-menu-item-text {
    @apply ml-3 text-base font-medium text-white;
  }
  .navbar-mobile-close {
    @apply rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-dark;
  }
  .navbar-mobile-text {
    @apply text-base font-medium text-white hover:text-gray-200;
  }

  .hero {
    @apply mx-auto max-w-7xl w-full py-16 text-center lg:py-48 lg:text-left;
  }
  .hero-title {
    @apply text-3xl pb-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-primary to-dace sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl;
  }
  .hero-subtitle {
    @apply mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl;
  }

  .hero-buttons {
    @apply mt-5 sm:flex sm:justify-center sm:space-x-6 lg:justify-start;
  }
  .hero-primary {
    @apply rounded-md shadow my-auto;
  }
  .hero-primary > a {
    @apply w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10;
  }
  .hero-secondary {
    @apply my-auto py-4;
  }
  .hero-secondary > a {
    @apply text-white underline text-lg hover:text-gray-200;
  }

  .hero-copytext {
    @apply mt-5 text-white;
  }

  .hero-accompany {
    @apply relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full;
  }

  .hero-preview {
    @apply mx-auto max-w-7xl px-12 md:px-24 py-8;
  }
  .hero-preview-item {
    @apply grid grid-cols-1 sm:grid-cols-2 my-4 space-y-4;
  }

  .hero-features {
    @apply mx-auto text-white max-w-7xl px-12 md:px-24 py-8;
  }
  .hero-features-item {
    @apply mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  }

  .section-title {
    @apply font-bold flex text-3xl text-center justify-center;
  }

  .footer {
    @apply max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8;
  }
  .footer-container {
    @apply -mx-5 -my-2 flex flex-wrap;
  }
}
</style>

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
