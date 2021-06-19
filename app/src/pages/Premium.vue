<template>
  <div class="relative min-h-screen bg-secondary">
    <Header />

    <main>
      <div id="overview" class="relative bg-secondary">
        <div class="absolute inset-0" aria-hidden="true">
          <div class="absolute inset-y-0 right-0 w-1/2 bg-donate" />
        </div>
        <div class="relative mx-auto max-w-7xl lg:px-8 lg:grid lg:grid-cols-2">
          <div class="px-4 py-12 bg-secondary sm:px-6 lg:px-0 lg:pr-8">
            <div class="max-w-lg mx-auto lg:mx-0">
              <h2 class="text-base font-semibold tracking-wide text-primary">
                Welcomer Pro
              </h2>
              <p class="text-3xl font-extrabold text-left text-white section-title">
                Everything you need to boost your guild's engagement
              </p>
              <div class="mt-12 space-y-6">
                <div
                  v-for="feature in features"
                  :key="feature.name"
                  class="relative"
                >
                  <dt>
                    <div
                      class="absolute flex items-center justify-center w-12 h-12 rounded-md bg-secondary-light"
                    >
                      <svg-icon
                        type="mdi"
                        :path="feature.icon"
                        class="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p class="ml-16 text-xl font-medium leading-6 text-white">
                      {{ feature.name }}
                    </p>
                  </dt>
                  <dd class="mt-1 ml-16 text-base text-gray-300">
                    {{ feature.description }}
                  </dd>
                </div>
              </div>
            </div>
          </div>
          <div
            class="px-4 py-12 bg-donate sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end"
          >
            <div class="w-full max-w-lg mx-auto space-y-8 lg:mx-0">
              <div>
                <h2 class="sr-only">Price</h2>
                <p class="relative">
                  <span class="flex flex-col text-center">
                    <span class="text-5xl font-bold tracking-tight text-white"
                      >from {{ currency }}{{ fromPrice }}</span
                    >
                    <span class="mt-2 text-base font-medium text-gray-100"
                      >per month</span
                    >
                  </span>
                </p>
              </div>
              <ul
                class="grid gap-0.5 overflow-hidden rounded sm:grid-cols-2"
              >
                <li
                  v-for="item in checklist"
                  :key="item"
                  class="flex items-center px-4 py-4 space-x-3 text-base text-white bg-opacity-50 bg-donate-light"
                >
                  <CheckIcon class="w-6 h-6 text-white" aria-hidden="true" />
                  <span>{{ item }}</span>
                </li>
              </ul>
              <a
                href="#plans"
                class="flex items-center justify-center w-full px-8 py-4 text-lg font-medium leading-6 bg-white border border-transparent rounded-md text-donate hover:bg-gray-200 md:px-10"
              >
                View all plans
              </a>
              <a
                href="#custombackgrounds"
                class="block text-base font-medium text-center text-white hover:text-gray-200"
              >
                Get Custom Backgrounds only
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="plans">
        <div class="bg-white">
          <div class="hero-preview">
            <div class="px-4 pt-8 mx-automax-w-7xl sm:px-6 lg:px-8">
              <div class="sm:flex sm:flex-col sm:align-center">
                <h1
                  class="text-5xl font-extrabold text-gray-900 sm:text-center"
                >
                  Choose the plan you want
                </h1>
                <p class="mt-3 text-xl text-gray-500 md:mx-16 section-subtitle">
                  Get started with Welcomer Pro with no recurring statements.
                  Own multiple guilds? Save with a multi-guild membership
                  compared to buying seperately.
                </p>
                <div
                  class="
                    relative
                    mt-6
                    bg-gray-100
                    rounded-lg
                    p-0.5
                    flex flex-wrap
                    self-center
                    sm:mt-8
                  "
                >
                  <button
                    type="button"
                    @click="selectDuration(durations[0])"
                    :class="[
                      durationSelected.name === durations[0].name
                        ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
                        : 'border-transparent text-gray-700',
                      'relative border rounded-md py-2 w-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-donate focus:z-10 lg:w-auto lg:px-8',
                    ]"
                  >
                    Monthly billing
                  </button>
                  <button
                    type="button"
                    @click="selectDuration(durations[1])"
                    :class="[
                      'ml-0.5',
                      durationSelected.name === durations[1].name
                        ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
                        : 'border-transparent text-gray-700',
                      'relative border rounded-md py-2 w-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-donate focus:z-10 lg:w-auto lg:px-8',
                    ]"
                  >
                    Yearly billing
                    <span
                      class="
                        inline-flex
                        items-center
                        ml-2
                        px-2.5
                        py-0.5
                        rounded-full
                        text-xs
                        font-medium
                        bg-donate
                        text-white
                      "
                    >
                      20% off
                    </span>
                  </button>
                  <button
                    type="button"
                    @click="selectDuration(durations[2])"
                    :class="[
                      'ml-0.5',
                      durationSelected.name === durations[2].name
                        ? 'bg-white border-gray-200 text-gray-900 shadow-sm'
                        : 'border-transparent text-gray-700',
                      'relative border rounded-md py-2 w-full text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-patreon focus:z-10 lg:w-auto lg:px-8',
                    ]"
                  >
                    Patreon
                    <span
                      class="
                        inline-flex
                        items-center
                        ml-2
                        px-2.5
                        py-0.5
                        rounded-full
                        text-xs
                        font-medium
                        bg-patreon
                        text-white
                      "
                    >
                      Recurring
                    </span>
                  </button>
                </div>
              </div>
              <div
                class="grid-cols-1 mt-8 space-y-4 sm:space-y-0 sm:grid sm:gap-6 lg:max-w-none lg:mx-0 lg:grid-cols-3"
              >
                <div
                  v-for="plan in plans"
                  :key="plan.name"
                  class="border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-lg"
                >
                  <div class="p-6">
                    <h2 class="text-lg font-medium leading-6 text-gray-900">
                      {{ plan.name }}
                    </h2>
                    <p class="mt-4 text-sm text-gray-500">
                      {{ plan.footer }}
                    </p>
                    <p class="mt-8">
                      <span class="text-4xl font-extrabold text-gray-900"
                        >{{ currency
                        }}{{
                          (durationSelected.isPatreon
                            ? plan.patreonPrice
                            : plan.price *
                              durationSelected.months *
                              durationSelected.multiplier
                          ).toFixed(2)
                        }}</span
                      >
                      {{ " " }}
                      <span
                        v-if="durationSelected.isPatreon"
                        class="text-base font-medium text-gray-500"
                        >/mo</span
                      >
                      <span v-else class="text-base font-medium text-gray-500"
                        >({{ currency
                        }}{{
                          (plan.price * durationSelected.multiplier).toFixed(
                            2
                          )
                        }}/mo)</span
                      >
                    </p>
                    <a
                      v-if="durationSelected.isPatreon"
                      @click.prevent="selectPlan(plan)"
                      class="block w-full py-2 mt-8 text-sm font-semibold text-center text-white border border-transparent rounded-md cursor-pointer bg-patreon hover:bg-patreon"
                      >Become a Patreon</a
                    >
                    <a
                      v-else
                      @click.prevent="selectPlan(plan)"
                      class="block w-full py-2 mt-8 text-sm font-semibold text-center text-white border border-transparent rounded-md cursor-pointer bg-donate hover:bg-donate"
                      >Get {{ plan.name }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="custombackgrounds">
        <div class="bg-white">
          <div class="hero-preview">
            <div class="px-4 pt-8 mx-automax-w-7xl sm:px-6 lg:px-8">
              <span class="section-hero"
                >Just want backgrounds?</span
              >
              <span class="mt-3 text-lg text-gray-500 md:mx-16 section-subtitle"
                >Don't want to do monthly commitments for features you may not
                use? You can buy just custom backgrounds for a guild of your
                choosing.</span
              >

              <div class="pb-16 mt-8 bg-white sm:mt-12 sm:pb-20 lg:pb-28">
                <div class="relative">
                  <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                      class="max-w-lg mx-auto overflow-hidden border border-gray-300 rounded-lg shadow-lg lg:max-w-none lg:flex"
                    >
                      <div class="flex-1 px-6 py-8 bg-white lg:p-12">
                        <h3
                          class="text-2xl font-extrabold text-gray-900 sm:text-3xl"
                        >
                          Custom Welcomer Backgrounds
                        </h3>
                        <p class="mt-6 text-base text-gray-500">
                          Get Custom Backgrounds forever without paying for Welcomer Pro.
                          Infact, any guild that you add Welcomer Pro to will get
                          this automatically even after your membership!
                        </p>
                        <p>
                          <b>This does not include animated backgrounds.</b>
                        </p>
                        <div class="mt-8">
                          <div class="flex items-center">
                            <div class="flex-1 border-t-2 border-gray-200" />
                          </div>
                          <ul class="mt-8 space-y-5 lg:space-y-0">
                            <li class="flex items-start lg:col-span-1">
                              <div class="flex-shrink-0">
                                <CheckIcon
                                  class="w-5 h-5 text-donate"
                                  aria-hidden="true"
                                />
                              </div>
                              <p class="ml-3 text-sm text-gray-700">
                                Custom Welcomer Backgrounds
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        class="px-6 py-8 text-center shadow-lg bg-secondary lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
                      >
                        <p class="text-lg font-medium leading-6 text-gray-200">
                          Pay once, own it forever
                        </p>
                        <div
                          class="flex items-center justify-center mt-4 text-5xl font-extrabold text-white "
                        >
                          <span> {{ currency }}{{ customBackgroundPrice }} </span>
                        </div>
                        <div class="mt-6">
                          <div class="rounded-md shadow">
                            <a
                              @click.prevent="handleCustomBackgroundClick"
                              class="flex items-center justify-center px-5 py-3 text-base font-medium text-white border border-transparent rounded-md cursor-pointer bg-secondary-light hover:bg-secondary-dark"
                            >
                              Get it now
                            </a>
                          </div>
                        </div>
                        <div class="mt-4 text-sm text-gray-400">
                          for one guild, forever.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="bg-donate">
          <div class="hero-features">
            <!-- <span class="section-title"
              >Finally, a colour that isn't pink!</span
            >
            <span class="section-subtitle"
              >We have been able to keep the bot alive and running for the last
              4 years thanks to our wonderful donators.</span
            > -->

            <div class="mx-4 my-12 lg:grid lg:grid-cols-3 lg:gap-8">
              <div class="mt-16">
                <h2 class="text-3xl font-bold text-white">
                  Frequently asked questions
                </h2>
                <p class="mt-4 text-lg text-white">
                  Can't find what you are looking for? Reach out to us on our
                  <a class="text-white underline" href="/support">support server</a>.
                </p>
              </div>
              <div class="mt-12 lg:mt-0 lg:col-span-2">
                <dl class="space-y-10">
                  <Disclosure
                    as="div"
                    v-for="faq in faqs"
                    :key="faq.question"
                    v-slot="{ open }"
                  >
                    <dt class="text-lg">
                      <DisclosureButton
                        class="flex items-start justify-between w-full text-left text-donate-dark"
                      >
                        <span :class="[open ? 'font-bold' : '', 'text-white']">
                          {{ faq.question }}
                        </span>
                        <span class="flex items-center h-6 ml-6">
                          <ChevronDownIcon
                            :class="[
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform',
                            ]"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" class="pr-12 mt-2">
                      <p class="text-base text-gray-100">
                        {{ faq.answer }}
                      </p>
                    </DisclosurePanel>
                  </Disclosure>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

import { ref } from "vue";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";

import { CheckIcon } from "@heroicons/vue/solid";
import { ChevronDownIcon } from "@heroicons/vue/outline";

import {
  mdiHelpRhombus,
  mdiPatreon,
  mdiImageMultiple,
  mdiAccountStar,
  mdiProgressClock,
  mdiFileTree,
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

const features = [
  {
    name: "Animated Welcomer Backgrounds",
    icon: mdiImageMultiple,
    description:
      "Along with Custom Welcomer Backgrounds, Welcomer Pro allows you to also have animated backgrounds. Just don't use massive images, mobile users hate them.",
  },
  {
    name: "Invite Rewards and Roles",
    icon: mdiAccountStar,
    description:
      "Reward users for inviting users to your guild and give users specific roles based on the invite that they use.",
  },
  {
    name: "Time Roles",
    icon: mdiProgressClock,
    description:
      "Sometimes you don't want to give users their roles immediately, when using Time Roles you can give users roles automatically after a specific ammount of time such as 10 minutes after they join.",
  },
  {
    name: "Increased Automation Actions",
    icon: mdiFileTree,
    description:
      "Running out of Automation actions on your guild? You can get up to 100,000 automation actions for your guilds each month for anything you could want.",
  },
];

const checklist = [
  "Custom Backgrounds",
  "Dedicated Donator Bot",
  "Flexible plans",
  "No recurring payments",
];

// Data below will be fetched from API

const currency = "£";

const durations = [
  {
    name: "Monthly",
    months: 1,
    multiplier: 1,
  },
  {
    name: "Annually",
    months: 12,
    multiplier: 0.8,
  },
  {
    name: "Patreon",
    months: 1,
    multiplier: 1,
    isPatreon: true,
  },

  // {
  //   name: "Monthly",
  //   months: 1,
  //   multiplier: 1,
  //   secondary: "",
  //   tertiary: "Perfect for trying out Welcomer Pro",
  // },
  // {
  //   name: "Quarterly",
  //   months: 3,
  //   multiplier: 0.9,
  //   secondary: "Save 10%",
  //   tertiary: "Save without long commitments",
  // },
  // {
  //   name: "Bi-Annually",
  //   months: 6,
  //   multiplier: 0.8,
  //   secondary: "Save 20%",
  //   tertiary: "Get 1 month free**",
  // },
  // {
  //   name: "Annually",
  //   months: 12,
  //   multiplier: 0.7,
  //   secondary: "Save 30%",
  //   tertiary: "Get 3 months free**",
  // },
  // {
  //   name: "Patreon",
  //   months: 1,
  //   multiplier: 1,
  //   secondary: "",
  //   tertiary: "Pay monthly and not handle renewing",
  //   isPatreon: true,
  // },
];

const plans = [
  {
    name: "Welcomer x1",
    price: 5,
    footer: "All features above  ·  30,000 actions",
    patreonPrice: 4,
    patreonCheckout: 3744919,
  },
  {
    name: "Welcomer x3",
    price: 10,
    footer: "All features above  ·  50,000 actions/guild (150,000 total)",
    patreonPrice: 8,
    patreonCheckout: 3744921,
  },
  {
    name: "Welcomer x5",
    price: 15,
    footer: "All features above  ·  100,000 actions/guild (500,000 total)",
    patreonPrice: 11.5,
    patreonCheckout: 3744926,
  },
];

const faqs = [
  {
    question: "Why do people have to pay to use your bot?",
    answer:
      "Please do not think that welcomer has paywall! All the features welcomer that welcomer has ever had still available to everyone for free. We only have extra perks as a way to say thank you to people who help keep our bot online. Without people donating towards the bot, we would not be able to keep this bot community funded and as more people invite the bot, more powerful hardware is needed to be able to run it. Hosting is not cheap and by donating, you're helping keep it up and running 👌.",
  },
  {
    question:
      "I have donated through patreon but i have not received a membership",
    answer:
      "When you are donating through patreon, please make sure you bind a discord account to your patreon account. If you have forgotten to do this by accident, please contact a staff member on our support server for more assistance with some proof of purchase.",
  },
  {
    question: "I have donated, now what?",
    answer:
      "When you donate towards the bot, you should automatically receive a message confirming this in your direct messages with welcomer. To apply your donation to a server, you can either directly apply it to the server you are on by doing +membership add or provide an id after like +membership add 341685098468343822 and also make sure you have not used up your applicable servers limit. Your applicable server limit is 1 for plus, 3 for pro and 5 for extended. If you want to remove a membership from a server you can do the same process as adding however you would need to do +membership remove.",
  },
  {
    question: "Why do i instantly get charged on patreon?",
    answer:
      "Patreon charges automatically when you donate because this makes it that you need your payment details to be valid before getting rewards and people could just donate and remove their patreonage at the end of the month and receive the full rewards. Because of how patreon opperates, if you donate on the last day of the month, you will be charged then and on the first of the next month.",
  },
  {
    question: "Why are custom backgrounds paid for?",
    answer:
      "At first when welcomer was made, custom images used to be free to use and had been for quite a long time. Recently we have decided to make it that a one time payment of £1 or $1.50 would be needed to be able to unlock this feature. This is because as of recently, the bot has become more used and over time has used a trendous amount of both storage space and processing to be able to utilise all these custom backgrounds. All previously set custom backgrounds will not be removed however to change it you will require to do the one time payment. This is simply put to show support for the development of the bot as recently the bot now requires over 100 Gigabytes of storage for storing both these custom backgrounds and 1 week cached images, its a little gesture that you support the bot. Despite making custom backgrounds paid for again, there are still a large amount of free backgrounds and once you have paid for custom backgrounds you are able to apply this to any server.",
  },
];

const customBackgroundPrice = 5;
const fromPrice = 5;

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,

    CheckIcon,
    ChevronDownIcon,

    Header,
    Footer,
    SvgIcon,
  },
  setup() {
    const durationSelected = ref(durations[0]);
    const planSelected = ref(plans[0]);
    const open = ref(false);

    return {
      features,
      checklist,

      durationSelected,
      durations,

      planSelected,
      plans,

      customBackgroundPrice,
      currency,
      fromPrice,

      faqs,
      open,

      mdiHelpRhombus,
      mdiPatreon,
      mdiImageMultiple,
      mdiAccountStar,
      mdiProgressClock,
      mdiFileTree,
    };
  },
  methods: {
    selectPlan(plan) {
      this.planSelected = plan;
      this.handleClick();
    },
    selectDuration(duration) {
      this.durationSelected = duration;
    },
    handleCustomBackgroundClick() {
      alert("handle cbg");
      // Open the donate page
    },

    handleClick() {
      if (this.durationSelected.isPatreon) {
        return window.open(
          `https://www.patreon.com/join/Welcomer/checkout?rid=${this.planSelected.patreonCheckout}`,
          "_blank"
        );
      }

      alert(`handle ${this.durationSelected.name} ${this.planSelected.name}`);
      // Open the donate page
    },
  },
};
</script>
