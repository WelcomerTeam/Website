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
              <p class="text-3xl font-bold text-left text-white section-title">
                Everything you need to boost your guild's engagement
              </p>
              <div class="mt-12 space-y-8">
                <div
                  v-for="feature in features"
                  :key="feature.name"
                  class="relative"
                >
                  <dt>
                    <div
                      class="absolute flex items-center justify-center w-12 h-12 rounded-md bg-secondary-light"
                    >
                      <font-awesome-icon
                        :icon="feature.icon"
                        class="w-6 h-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <p class="ml-16 text-xl font-semibold leading-6 text-white">
                      {{ feature.name }}
                      <span
                        class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-secondary-light"
                        v-if="feature.soon"
                      >
                        Coming Soon
                      </span>
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
                    <span class="text-5xl font-bold text-white"
                      >from {{ currency }} {{ fromPrice.toFixed(2) }}</span
                    >
                    <span class="mt-2 text-base font-medium text-gray-100"
                      >per month</span
                    >
                  </span>
                </p>
              </div>
              <ul class="grid gap-0.5 overflow-hidden rounded sm:grid-cols-2">
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
                <div class="prose-lg text-center">
                  <h1
                    class="font-black leading-8 tracking-tighter text-gray-900"
                  >
                    Choose the plan you want
                  </h1>
                  <span
                    class="mt-3 text-lg text-gray-500 section-subtitle max-w-prose mx-auto"
                  >
                    Get started with Welcomer Pro with no recurring payments.
                    Own multiple guilds? Save with a multi-guild membership
                    instead of buying seperately.
                  </span>
                </div>
                <div
                  class="relative mt-6 bg-gray-100 rounded-lg p-0.5 flex flex-wrap self-center sm:mt-8"
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
                    Monthly
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
                    Yearly
                    <span
                      class="inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-donate text-white"
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
                      class="inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-patreon text-white"
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
                    <h2 class="text-lg font-bold leading-6 text-gray-900">
                      {{ plan.name }}
                    </h2>
                    <p class="mt-4 text-gray-600">
                      {{ plan.footer }}
                    </p>
                    <p class="mt-8">
                      <span class="text-4xl font-bold text-gray-900"
                        >{{ currency }}
                        {{
                          (durationSelected.isPatreon
                            ? plan.patreonPrice
                            : plan.price *
                              durationSelected.months *
                              durationSelected.multiplier
                          ).toFixed(2)
                        }}</span
                      >
                    </p>
                    <p>
                      <span
                        v-if="durationSelected.isPatreon"
                        class="text-base font-medium text-gray-500"
                      >
                        / month</span
                      >
                      <span v-else class="text-base font-medium text-gray-500"
                        >({{ currency }}
                        {{
                          (plan.price * durationSelected.multiplier).toFixed(2)
                        }}
                        / month)</span
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
            <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="prose-lg text-center">
                <h1 class="font-black leading-8 tracking-tighter text-gray-900">
                  Just want backgrounds?
                </h1>
              </div>
              <div class="pb-16 mt-8 bg-white sm:mt-12 sm:pb-20 lg:pb-28">
                <div class="relative">
                  <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                      class="max-w-lg mx-auto overflow-hidden border border-gray-300 rounded-lg shadow-lg lg:max-w-none lg:flex"
                    >
                      <div class="flex-1 px-6 py-8 my-auto bg-white lg:p-12">
                        <h3
                          class="text-2xl font-bold text-gray-900 sm:text-3xl"
                        >
                          Custom Welcomer Backgrounds
                        </h3>
                        <p class="mt-6 text-base text-gray-500">
                          Get unlimited custom Welcomer backgrounds on any
                          server you choose, no need for monthly commitments,
                          this plan lasts forever.
                        </p>
                      </div>
                      <div
                        class="px-6 py-8 text-center shadow-lg bg-secondary lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12"
                      >
                        <p class="text-lg font-medium leading-6 text-gray-100">
                          Pay once, own it forever
                        </p>
                        <div
                          class="flex items-center justify-center mt-4 text-5xl font-bold text-white"
                        >
                          <span>
                            {{ currency }}
                            {{ customBackgroundPrice.toFixed(2) }}
                          </span>
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
            <div class="mx-4 my-12 lg:grid lg:grid-cols-3 lg:gap-8">
              <div class="mt-16">
                <h2 class="text-3xl font-bold text-white">
                  Frequently asked questions
                </h2>
                <p class="mt-4 text-lg text-white">
                  Can't find what you are looking for? Reach out to us on our
                  <a class="text-white underline" href="/support"
                    >support server</a
                  >.
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
                        class="flex items-start justify-between w-full text-left"
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

const features = [
  {
    name: "Animated Welcomer Backgrounds",
    icon: "photo-film",
    description:
      "Show off your awesome animated backgrounds to users who join, whatever it is. Except when it's rickroll...",
  },
  {
    name: "Time Roles",
    icon: "user-clock",
    description:
      "Sometimes you don't want to give users a role immediately. Use timeroles to give them roles automatically when the time comes, it could be 10 minutes or in a year.",
  },
  {
    name: "Dedicated Donator Bot",
    icon: "plug-circle-bolt",
    description: "Run Welcomer on its own donator-only bot account.",
  },
  {
    name: "Whitelabelled Bot",
    icon: "plug-circle-plus",
    soon: true,
    description:
      "Run Welcomer on its own unique bot account with a fully customisable username and avatar, with the same uptime and reliability.",
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
];

const plans = [
  {
    name: "Welcomer x1",
    price: 5,
    footer: "Welcomer Pro for 1 server.",
    patreonPrice: 4,
    patreonCheckout: 3744919,
  },
  {
    name: "Welcomer x3",
    price: 10,
    footer: "Welcomer Pro for 3 servers.",
    patreonPrice: 8,
    patreonCheckout: 3744921,
  },
  {
    name: "Welcomer x5",
    price: 15,
    footer: "Welcomer Pro for 5 servers.",
    patreonPrice: 11.5,
    patreonCheckout: 3744926,
  },
];

const faqs = [
  {
    question: "TODO",
    answer: "TODO",
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
  },
  setup() {
    const durationSelected = ref(durations[0]);
    const planSelected = ref(plans[0]);

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
