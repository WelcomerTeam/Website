<template>
  <div class="flex min-h-screen overflow-hidden bg-gray-100">
    <TransitionRoot as="template" :show="$props.sidebarOpen">
      <Dialog
        as="div"
        static
        class="fixed inset-0 z-40 flex lg:hidden"
        @close="this.$emit('closeSidebar')"
        :open="$props.sidebarOpen"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-25" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex flex-col flex-1 w-full max-w-xs bg-gray-100 border-r shadow-inner"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 pt-2 -mr-12">
                <button
                  class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white bg-secondary-dark"
                  @click="this.$emit('closeSidebar')"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="pt-5 pb-4 overflow-hidden overflow-y-auto">
              <DashboardSidebar @onChangeGuild="this.$emit('closeSidebar')" />
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <div
          class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-gray-100 border-r shadow-inner"
        >
          <DashboardSidebar />
        </div>
      </div>
    </div>

    <div class="flex-1 bg-white focus:outline-none">
      <main class="relative z-0 flex-1 min-h-full pb-8">
        <div class="mt-8 font-medium pb-20">
          <router-view />
        </div>
      </main>
    </div>

    <Toast />
  </div>
</template>

<script>
import Header from "../components/dashboard/Header.vue";
import DashboardSidebar from "../components/dashboard/Sidebar.vue";
import Toast from "../components/dashboard/Toast.vue";

import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { BellIcon, MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";

import { mdiHelpRhombus } from "@mdi/js";
import store from "../store/index";

export default {
  props: {
    sidebarOpen: {
      type: Boolean,
    },
  },
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    Toast,
    BellIcon,
    MenuAlt1Icon,
    XIcon,

    Header,
    DashboardSidebar,

    mdiHelpRhombus,
  },
};
</script>

<style></style>
