<template>
  <footer class="bg-secondary-dark">
    <div class="footer">
      <nav class="footer-container" aria-label="Footer">
        <span class="px-5 py-2 text-xl font-bold text-white"> Welcomer </span>
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
