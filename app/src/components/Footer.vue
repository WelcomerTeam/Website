<template>
  <footer class="bg-secondary-dark">
    <div class="footer">
      <nav class="footer-container" aria-label="Footer">
        <span class="px-5 py-2 text-xl font-bold text-white"> Welcomer </span>
        <div class="flex">
          <div v-for="item in footer" :key="item.name" class="px-5 py-2">
            <router-link :to="item.href" class="text-white hover:text-gray-300">
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@layer components {
  .footer {
    @apply lg:px-8 max-w-7xl mx-auto overflow-hidden px-4 py-8 sm:px-6;
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
    href: "/terms",
  },
  {
    name: "Privacy",
    href: "/privacy",
  },
  {
    name: "Status",
    href: "/status",
  },
];

export default {
  setup() {
    return {
      footer,
    };
  },
};
</script>
