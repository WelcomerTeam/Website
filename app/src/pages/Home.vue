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
        <div class="flex absolute inset-0 w-full h-full object-cover">
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
              <span class="font-bold text-2xl">
                {{ item.name }}
              </span>
              <p class="text-lg">{{ item.description }}</p>
              <a
                :href="item.href"
                v-if="item.href"
                class="cta-button bg-primary hover:bg-primary-dark mt-4"
              >
                {{ item.label }}
              </a>
            </div>
            <div class="my-auto">
              <img :src="item.src" class="mt-4 px-4 sm:mt-0" />
            </div>
          </div>
          <div class="text-center mt-12">
            <p class="font-bold text-2xl mb-2">Ready to get started?</p>
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
              class="text-center sm:text-left my-3 mx-0 sm:mx-2"
            >
              <span class="font-bold text-2xl">{{ item.name }}</span>
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
    @apply mx-auto max-w-7xl w-full py-16 text-center lg:py-48 lg:text-left;
  }
  .hero-title {
    @apply text-3xl pb-1 font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-primary to-dace sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl;
  }
  .hero-subtitle {
    @apply mt-3 max-w-md mx-auto text-lg text-white sm:text-xl md:mt-5 md:max-w-3xl;
  }

  .hero-buttons {
    @apply mt-5 sm:flex sm:justify-center sm:space-x-6 lg:justify-start;
  }
  .hero-primary {
    @apply rounded-md shadow my-auto;
  }
  .hero-primary > a {
    @apply w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10;
  }
  .hero-secondary {
    @apply my-auto py-4;
  }
  .hero-secondary > a {
    @apply text-white underline text-lg hover:text-gray-200;
  }

  .hero-copytext {
    @apply mt-5 text-white;
  }

  .hero-accompany {
    @apply relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full;
  }

  .hero-preview {
    @apply mx-auto max-w-7xl px-12 md:px-24 py-8;
  }
  .hero-preview-item {
    @apply grid grid-cols-1 sm:grid-cols-2 my-4 space-y-4;
  }

  .hero-features {
    @apply mx-auto text-white max-w-7xl px-12 md:px-24 py-8;
  }
  .hero-features-item {
    @apply mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  }

  .section-title {
    @apply font-bold flex text-3xl text-center justify-center;
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
