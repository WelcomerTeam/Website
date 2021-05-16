<template>
  <footer class="bg-secondary-dark">
    <div class="footer">
      <nav class="footer-container" aria-label="Footer">
        <span class="font-bold text-xl text-white px-5 py-2"> Welcomer </span>
        <div class="flex">
          <div v-for="item in footer" :key="item.name" class="px-5 py-2">
            <a :href="item.href" class="text-white hover:text-gray-300">
              {{ item.name }}
            </a>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@layer components {
  .footer {
    @apply max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8;
  }
  .footer-container {
    @apply -mx-5 -my-2 flex flex-wrap;
  }
}
</style>

<script>
const footer = [
  {
    name: "Terms",
    href: "#",
  },
  {
    name: "Privacy",
    href: "#",
  },
  {
    name: "Status",
    href: "#",
  },
];

export default {
  setup() {
    return {
      footer,
    }
  }
}
</script>