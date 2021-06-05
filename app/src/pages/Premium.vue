<template>
  <div class="relative min-h-screen bg-secondary">
    <Header />

    <main class="relative bg-secondary">
      <div class="absolute inset-0" aria-hidden="true">
        <div class="absolute inset-y-0 right-0 w-1/2 bg-donate" />
      </div>
      <div class="relative max-w-7xl mx-auto lg:px-8 lg:grid lg:grid-cols-2">
        <div class="bg-secondary py-12 px-4 sm:px-6 lg:px-0 lg:pr-8">
          <div class="max-w-lg mx-auto lg:mx-0">
            <h2 class="text-base font-semibold tracking-wide text-primary">
              Welcomer Pro
            </h2>
            <p class="mt-2 text-2xl font-bold text-white sm:text-3xl">Everything you need to boost your guild's engagement</p>
            <dl class="mt-12 space-y-6">
              <div v-for="feature in features" :key="feature.name" class="relative">
                <dt>
                  <div class="absolute h-12 w-12 flex items-center justify-center bg-secondary-light rounded-md">
                    <svg-icon type="mdi" :path="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <p class="ml-16 text-xl leading-6 font-medium text-white">{{ feature.name }}</p>
                </dt>
                <dd class="mt-1 ml-16 text-base text-gray-300">
                  {{ feature.description }}
                </dd>
              </div>
              <span class="mt-10 flex text-gray-500 text-sm">*You will get 30,50,100 thousand actions for each guild depending on the respective Welcomer Pro plan. 1x = 30,000 per guild (30,000). 3x = 50,000 per guild (150,000), 5x = 100,000 per guild (500,000). You cannot stack increased automation actions on one guild.</span>
            </dl>
          </div>
        </div>
        <div class="bg-donate py-12 px-4 sm:px-6 lg:bg-none lg:px-0 lg:pl-8 lg:flex lg:items-center lg:justify-end">
          <div class="max-w-lg mx-auto w-full space-y-8 lg:mx-0">
            <div>
              <h2 class="sr-only">Price</h2>
              <p class="relative">
                <span class="flex flex-col text-center">
                  <span class="text-5xl font-bold text-white tracking-tight">from {{ currency }}{{ fromPrice }}</span>
                  <span class="mt-2 text-base font-medium text-gray-100">per month</span>
                </span>
              </p>
            </div>
            <ul class="rounded overflow-hidden grid gap-px gap-y-1 sm:grid-cols-2">
              <li v-for="item in checklist" :key="item" class="bg-donate-light bg-opacity-50 py-4 px-4 flex items-center space-x-3 text-base text-white">
                <CheckIcon class="h-6 w-6 text-white" aria-hidden="true" />
                <span>{{ item }}</span>
              </li>
            </ul>
            <a href="#plans" class="bg-white border border-transparent rounded-md w-full px-8 py-4 flex items-center justify-center text-lg leading-6 font-medium text-donate hover:bg-gray-200 md:px-10">
              View all plans
            </a>
            <a href="#custombackgrounds" class="block text-center text-base font-medium text-white hover:text-gray-200">
              Get Custom Backgrounds only
            </a>
          </div>
        </div>
      </div>
    </main>

    <main id="plans">
      <div class="bg-white">
        <div class="hero-preview">
          <span class="section-title">Choose the duration of your membership</span>
          <span class="section-subtitle">Longer commitments include greater discounts. If you do not wish to pay upfront, you can also pay via Patreon.</span>

          <div class="mt-8 mb-14">
            <RadioGroup v-model="durationSelected">
              <RadioGroupLabel class="sr-only">
                Pricing durations
              </RadioGroupLabel>
              <div class="relative bg-white rounded-md -space-y-px">
                <RadioGroupOption as="template" v-for="(plan, planIdx) in durations" :key="plan.name" :value="plan" v-slot="{ checked, active }">
                  <div :class="[planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '', planIdx === durations.length - 1 ? 'rounded-bl-md rounded-br-md' : '', checked ? 'z-10 border-donate border-2' : 'border-gray-300 border', 'relative p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none']">
                    <div class="flex items-center text-sm">
                      <span :class="[checked ? 'bg-donate border-transparent' : 'bg-white border-gray-300', active ? 'ring-2 ring-offset-2 ring-donate' : '', 'h-4 w-4 rounded-full border flex items-center justify-center']" aria-hidden="true">
                        <span class="rounded-full bg-white w-1.5 h-1.5" />
                      </span>
                      <RadioGroupLabel as="span" class="ml-3 font-medium text-gray-900">{{ plan.name }}</RadioGroupLabel>
                    </div>
                    <RadioGroupDescription class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                      <span class="text-gray-900 font-medium">{{ plan.secondary }}</span>
                    </RadioGroupDescription>
                    <RadioGroupDescription :class="[checked ? 'text-gray-700' : 'text-gray-500', 'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right']">
                      {{ plan.tertiary }}
                    </RadioGroupDescription>
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
            <span class="section-subtitle mt-4 text-gray-500">**Free months based on savings compared to same term using Monthly or Patreon plan.</span>
          </div>

          <span class="section-title">Choose the plan you would want</span>
          <span class="section-subtitle">If you own multiple guilds, you can buy plans for 3 or 5 servers and get increased automation actions and save money compared to buying seperately.</span>

          <div class="my-8">
            <RadioGroup v-model="planSelected">
              <RadioGroupLabel class="sr-only">
                Pricing plan
              </RadioGroupLabel>
              <div class="space-y-2">
                <RadioGroupOption as="template" v-for="plan in plans" :key="plan.name" :value="plan" v-slot="{ active, checked }">
                  <div :class="[active ? (durationSelected.isPatreon ? 'ring-1 ring-patreon' : 'ring-1 ring-donate') : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none']">
                    <div class="flex items-center">
                      <div class="text-sm">
                        <RadioGroupLabel as="p" class="font-medium text-gray-900">
                          {{ plan.name }}
                        </RadioGroupLabel>
                        <RadioGroupDescription as="div" class="text-gray-500">
                          <p class="sm:inline">{{ plan.footer }}</p>
                        </RadioGroupDescription>
                      </div>
                    </div>
                    <RadioGroupDescription as="div" class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right">
                      <div v-if="durationSelected.isPatreon" class="font-medium text-gray-900">£{{ (plan.patreonPrice).toFixed(2) }}</div>
                      <div v-else class="font-medium text-gray-900">{{ currency }}{{ (plan.price * durationSelected.months * durationSelected.multiplier).toFixed(2) }}</div>
                      <div v-if="durationSelected.isPatreon" class="ml-1 text-gray-500 sm:ml-0">/mo</div>
                      <div v-else class="ml-1 text-gray-500 sm:ml-0">{{ currency }}{{ (plan.price * durationSelected.multiplier).toFixed(2) }}/mo</div>
                    </RadioGroupDescription>
                    <div :class="[checked ? (durationSelected.isPatreon ? 'border-patreon' : 'border-donate') : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']" aria-hidden="true" />
                  </div>
                </RadioGroupOption>
              </div>
            </RadioGroup>
          </div>

          <div class="text-center">
            <a @click.prevent="handleClick" :class="[durationSelected.isPatreon ? 'bg-patreon hover:bg-patreon-dark' : 'bg-donate hover:bg-donate-dark', 'cta-button w-1/2 cursor-pointer']">
              <div v-if="!durationSelected.isPatreon">
                Buy
              </div>
              <div v-else class="flex">
                <svg-icon type="mdi" :path="mdiPatreon" class="h-6 w-6 mr-4 text-white" aria-hidden="true" />
                <span class="my-auto">Become a patron</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>

    <main id="custombackgrounds">
      <div class="bg-white">
        <div class="hero-preview">
          <span class="section-title">Don’t want to pay monthly?</span>
          <span class="section-subtitle">Don’t want to do monthly commitments for features you may not use? You can buy just custom backgrounds for a guild of your choosing.</span>

          <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div class="relative">
              <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex border border-gray-300">
                  <div class="flex-1 bg-white px-6 py-8 lg:p-12">
                    <h3 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                      Custom Welcomer Backgrounds
                    </h3>
                    <p class="mt-6 text-base text-gray-500">
                      Get unlimited Welcomer Backgrounds for a server of your choosing forever without having to pay for monthly Welcomer Pro. Infact, any guild that you add Welcomer Pro to gets this automatically.
                    </p>
                    <div class="mt-8">
                      <div class="flex items-center">
                        <div class="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <ul class="mt-8 space-y-5 lg:space-y-0">
                        <li  class="flex items-start lg:col-span-1">
                          <div class="flex-shrink-0">
                            <CheckIcon class="h-5 w-5 text-donate" aria-hidden="true" />
                          </div>
                          <p class="ml-3 text-sm text-gray-700">
                            Custom Welcomer Backgrounds
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="py-8 px-6 text-center bg-secondary lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <p class="text-lg leading-6 font-medium text-gray-200">
                      Pay once, own it forever
                    </p>
                    <div class="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                      <span>
                        {{ currency }}{{ customBackgroundPrice }}
                      </span>
                    </div>
                    <div class="mt-6">
                      <div class="rounded-md shadow">
                        <a @click.prevent="handleCustomBackgroundClick" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary-light hover:bg-secondary-dark cursor-pointer">
                          Get for your guild
                        </a>
                      </div>
                    </div>
                    <div class="mt-4 text-sm text-gray-400">
                      For one server, forever
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main>
      <div class="bg-donate">
        <div class="hero-features">
          <span class="section-title"
            >Finally, a colour that isn’t pink!</span
          >
          <span class="section-subtitle">We have been able to keep the bot alive and running for the last 4 years thanks to our wonderful donators.</span>

          <div class="lg:grid lg:grid-cols-3 lg:gap-8 mt-16 mx-4">
            <div>
              <h2 class="text-3xl font-bold text-white">
                Frequently asked questions
              </h2>
              <p class="mt-4 text-lg text-white">Can't find what you are looking for? Reach out to us on our <a class="text-white underline" href="#">support server</a>.</p>
            </div>
            <div class="mt-12 lg:mt-0 lg:col-span-2">
              <dl class="space-y-10">
                <Disclosure as="div" v-for="faq in faqs" :key="faq.question" v-slot="{ open }">
                  <dt class="text-lg">
                    <DisclosureButton class="text-left w-full flex justify-between items-start text-donate-dark">
                      <span class="font-medium text-white">
                        {{ faq.question }}
                      </span>
                      <span class="ml-6 h-7 flex items-center">
                        <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']" aria-hidden="true" />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" class="mt-2 pr-12">
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
    </main>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
</style>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

import { ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel, RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

import { CheckIcon } from '@heroicons/vue/solid';
import { ChevronDownIcon } from '@heroicons/vue/outline'

import { mdiHelpRhombus, mdiPatreon } from '@mdi/js';
import SvgIcon from "@jamescoyle/vue-icon";

const features = [
  {
    name: "Animated Welcomer Backgrounds",
    icon: mdiHelpRhombus,
    description: "Along with Custom Welcomer Backgrounds, Welcomer Pro allows you to also have animated backgrounds. Just don’t use massive images, mobile users hate them.",
  },
  {
    name: "Invite Rewards and Roles",
    icon: mdiHelpRhombus,
    description: "Reward users for inviting users to your guild and give users specific roles based on the invite that they use.",
  },
  {
    name: "Time Roles",
    icon: mdiHelpRhombus,
    description: "Sometimes you don’t want to give users their roles immediately, when using Time Roles you can give users roles automatically after a specific ammount of time such as 10 minutes after they join.",
  },
  {
    name: "Increased Automation Actions",
    icon: mdiHelpRhombus,
    description: "Running out of Automation actions on your guild? You can get up to 100,000* automation actions for your guilds each month for whatever you want.",
  },
]

const checklist = [
  "Custom Backgrounds",
  "Dedicated Donator Bot",
  "Flexible plans",
  "No recurring payments",
]

// Data below will be fetched from API

const currency = "£"

const durations = [
  {
    name: "Monthly",
    months: 1,
    multiplier: 1,
    secondary: "",
    tertiary: "Perfect for trying out Welcomer Pro",
  },
  {
    name: "Quarterly",
    months: 3,
    multiplier: 0.9,
    secondary: "Save 10%",
    tertiary: "Save without long commitments",
  },
  {
    name: "Bi-Annually",
    months: 6,
    multiplier: 0.8,
    secondary: "Save 20%",
    tertiary: "Get 1 month free**",
  },
  {
    name: "Anually",
    months: 12,
    multiplier: 0.7,
    secondary: "Save 30%",
    tertiary: "Get 3 months free**",
  },
  {
    name: "Patreon",
    months: 1,
    multiplier: 1,
    secondary: "",
    tertiary: "Pay monthly and not handle renewing",
    isPatreon: true,
  },
]

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
    patreonPrice: 11.50,
    patreonCheckout: 3744926,
  },
]

const faqs = [
  {
    question: "Why do people have to pay to use your bot?",
    answer: "Please do not think that welcomer has paywall! All the features welcomer that welcomer has ever had still available to everyone for free. We only have extra perks as a way to say thank you to people who help keep our bot online. Without people donating towards the bot, we would not be able to keep this bot community funded and as more people invite the bot, more powerful hardware is needed to be able to run it. Hosting is not cheap and by donating, you're helping keep it up and running 👌."
  },
  {
    question: "I have donated through patreon but i have not received a membership",
    answer: "When you are donating through patreon, please make sure you bind a discord account to your patreon account. If you have forgotten to do this by accident, please contact a staff member on our support server for more assistance with some proof of purchase."
  },
  {
    question: "I have donated, now what?",
    answer: "When you donate towards the bot, you should automatically receive a message confirming this in your direct messages with welcomer. To apply your donation to a server, you can either directly apply it to the server you are on by doing +membership add or provide an id after like +membership add 341685098468343822 and also make sure you have not used up your applicable servers limit. Your applicable server limit is 1 for plus, 3 for pro and 5 for extended. If you want to remove a membership from a server you can do the same process as adding however you would need to do +membership remove."
  },
  {
    question: "Why do i instantly get charged on patreon?",
    answer: "Patreon charges automatically when you donate because this makes it that you need your payment details to be valid before getting rewards and people could just donate and remove their patreonage at the end of the month and receive the full rewards. Because of how patreon opperates, if you donate on the last day of the month, you will be charged then and on the first of the next month."
  },
  {
    question: "Why are custom backgrounds paid for?",
    answer: "At first when welcomer was made, custom images used to be free to use and had been for quite a long time. Recently we have decided to make it that a one time payment of £1 or $1.50 would be needed to be able to unlock this feature. This is because as of recently, the bot has become more used and over time has used a trendous amount of both storage space and processing to be able to utilise all these custom backgrounds. All previously set custom backgrounds will not be removed however to change it you will require to do the one time payment. This is simply put to show support for the development of the bot as recently the bot now requires over 100 Gigabytes of storage for storing both these custom backgrounds and 1 week cached images, its a little gesture that you support the bot. Despite making custom backgrounds paid for again, there are still a large amount of free backgrounds and once you have paid for custom backgrounds you are able to apply this to any server."
  },
]

const customBackgroundPrice = 5
const fromPrice = 5

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
    const durationSelected = ref(durations[0])
    const planSelected = ref(plans[0])
    const open = ref(false)

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
    }
  },
  methods: {
    handleClick: function() {
      if (this.durationSelected.isPatreon) {
        return window.open(`https://www.patreon.com/join/Welcomer/checkout?rid=${this.planSelected.patreonCheckout}`, '_blank');
      }

      // Open the donate page
    },
    handleCustomBackgroundClick: function() {
      // Open the donate page
    },
  }
}

</script>