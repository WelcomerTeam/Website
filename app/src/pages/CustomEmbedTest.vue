<template>
  <div class="p-6 m-6 bg-gray-100">
    <DiscordEmbed content="Hello" :embed="{}" author="ImRock" avatar="" timestamp="" :isBot="true" />
  </div>
</template>

<script>
import DiscordEmbed from "../components/DiscordEmbed.vue";

export default {
  components: {
    DiscordEmbed,
  },
  setup() {
    return {};
  },
};
</script>
