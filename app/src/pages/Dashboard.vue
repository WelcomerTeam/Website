<template>
  <Header />
  <div class="flex h-screen overflow-hidden bg-gray-100">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" static class="fixed inset-0 z-50 flex lg:hidden" @close="sidebarOpen = false" :open="sidebarOpen">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-25" />
        </TransitionChild>
        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white shadow">
            <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
              <div class="absolute top-0 right-0 pt-2 -mr-12">
                <button class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="w-6 h-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <DashboardSidebar />
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
        <div class="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-gray-100 border-r shadow-xl">
          <DashboardSidebar />
        </div>
      </div>
    </div>

    <div class="flex-1 focus:outline-none">
      <div class="relative z-10 flex flex-shrink-0 h-16 border-gray-200 lg:border-none lg:hidden">
        <button class="px-4 text-gray-400 bg-white border-b border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-200" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <main class="relative z-0 flex-1 pb-8 overflow-y-auto">
        <div class="mt-8">
          <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="mb-8">
              <h1 class="text-2xl font-medium leading-6 text-gray-900">Page Title</h1>
            </div>
            <div class="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
              <!-- Card -->
              <div v-for="card in cards" :key="card.name" class="overflow-hidden bg-white rounded-lg shadow">
                <div class="p-5">
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <component :is="card.icon" class="w-6 h-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div class="flex-1 w-0 ml-5">
                      <dl>
                        <dt class="text-sm font-medium text-gray-500 truncate">
                          {{ card.name }}
                        </dt>
                        <dd>
                          <div class="text-lg font-medium text-gray-900">
                            {{ card.amount }}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div class="px-5 py-3 bg-gray-50">
                  <div class="text-sm">
                    <a :href="card.href" class="font-medium text-secondary hover:text-secondary-light">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
} from '@headlessui/vue'
import {
  BellIcon,
  MenuAlt1Icon,
  ScaleIcon,
  XIcon,
} from '@heroicons/vue/outline'

const cards = [
  { name: 'Members', href: '#', icon: ScaleIcon, amount: '123' },
  { name: 'Messages Today', href: '#', icon: ScaleIcon, amount: '44,725' },
  { name: 'Pogging?', href: '#', icon: ScaleIcon, amount: 'yes' },
  // More items...
]
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
}

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
    BellIcon,
    MenuAlt1Icon,
    XIcon,

    Header,
    DashboardSidebar,
  },
  setup() {
    const sidebarOpen = ref(false)

    return {
      cards,
      statusStyles,
      sidebarOpen,
    }
  },
}
</script>