<template>
  <div class="relative min-h-screen bg-secondary">
    <Header />

    <main class="lg:relative">
      <div class="hero">
        <div class="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 class="hero-title">The go-to bot for your discord server</h1>
          <p class="hero-subtitle">
            Providing tools to let you manage your server. Now with a fresh coat
            of paint.
          </p>
          <div class="hero-buttons">
            <div class="hero-primary">
              <a href="#">Invite Welcomer</a>
            </div>
            <div class="hero-secondary">
              <a href="#features">Features</a>
            </div>
          </div>
          <div class="hero-copytext">
            Trusted by
            <b>263,500</b>
            guilds with over
            <b>16,000,000</b>
            members
          </div>
        </div>
      </div>
      <div class="hero-accompany">
        <div class="absolute inset-0 flex object-cover w-full h-full">
          <svg class="mx-auto my-auto rounded-lg">
            <rect x="0" y="0" width="1000" height="1000" fill="#2F80ED"></rect>
            <text x="120" y="80" fill="#ffffff" font-size="10">Embed here</text>
          </svg>
        </div>
      </div>
    </main>

    <main id="features">
      <div class="bg-white">
        <div class="hero-preview">
          <span class="section-title">Tools for your server</span>
          <div
            v-for="item in previews"
            :key="item.name"
            class="hero-preview-item"
          >
            <div class="my-auto text-center sm:text-left">
              <span class="text-2xl font-bold">
                {{ item.name }}
              </span>
              <p class="text-lg">{{ item.description }}</p>
              <a
                :href="item.href"
                v-if="item.href"
                class="mt-4 cta-button bg-primary hover:bg-primary-dark"
              >
                {{ item.label }}
              </a>
            </div>
            <div class="my-auto">
              <img :src="item.src" class="px-4 mt-4 sm:mt-0" />
            </div>
          </div>
          <div class="mt-12 text-center">
            <p class="mb-2 text-2xl font-bold">Ready to get started?</p>
            <a href="#" class="cta-button bg-primary hover:bg-primary-dark">
              Invite Welcomer
            </a>
          </div>
        </div>
      </div>

      <div class="bg-primary">
        <div class="hero-features">
          <span class="section-title"
            >Welcomer helps assist moderation and improve user engagement</span
          >
          <div class="hero-features-item">
            <div
              v-for="item in features"
              :key="item.name"
              class="mx-0 my-3 text-center sm:text-left sm:mx-2"
            >
              <span class="text-2xl font-bold">{{ item.name }}</span>
              <p class="mt-1">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
@layer components {
  .hero {
    @apply lg:py-48 lg:text-left max-w-7xl mx-auto py-16 text-center w-full;
  }
  .hero-title {
    @apply bg-clip-text bg-gradient-to-br font-extrabold from-primary lg:text-6xl md:text-6xl pb-1 sm:text-5xl text-3xl text-transparent to-dace xl:text-6xl;
  }
  .hero-subtitle {
    @apply max-w-md md:max-w-3xl md:mt-5 mt-3 mx-auto sm:text-xl text-lg text-white;
  }

  .hero-buttons {
    @apply lg:justify-start mt-5 sm:flex sm:justify-center sm:space-x-6;
  }
  .hero-primary {
    @apply my-auto rounded-md shadow;
  }
  .hero-primary > a {
    @apply bg-primary border border-transparent flex font-medium hover:bg-primary-dark items-center justify-center md:px-10 md:py-4 md:text-lg px-8 py-3 rounded-md text-base text-white w-full;
  }
  .hero-secondary {
    @apply my-auto py-4;
  }
  .hero-secondary > a {
    @apply hover:text-gray-200 text-lg text-white underline;
  }

  .hero-copytext {
    @apply mt-5 text-white;
  }

  .hero-accompany {
    @apply h-64 lg:absolute lg:h-full lg:inset-y-0 lg:right-0 lg:w-1/2 md:h-96 relative sm:h-72 w-full;
  }
}
</style>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

const previews = [
  {
    name: "Get started in seconds",
    description:
      "In a few clicks you can greet new users to your server, without any previous knowledge.",
    src: "/placeholder.png",
  },
  {
    name: "Secure your server easily",
    description:
      "Ensure only real users are able to send messages by providing a challenge when they join with Borderwall enabled.",
    src: "/placeholder.png",
  },
  {
    name: "Increase user engagement",
    description:
      "Reward users with XP for conversing on your server and let them compete against each other with a public leaderboard.",
    src: "/placeholder.png",
  },
  {
    name: "Reduce moderation burden",
    description:
      "AutoMod scans your users messages for rules that you have defined to reduce the requirements for manual moderation.",
    src: "/placeholder.png",
  },
  {
    name: "Automate your server",
    description:
      "Automation allows you to create tasks that execute on events in a zero-code environment. Want to give roles to anybody who sends “pog”? You can do that without any knowledge of programming.",
    src: "/placeholder.png",
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
    name: "Starboad",
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
  },
  setup() {
    return {
      previews,
      features,
    };
  },
};
</script>
