<template>
  <div>
    <Header />
    <div class="flex h-screen overflow-hidden bg-gray-100">
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" static class="fixed inset-0 z-50 flex lg:hidden" @close="sidebarOpen = false" :open="sidebarOpen">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-25" />
          </TransitionChild>
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <div class="relative flex flex-col flex-1 w-full max-w-xs bg-gray-100 border-r shadow-inner">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 pt-2 -mr-12">
                  <button class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="pt-5 pb-4 overflow-hidden overflow-y-auto">
                <DashboardSidebar @onChangeGuild="sidebarOpen = false" />
              </div>
            </div>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Static sidebar for desktop -->
      <div class="hidden lg:flex lg:flex-shrink-0">
        <div class="flex flex-col w-64">
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-gray-100 border-r shadow-inner">
            <DashboardSidebar />
          </div>
        </div>
      </div>

      <div class="flex-1 bg-white focus:outline-none">
        <div class="relative flex flex-shrink-0 h-16 border-gray-200 z-1 lg:border-none lg:hidden">
          <button class="px-4 text-gray-400 bg-white border-b border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200" @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <MenuAlt1Icon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <main class="relative z-0 flex-1 pb-8 overflow-y-auto">
          <div class="mt-8">
            <router-view />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/dashboard/Header.vue"
import DashboardSidebar from "../components/dashboard/Sidebar.vue"

import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

import {
  BellIcon,
  MenuAlt1Icon,
  XIcon,
} from '@heroicons/vue/outline';

import {
  mdiHelpRhombus
} from '@mdi/js';
import SvgIcon from "@jamescoyle/vue-icon";

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
    BellIcon,
    MenuAlt1Icon,
    XIcon,

    Header,
    DashboardSidebar,

    mdiHelpRhombus,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }
  },
}
</script>