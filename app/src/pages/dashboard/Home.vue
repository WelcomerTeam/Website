<template>
  <div>
    <div v-if="$store.getters.getCurrentSelectedGuild?.banner !== ''">
      <img
        :src="`https://cdn.discordapp.com/banners/${
          $store.getters.getCurrentSelectedGuild?.id
        }/${$store.getters.getCurrentSelectedGuild?.banner}.${
          $store.getters.getCurrentSelectedGuild?.banner.startsWith('a_')
            ? 'gif'
            : 'png'
        }`"
        class="w-full aspect-video object-cover max-h-64"
      />
    </div>
    <div class="dashboard-container">
      <div class="dashboard-title-container">
        <div class="dashboard-title">
          {{ $store.getters.getCurrentSelectedGuild?.name }}
        </div>
      </div>
      <div class="dashboard-content">
        <div class="grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Card -->
          <Card
            name="Guild Members"
            icon="user-group"
            :amount="$store.getters.getCurrentSelectedGuild?.member_count"
          />
          <Card
            name="Text Channels"
            icon="user-group"
            :amount="filterTextChannels($store.getters.getGuildChannels).length"
          />
          <Card
            name="Voice Channels"
            icon="user-group"
            :amount="
              filterVoiceChannels($store.getters.getGuildChannels).length
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/dashboard/Card.vue";

export default {
  components: { Card },
  setup() {
    return {};
  },
  methods: {
    filterTextChannels(channels) {
      return channels.filter((c) => {
        return c.type === 0;
      });
    },

    filterVoiceChannels(channels) {
      return channels.filter((c) => {
        return c.type === 2;
      });
    },
  },
};
</script>
