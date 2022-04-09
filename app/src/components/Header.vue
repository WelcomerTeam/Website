<template>
  <header>
    <Popover class="relative w-full shadow bg-secondary-dark">
      <div class="px-4 mx-auto max-w-7xl max-w-10xl sm:px-6">
        <div class="navbar-container">
          <router-link to="/">
            <div class="flex justify-start">
              <img class="w-auto h-8" src="/assets/logo.svg" alt="" />
              <span class="my-auto ml-2 text-xl font-bold text-white"
                >Welcomer</span
              >
            </div>
          </router-link>
          <div class="-my-2 -mr-2 md:hidden">
            <PopoverButton class="navbar-open-menu">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="w-6 h-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" class="hidden space-x-6 md:flex">
            <div class="inline-flex my-auto space-x-4">
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
                              <font-awesome-icon
                                :icon="item.icon"
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
                        <router-link
                          class="text-white underline hover:text-gray-300"
                          to="/features"
                          >View all features</router-link
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
                              <font-awesome-icon
                                :icon="item.icon"
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

            <div
              class="inline-flex text-base font-semibold text-primary hover:text-primary-dark navbar-drop-button"
            >
              <router-link to="/premium"> Welcomer Pro </router-link>
            </div>
          </PopoverGroup>
          <div class="space-x-4 navbar-login-container">
            <router-link to="/invite">
              <button
                type="button"
                class="cta-button bg-primary hover:bg-primary-dark"
              >
                Invite Welcomer
              </button>
            </router-link>
            <a href="/login" class="navbar-login-button">Log in</a>
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
                    src="/assets/logo.svg"
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
                  href="/login"
                  class="w-full cta-button bg-primary hover:bg-primary-dark"
                >
                  Login with Discord
                </a>
              </div>
            </div>

            <div class="px-4 py-4">
              <div class="grid grid-cols-2">
                <a class="navbar-mobile-menu-item">
                  <div class="popover-panel-icon bg-primary">
                    <font-awesome-icon
                      icon="plus"
                      class="navbar-mobile-menu-item-icon"
                      aria-hidden="true"
                    />
                  </div>
                  <span class="navbar-mobile-menu-item-text">
                    Invite Welcomer
                  </span>
                </a>

                <a class="navbar-mobile-menu-item">
                  <div class="popover-panel-icon bg-donate">
                    <font-awesome-icon
                      icon="hand-holding-heart"
                      class="navbar-mobile-menu-item-icon"
                      aria-hidden="true"
                    />
                  </div>
                  <span class="navbar-mobile-menu-item-text"> Premium </span>
                </a>
              </div>
            </div>

            <div class="px-4 py-4">
              <span class="pl-3 font-bold uppercase text-gray-200"
                >Features</span
              >
              <nav class="grid grid-cols-2">
                <router-link
                  v-for="item in navfeatures"
                  :key="item.name"
                  :to="item.href"
                  class="navbar-mobile-menu-item"
                >
                  <div class="popover-panel-icon">
                    <font-awesome-icon
                      :icon="item.icon"
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
              <span class="pl-3 font-bold uppercase text-gray-200">Help</span>
              <nav class="grid grid-cols-2">
                <router-link
                  v-for="item in navresources"
                  :key="item.name"
                  :to="item.href"
                  class="navbar-mobile-menu-item"
                >
                  <div class="popover-panel-icon">
                    <font-awesome-icon
                      :icon="item.icon"
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
  /* Styling for mobile only popover */
  .navbar-mobile-panel {
    @apply absolute inset-x-0 md:hidden origin-top-right p-2 top-0 transform transition z-10;
  }
  .navbar-mobile-menu {
    @apply bg-secondary-dark divide-secondary-light divide-y-2 ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg;
  }
  .navbar-mobile-menu-item {
    @apply flex hover:bg-secondary items-center m-1 p-2 rounded-md;
  }
  .navbar-mobile-menu-item-icon {
    @apply flex-shrink-0 h-6 text-white w-6;
  }
  .navbar-mobile-menu-item-text {
    @apply font-medium ml-3 text-base text-white;
  }
  .navbar-mobile-close {
    @apply focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-dark hover:text-gray-400 inline-flex items-center justify-center p-2 rounded-md text-gray-300;
  }
  .navbar-mobile-text {
    @apply font-medium hover:text-gray-200 text-base text-white;
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

import SvgIcon from "@jamescoyle/vue-icon";

const navfeatures = [
  {
    name: "Welcome Images",
    href: "/features#welcomer",
    description: "Welcome users to your servers with customizable images",
    icon: "image",
  },
  {
    name: "Reaction Roles",
    href: "/features#reactionroles",
    description: "Allow users to control what roles they receive",
    icon: "face-laugh",
  },
  {
    name: "Moderation",
    href: "/features#moderation",
    description:
      "Easily moderate your guilds and have easy access to who has done what",
    icon: "user-shield",
  },
  {
    name: "Logging",
    href: "/features#logging",
    description:
      "Have easy access to all interactions with your guild both online and in guilds",
    icon: "boxes-packing",
  },
  {
    name: "Temporary Channels",
    href: "/features#tempchannels",
    description: "Allow users to make temporary voice channels in your server",
    icon: "microphone-lines",
  },
  {
    name: "Guild Analytics",
    href: "/features#analytics",
    description: "View information about your server such as user joins",
    icon: "chart-line",
  },
  {
    name: "Borderwall",
    href: "/features#borderwall",
    description:
      "Secure your server by making them manually verify their identity",
    icon: "door-open",
  },
];

const navresources = [
  {
    name: "Status",
    href: "/status",
    description: "View the current status of the bot",
    icon: "heart-pulse",
  },
  {
    name: "Support Server",
    href: "/support",
    description:
      "Join our support server for extra support, make new suggestions and more",
    icon: "life-ring",
  },
  {
    name: "FAQ",
    href: "/faq",
    description: "Check out our FAQ, your question may already be answered",
    icon: "person-circle-question",
  },
  {
    name: "Video Tutorials",
    href: "/tutorials",
    description:
      "View some of our video tutorials to get a better idea of how to setup the bot",
    icon: ["fab", "youtube"],
  },
  {
    name: "Welcome Image Backgrounds",
    href: "/backgrounds",
    description:
      "View our list of image backgrounds you can use with welcome images",
    icon: "images",
  },
  {
    name: "Custom Embed Builder",
    href: "/builder",
    description: "View our custom embed builder to see how embeds may look",
    icon: "tachograph-digital",
  },
  {
    name: "Text Formatting",
    href: "/formatting",
    description:
      "View how to format your text with information about the user and more",
    icon: "paint-roller",
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
    };
  },
};
</script>
