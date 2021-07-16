<template>
  <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-2xl font-medium leading-6 text-gray-900">Page Title</h1>
    </div>
    <div class="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Card -->
      <div
        v-for="card in cards"
        :key="card.name"
        class="overflow-hidden bg-white rounded-lg shadow"
      >
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <svg-icon
                type="mdi"
                :path="card.icon"
                class="w-6 h-6 text-gray-400"
                aria-hidden="true"
              />
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
            <a
              :href="card.href"
              class="font-medium text-secondary hover:text-secondary-light"
            >
              View all
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  mdiHelpRhombus
} from '@mdi/js';
import SvgIcon from "@jamescoyle/vue-icon";

const cards = [
  { name: 'Members', href: '#', icon: mdiHelpRhombus, amount: '123' },
  { name: 'Messages Today', href: '#', icon: mdiHelpRhombus, amount: '44,725' },
  { name: 'Pogging?', href: '#', icon: mdiHelpRhombus, amount: 'yes' },
]

export default {
  components: {
    SvgIcon,
    mdiHelpRhombus,
  },
  setup() {
    return {
      cards,
    }
  },
}
</script>
