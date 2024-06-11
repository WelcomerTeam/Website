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
                <!-- <div class="mb-4 grid grid-cols-4 gap-4">
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
                </div> -->

                <div class="space-y-12">
                  <div v-for="group in groups" :key="group" :id="group.id">
                    <div class="text-xs font-bold uppercase my-4 text-gray-900">
                      {{ group.name }}
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      <button as="template" v-for="image in group.images" :key="image">
                        <img :title="image.id" v-lazy="{
                          src: `/assets/backgrounds/${image.id}.webp`,
                        }" :class="[
                          $props.modelValue == image.id
                            ? 'border-primary ring-primary ring-4'
                            : '',
                          'hover:brightness-75 rounded-md focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary aspect-[5/2] w-full',
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

import { rgbaToDataURL, thumbHashToRGBA } from "thumbhash";

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
    id: "misc",
    name: "Miscellaneous",
    images: [
      {
        "id": "solarglare",
        "thumbhash": "xRcGA4JgDps9maSl8k0I15M="
      },
      {
        "id": "unova",
        "thumbhash": "jxcGE4QqBpc29DqHblD4BmU="
      },
      {
        "id": "nightview",
        "thumbhash": "yAcGA4ADvnKUaFe4+XxlMKg="
      },
      {
        "id": "collision",
        "thumbhash": "jRgKI4QJtlp2hmmXCHiWYGc="
      },
      {
        "id": "midnightride",
        "thumbhash": "XccJA4AKeWZmhUl4DGOhgAc="
      },
      {
        "id": "paint",
        "thumbhash": "VCcOO5Q/lnhndkiGcJoJoZk="
      },
      {
        "id": "utopia",
        "thumbhash": "prYJC4KJZ3ifd3h3u3ClWgY="
      },
      {
        "id": "riot",
        "thumbhash": "GwgaA4BwaodqeHiHAZVpMHg="
      },
      {
        "id": "alone",
        "thumbhash": "6geOAoAPUHh4eHc/hz8M31eIF3hwdQI="
      },
      {
        "id": "cybergeek",
        "thumbhash": "TScGC4QGdEiKh2iI70f5iYc="
      },
    ],
  },
  {
    id: "nature",
    name: "Nature",
    images: [
      {
        "id": "sunset",
        "thumbhash": "H2gOO4h0aHePdxeJc4lQVgk="
      },
      {
        "id": "garden",
        "thumbhash": "5iUJI4SvdIhfaEmVmHAHdkc="
      },
      {
        "id": "sea",
        "thumbhash": "UYWFCoIPhlpwZ4Nsvp/32A8P8PDwAA8="
      },
      {
        "id": "clouds",
        "thumbhash": "I/YNM4hvmHd3mDh3f3P1N3Y="
      },
      {
        "id": "mountains",
        "thumbhash": "4heKGoQPYIiPd4OBpxB3CgYGh3d4iHg="
      },
      {
        "id": "lodge",
        "thumbhash": "Z2gKC4QHZ4h7iEeXBoB2Cpg="
      },
      {
        "id": "riversource",
        "thumbhash": "ZocNG4Yod3h/iWeYN49h9Tg="
      },
      {
        "id": "wood",
        "thumbhash": "HXsGC4ICaHeFeHeIEHbEr3c="
      },
      {
        "id": "summer",
        "thumbhash": "7XUJG4T3ZHWDWCZkxnDDCgs="
      },
      {
        "id": "peace",
        "thumbhash": "k4gKG4Z4hGrlZwhnordQWQ8="
      },
      {
        "id": "autumn",
        "thumbhash": "HEoKG4RveIbviOdoMCEFBUM="
      },
      {
        "id": "upland",
        "thumbhash": "H7cZC4R4eIh/d3eHdYFvB6g="
      },
    ],
  },
  {
    id: "patterns",
    name: "Patterns",
    images: [
      {
        "id": "rainbow",
        "thumbhash": "ETkOO5AKlnhohziGCkgCoVY="
      },
      {
        "id": "shards",
        "thumbhash": "5WUJI4SPeYh/d3iHrn8qf/c="
      },
      {
        "id": "stacks",
        "thumbhash": "IUcOI46ZiXifhrdYgH0HmFc="
      },
      {
        "id": "sun",
        "thumbhash": "4PsKQ5Bwdndyh3iHYHL21nU="
      },
      {
        "id": "glare",
        "thumbhash": "GbcJK5oGZVxWmFd0/Vn4enY="
      },
      {
        "id": "vectors",
        "thumbhash": "UDUOK4h3d3iAiLh3d49mA8k="
      },
      {
        "id": "aesthetics",
        "thumbhash": "WvYBA5aHh4d/eEh4eH95CHg="
      },
      {
        "id": "squares",
        "thumbhash": "lnUFC4IHR2iHd3d3+Hl5j4Y="
      },
      {
        "id": "fall",
        "thumbhash": "imgKM45Wh3d/d4iHL7o4wIY="
      },
      {
        "id": "spots",
        "thumbhash": "2ueFEoYPwGh8Y25AXArBlQ8PiId4iHg="
      },
      {
        "id": "sunrise",
        "thumbhash": "WusOE4QYZ3hwiXiHKIKAqQg="
      },
      {
        "id": "ribbons",
        "thumbhash": "V2cOO4wGiHeXlziXj6j5s6k="
      },
    ]
  },
  {
    id: "anime",
    name: "Anime",
    images: [
      {
        "id": "neko",
        "thumbhash": "xQcKA4DQlHeWhnd4H8MGnXY="
      },
      {
        "id": "tanya",
        "thumbhash": "0ygGE4Ik6DlfiLTXNn9K8qg="
      },
      {
        "id": "afterwork",
        "thumbhash": "WhgGE4I7x2BITamWBWZKoJU="
      },
      {
        "id": "rem",
        "thumbhash": "uvcFC4A/aWmWh4eHL5X2IB0="
      },
      {
        "id": "vampire",
        "thumbhash": "2vkGG46wOh0ZiEKoj2n4hIg="
      },
      {
        "id": "pika",
        "thumbhash": "craBIoQPT3hpp3fQlQVNag8P8PDwES4="
      },
      {
        "id": "meteorshower",
        "thumbhash": "2KgGE4b8eGgOeIdmwQEIKXI="
      },
      {
        "id": "airship",
        "thumbhash": "CggKA4CgdoeWZ6l3kIRNZvc="
      },
    ]
  },
];

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
