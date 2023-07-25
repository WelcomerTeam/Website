<template>
  <div class="relative min-h-screen bg-secondary">
    <Header />
    <HoistHeading />
    <main>
      <div class="mx-auto my-4 lg:relative max-w-7xl">
        <div class="hero">
          <div class="px-4 my-auto lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 class="hero-title">The go-to bot for your discord server</h1>
            <p class="hero-subtitle">
              Providing tools to let you manage your server. Join the more than
              <b>277,000</b> Discord guilds using Welcomer.
            </p>
            <div class="hero-buttons">
              <div class="hero-primary">
                <router-link to="/invite">Invite Welcomer</router-link>
              </div>
              <div class="hero-secondary">
                <a href="#features">Features</a>
              </div>
            </div>
          </div>
        </div>
        <div class="hero-accompany">
          <div class="flex w-full h-full">
            <DiscordEmbed
              class="max-w-full m-auto"
              :isBot="true"
              :showTimestamp="true"
              :isDark="true"
              :embeds="[
                {
                  description: `Hey **ImRock**, you are the 256th member on **Welcomer Support Guild**`,
                  image: {
                    url: '/assets/welcomerImage.svg',
                  },
                },
              ]"
            />
          </div>
        </div>
      </div>

      <div class="bg-white text-secondary">
        <div class="hero-preview">
          <div class="pb-12 prose-lg text-center">
            <h1
              class="text-lg font-black leading-8 tracking-tighter text-gray-900"
            >
              Improve your user engagement
            </h1>
            <span
              class="text-lg text-gray-500 max-w-3xl mx-auto section-subtitle"
              >See why others use Welcomer to power their discord guilds. With
              many features and an easy to use dashboard, you can make whatever
              changes whenever you want.
            </span>
          </div>

          <div
            v-for="item in previews"
            :key="item.name"
            class="hero-preview-item"
          >
            <div class="my-auto text-center sm:text-left">
              <div>
                <h2
                  class="mb-4 text-3xl font-black leading-tight text-gray-900"
                >
                  {{ item.name }}
                </h2>
                <span class="text-gray-500"
                  >{{ item.description }}
                  <router-link
                    :to="item.href"
                    v-if="item.href"
                    class="text-primary hover:text-primary-dark font-semibold"
                  >
                    {{ item.label }}
                  </router-link>
                </span>
              </div>
            </div>
            <div class="my-auto">
              <img :src="item.src" class="px-4 mt-4 sm:mt-0" />
            </div>
          </div>
        </div>
      </div>

      <div class="bg-primary">
        <div class="hero-features">
          <div class="hero-features-item">
            <div
              v-for="item in features"
              :key="item.name"
              class="p-4 mx-0 my-3 text-center rounded-lg sm:text-left sm:mx-2 hover:bg-primary-light"
            >
              <h2 class="text-xl font-medium text-white">{{ item.name }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-secondary">
        <div
          class="px-4 py-12 mx-auto text-center max-w-prose sm:px-6 md:py-16 lg:px-7 lg:py-20"
        >
          <h2
            class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            <span class="block text-white">Ready to get started?</span>
            <span class="block text-primary"
              >Invite Welcomer today, it's free.</span
            >
          </h2>
          <p class="mt-5 text-lg leading-6 text-gray-400">
            Welcomer helps assist moderation and improve user engagement, get
            started today.
          </p>
          <router-link to="/invite">
            <button
              type="button"
              class="w-32 mt-4 cta-button bg-primary hover:bg-primary-dark"
            >
              Invite
            </button>
          </router-link>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import DiscordEmbed from "../components/DiscordEmbed.vue";
import HoistHeading from "../components/hoist/HoistHeading.vue";

const previews = [
  {
    name: "Get started in seconds",
    description:
      "In a few clicks you can greet new users to your server, without any previous knowledge.",
    src: "/assets/placeholder.png",
    href: "/",
    label: "text",
  },
  {
    name: "Secure your server easily",
    description:
      "Ensure only real users are able to send messages by providing a challenge when they join with Borderwall enabled.",
    src: "/assets/placeholder.png",
  },
  {
    name: "Increase user engagement",
    description:
      "Reward users with XP for conversing on your server and let them compete against each other with a public leaderboard.",
    src: "/assets/placeholder.png",
  },
  {
    name: "Reduce moderation burden",
    description:
      "AutoMod scans your users messages for rules that you have defined to reduce the requirements for manual moderation.",
    src: "/assets/placeholder.png",
  },
  {
    name: "Automate your server",
    description:
      "Automation allows you to create tasks that execute on events in a zero-code environment. Want to give roles to anybody who sends “pog”? You can do that without any knowledge of programming.",
    src: "/assets/placeholder.png",
  },
];

const features = [
  {
    name: "XP",
    description:
      "Allow users to collect chat experience by being active within your community",
  },
  {
    name: "AutoRole",
    description: "Automatically assign users roles when they join your server",
  },
  {
    name: "ReactionRoles",
    description:
      "Allow users to give themselves roles when they react to a message",
  },
  {
    name: "InviteRoles",
    description: "Give users roles when joining specific invites",
  },
  {
    name: "InviteRewards",
    description: "Want to reward users for inviting X users? You can now",
  },
  {
    name: "TimeRoles",
    description:
      "Reward users for staying on your server for a period of time with a special role",
  },
  {
    name: "FreeRoles",
    description:
      "Allow users to give themselves specific roles through a command",
  },
  {
    name: "AutoReminders",
    description: "Automatically send messages at predefined times in channels",
  },
  {
    name: "StickyRoles",
    description:
      "Enforce roles on users that stay even when they leave and rejoin",
  },
  {
    name: "Lockdown",
    description:
      "Allow moderators to run a command that stops users from sending messages in specific channels.",
  },
  {
    name: "TempChannels",
    description:
      "Allow users to create temporary voice channels and optionally let them have control over it.",
  },
  {
    name: "Polls",
    description:
      "Easily create polls for users that can last for a period of time or last forever",
  },
  {
    name: "Starboard",
    description:
      "Allows users to react to a message with a star (or custom emoji) and showcase these messages in a dedicated channel",
  },
  {
    name: "Suggestions",
    description:
      "Allow users to create suggestions and let users provide feedback on them",
  },
  {
    name: "LevelRoles",
    description: "Reward users who reach certain XP levels with special roles",
  },
];

export default {
  components: {
    Header,
    Footer,
    DiscordEmbed,
    HoistHeading,
  },
  setup() {
    return {
      previews,
      features,
    };
  },
};
</script>
