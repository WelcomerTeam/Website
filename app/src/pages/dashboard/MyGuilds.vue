<template>
  <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
    <div class="mb-8">
      <h1 class="text-2xl font-medium leading-6 text-gray-900">My Guilds</h1>
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
