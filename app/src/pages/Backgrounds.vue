<template>
  <div class="relative min-h-screen">
    <Header />

    <main>
      <div id="overview" class="relative bg-secondary">
        <div class="px-6 py-12 bg-secondary w-full max-w-7xl mx-auto">
          <p class="text-3xl font-bold text-left text-white flex tracking-tight">
            Welcome Image Backgrounds
          </p>
        </div>
        <div>
          <BackgroundCarousel />
        </div>
      </div>

      <div id="backgrounds">
        <div class="bg-white">
          <div class="hero-preview">
            <div class="px-4 pt-8 mx-auto max-w-7xl sm:px-6">
              <div class="sm:flex sm:flex-col sm:align-center">
                <div class="prose-lg text-center mb-12">
                  <h1 class="font-black leading-8 tracking-tight text-gray-900">
                    Title
                  </h1>
                  <span class="mt-3 text-lg text-gray-500 section-subtitle max-w-prose mx-auto">
                    Subheading
                  </span>
                </div>

                <div class="mb-4 grid grid-cols-4 gap-4">
                  <input type="text"
                    class="col-span-4 sm:col-span-3 border-gray-300 dark:border-secondary-light bg-white dark:bg-secondary-dark rounded-md sm:text-sm"
                    placeholder="" v-model="query" @input="onQueryChange()" />

                  <Listbox as="div" class="col-span-4 sm:col-span-1">
                    <div class="relative">
                      <ListboxButton
                        class="bg-white dark:bg-secondary-dark relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 dark:border-secondary-light rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm">
                        <span class="block truncate">Groups</span>
                        <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </ListboxButton>

                      <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                        leave-to-class="opacity-0">
                        <ListboxOptions
                          class="absolute z-20 w-full mt-1 overflow-auto text-base bg-white dark:bg-secondary-dark rounded-md shadow-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          <ListboxOption as="template" v-for="group in groups" :key="group.id" :value="group.id">
                            <li
                              class="text-gray-900 dark:text-gray-50 cursor-default select-none relative py-2 pl-3 pr-9 hover:font-semibold font-normal block truncate hover:bg-primary"
                              @click="scrollTo(group.id)">
                              {{ group.name }}
                            </li>
                          </ListboxOption>
                        </ListboxOptions>
                      </transition>
                    </div>
                  </Listbox>
                </div>

                <div class="gap-4">
                  <div v-for="group in groups" :key="group" :id="group.id">
                    <div class="text-xs font-bold uppercase my-4 text-gray-900">
                      {{ group.name }}
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      <button as="template" v-for="image in group.images" :key="image">
                        <img v-lazy="backgroundRoot(image.id)" :class="[
                          $props.modelValue == image.id
                            ? 'border-primary ring-primary ring-4'
                            : '',
                          'hover:brightness-75 rounded-md focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary',
                        ]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackgroundPreview />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

import { SelectorIcon } from "@heroicons/vue/solid";

import BackgroundCarousel from "@/components/BackgroundCarousel.vue";
import BackgroundPreview from "@/components/BackgroundPreview.vue";

const groups = [
  {
    id: "welcomer",
    name: "Welcomer Backgrounds",
    images: [
    { id: "aesthetics", animated: false },
      { id: "afterwork", animated: false },
      { id: "airship", animated: false },
      { id: "alone", animated: false },
      { id: "autumn", animated: false },
      { id: "clouds", animated: false },
      { id: "collision", animated: false },
      { id: "cybergeek", animated: false },
      { id: "fall", animated: false },
      { id: "garden", animated: false },
      { id: "glare", animated: false },
      { id: "lodge", animated: false },
      { id: "meteorshower", animated: false },
      { id: "midnightride", animated: false },
      { id: "mountains", animated: false },
      { id: "neko", animated: false },
      { id: "nightview", animated: false },
      { id: "paint", animated: false },
      { id: "peace", animated: false },
      { id: "pika", animated: false },
      { id: "rainbow", animated: false },
      { id: "rem", animated: false },
      { id: "ribbons", animated: false },
      { id: "riot", animated: false },
      { id: "riversource", animated: false },
      { id: "sea", animated: false },
      { id: "shards", animated: false },
      { id: "solarglare", animated: false },
      { id: "spots", animated: false },
      { id: "squares", animated: false },
      { id: "stacks", animated: false },
      { id: "summer", animated: false },
      { id: "sun", animated: false },
      { id: "sunrise", animated: false },
      { id: "sunset", animated: false },
      { id: "tanya", animated: false },
      { id: "unova", animated: false },
      { id: "upland", animated: false },
      { id: "utopia", animated: false },
      { id: "vampire", animated: false },
      { id: "vectors", animated: false },
      { id: "wood", animated: false },
    ],
  },
];

const backgroundRoot = (id) => `/assets/backgrounds/${id}.webp`;

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    SelectorIcon,

    BackgroundCarousel,
    BackgroundPreview,

    Header,
    Footer,
  },
  setup() {
    return {
      groups,
      backgroundRoot,
    };
  },
  methods: {
    scrollTo(id) {
      let elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
    },
  },
};
</script>
