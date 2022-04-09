<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Dashboard example</div>
    </div>
    <div class="dashboard-content">
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
                <font-awesome-icon :icon="card.icon" class="h-6" />
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
  </div>
</template>

<script>
const cards = [
  {
    name: "Members",
    href: "#",
    icon: "circle-question",
    amount: "123",
  },
  {
    name: "Messages Today",
    href: "#",
    icon: "circle-question",
    amount: "44,725",
  },
  {
    name: "Pogging?",
    href: "#",
    icon: "circle-question",
    amount: "yes",
  },
];

export default {
  setup() {
    return {
      cards,
    };
  },
};
</script>
