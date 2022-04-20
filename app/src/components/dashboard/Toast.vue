<template>
  <div class="fixed top-6 right-6 space-y-3 z-50">
    <transition-group
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-x-1 opacity-0"
      enter-to-class="translate-x-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-1 opacity-0"
    >
      <div v-for="toast in $store.getters.getToasts" v-bind:key="toast.id">
        <div
          id="toast-default"
          class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-sm"
          role="alert"
        >
          <font-awesome-icon
            :icon="toast.icon || 'info'"
            :class="[
              toast.class || 'bg-blue-100 text-blue-500',
              'p-2 rounded-lg w-4 h-4',
            ]"
          />
          <div class="mx-3 text-sm font-normal flex-1">{{ toast.title }}</div>
          <button
            type="button"
            class="-mx-1.5 bg-white text-gray-500 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
            data-dismiss-target="#toast-default"
            @click="hideToast(toast.id)"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <XIcon />
          </button>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";
import store from "../../store/index";
export default {
  components: {
    XIcon,
  },

  methods: {
    hideToast(toastID) {
      store.dispatch("removeToast", toastID);
    },
  },
};
</script>
