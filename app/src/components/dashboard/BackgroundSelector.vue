<template>
  <Popover
    as="div"
    v-slot="{ open }"
    class="relative"
    :disabled="$props.disabled"
  >
    <div
      :class="[
        $props.invalid ? 'ring-red-500 border-red-500' : '',
        open ? 'rounded-b-none' : '',
        'border border-gray-300 p-4 rounded-md flex shadow-sm',
      ]"
    >
      <discord-embed
        class="flex-1"
        :embeds="displayEmbed.embeds"
        :content="displayEmbed.content"
        :isLight="true"
        :isBot="true"
      />

      <div class="flex items-end">
        <div class="relative">
          <PopoverButton
            :class="[
              $props.disabled ? 'bg-gray-100' : 'bg-white',
              'relative py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
            ]"
            :disabled="$props.disabled"
          >
            <div class="">
              <font-awesome-icon
                icon="pen-to-square"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <ChevronDownIcon
                :class="[
                  open ? 'transform rotate-180' : '',
                  'w-5 h-5 text-gray-400',
                ]"
                aria-hidden="true"
              />
            </span>
          </PopoverButton>
        </div>
      </div>
    </div>
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <PopoverPanel
        class="z-10 w-full overflow-auto text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-t-0 rounded-t-none"
      >
        <div v-if="$props.isLoading" class="flex py-5 w-full justify-center">
          <LoadingIcon />
        </div>
        <div v-else>
          <div
            class="block w-full overflow-auto text-base bg-white rounded-md sm:text-sm border-gray-300 border rounded-t-none border-t-0"
          >
            <div class="border-b border-gray-200">
              <nav class="flex display-flex justify-evenly" aria-label="Tabs">
                <a
                  v-for="tab in tabs"
                  :key="tab.name"
                  @click="this.page = tab.enabled ? tab.value : this.page"
                  :class="[
                    tab.enabled ? '' : ' bg-gray-100',
                    tab.value == this.page
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
                    'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-sm cursor-pointer w-full justify-center',
                  ]"
                  :aria-current="tab.value == this.page ? 'page' : undefined"
                >
                  <div v-if="tab.icon" class="mr-2">
                    <font-awesome-icon :icon="tab.icon" />
                  </div>
                  {{ tab.name }}
                </a>
              </nav>
            </div>

            <div class="overflow-auto">
              <div
                class="max-h-72 grid grid-cols-2 p-4 gap-2"
                v-if="this.page == 1"
              >
                <button
                  as="template"
                  v-for="image in images"
                  :key="image"
                  @click="updateValue(image.id)"
                >
                  <img
                    :src="imageRoot(image.id)"
                    :class="[
                      $props.modelValue == image.id
                        ? 'border-primary ring-primary ring-4'
                        : '',
                      'hover:brightness-75 rounded-md focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary',
                    ]"
                  />
                </button>
              </div>
              <div class="max-h-72 p-4" v-if="this.page == 2">
                <div
                  class="bg-gray-50 sm:w-8/12 w-full h-32 mx-auto border-gray-300 border-2 rounded-md border-dashed flex"
                >
                  <div class="m-auto text-gray-500 text-center">
                    <font-awesome-icon
                      icon="file-image"
                      class="block mx-auto w-5 h-5 mb-1"
                    />
                    Upload here. Max file size of 8mb.
                  </div>
                </div>
              </div>
              <div class="max-h-72 p-4" v-if="this.page == 3">Unsplash</div>
              <div class="max-h-72 p-4" v-if="this.page == 4">
                <div
                  class="sm:flex sm:gap-4 sm:border-gray-200 mb-6 sm:mb-4 align-middle"
                >
                  <label class="block font-semibold text-gray-700">
                    Use profile colour for backgrounds
                  </label>
                  <div class="mt-1 sm:mt-0 sm:col-span-2">
                    <Switch
                      :modelValue="
                        $props.modelValue ==
                        solidColourPrefix + solidColourProfileBased
                      "
                      @update:modelValue="
                        updateValue(
                          $event
                            ? solidColourPrefix + solidColourProfileBased
                            : solidColourPrefix + '0'
                        )
                      "
                      :class="[
                        $props.modelValue ==
                        solidColourPrefix + solidColourProfileBased
                          ? 'bg-green-500 focus:ring-green-500'
                          : 'bg-gray-400 focus:ring-gray-400',
                        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2',
                      ]"
                    >
                      <span
                        :class="[
                          $props.modelValue ==
                          solidColourPrefix + solidColourProfileBased
                            ? 'translate-x-5'
                            : 'translate-x-0',
                          'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                        ]"
                      >
                        <span
                          :class="[
                            $props.modelValue ==
                            solidColourPrefix + solidColourProfileBased
                              ? 'opacity-0 ease-out duration-100'
                              : 'opacity-100 ease-in duration-200',
                            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                          ]"
                          aria-hidden="true"
                        >
                          <svg
                            class="w-3 h-3 text-gray-400"
                            fill="none"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          :class="[
                            $props.modelValue ==
                            solidColourPrefix + solidColourProfileBased
                              ? 'opacity-100 ease-in duration-200'
                              : 'opacity-0 ease-out duration-100',
                            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                          ]"
                          aria-hidden="true"
                        >
                          <svg
                            class="w-3 h-3 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 12 12"
                          >
                            <path
                              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                            />
                          </svg>
                        </span>
                      </span>
                    </Switch>
                  </div>
                </div>
                <Listbox
                  as="div"
                  v-model="modelValue"
                  @update:modelValue="updateValue($event)"
                  :disabled="
                    $props.modelValue ==
                    solidColourPrefix + solidColourProfileBased
                  "
                >
                  <div class="mt-1">
                    <ListboxButton
                      :class="[
                        $props.modelValue ==
                        solidColourPrefix + solidColourProfileBased
                          ? 'bg-gray-100'
                          : 'bg-white',
                        'relative w-full py-2 pl-3 pr-10 text-left border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm',
                      ]"
                    >
                      <div
                        class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                      >
                        <font-awesome-icon
                          icon="square"
                          class="inline w-4 h-4 mr-1 border-primary"
                          :style="{ color: `${RGBIntToRGB(modelValue, 0)}` }"
                        />
                      </div>
                      <span class="block pl-10 truncate">{{
                        RGBIntToRGB(modelValue, 0).toUpperCase()
                      }}</span>
                      <span
                        class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                      >
                        <SelectorIcon
                          class="w-5 h-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </ListboxButton>

                    <transition
                      leave-active-class="transition duration-100 ease-in"
                      leave-from-class="opacity-100"
                      leave-to-class="opacity-0"
                    >
                      <ListboxOptions class="absolute z-10 mt-1">
                        <ColorPicker
                          theme="light"
                          :color="RGBIntToRGB(modelValue, 0)"
                          @changeColor="SetRGBIntToRGB"
                          :sucker-hide="true"
                        />
                      </ListboxOptions>
                    </transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<style lang="css">
.hu-color-picker {
  min-width: 218px;
}
</style>

<script>
import LoadingIcon from "../LoadingIcon.vue";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Switch,
  SwitchGroup,
  SwitchLabel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon, ChevronDownIcon } from "@heroicons/vue/solid";
import { XIcon } from "@heroicons/vue/outline";

import { ref } from "vue";
import DiscordEmbed from "../DiscordEmbed.vue";

import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

const tabs = [
  { name: "Welcomer", value: 1, enabled: true },
  { name: "Solid Colour", value: 4, enabled: true },
  { name: "Custom", value: 2, enabled: true },
  { name: "Unsplash", icon: ["fab", "unsplash"], value: 3, enabled: true },
];

const images = [
  { id: "1", animated: false },
  { id: "2", animated: false },
  { id: "3", animated: false },
  { id: "4", animated: false },
  { id: "5", animated: false },
  { id: "6", animated: false },
];

const imageRoot = (id) => `/dist/backgrounds/${id}.png`;
const imageExampleRoot = (id) => `/dist/backgrounds/${id}-example.png`;

const solidColourPrefix = "solid:";
const solidColourProfileBased = "profile";
const unsplashPrefix = "unsplash:";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Switch,
    SwitchGroup,
    SwitchLabel,
    CheckIcon,
    SelectorIcon,
    ChevronDownIcon,
    XIcon,
    LoadingIcon,
    Popover,
    PopoverButton,
    PopoverPanel,
    DiscordEmbed,
    ColorPicker,
  },

  props: {
    modelValue: {
      type: null,
      required: false,
    },
    disabled: {
      type: Boolean,
    },
    invalid: {
      type: Boolean,
    },
  },

  setup(props) {
    let page = ref(1);
    let displayEmbed = ref({
      embeds: [
        {
          image: {
            url: imageExampleRoot(props.modelValue),
          },
        },
      ],
    });

    let solidColourIsProfileBased = ref(
      props.modelValue == solidColourPrefix + solidColourProfileBased
    );

    return {
      tabs,
      page,
      images,
      displayEmbed,

      solidColourIsProfileBased,

      solidColourPrefix,
      solidColourProfileBased,
      unsplashPrefix,

      imageRoot,
      imageExampleRoot,
    };
  },

  emits: ["update:modelValue"],

  methods: {
    updateValue(value) {
      this.displayEmbed.embeds[0].image.url = imageExampleRoot(value);
      this.$emit("update:modelValue", value);
    },

    RGBIntToRGB(rgbInt, defaultValue) {
      if (rgbInt.startsWith(solidColourPrefix)) {
        rgbInt = rgbInt.slice(solidColourPrefix.length);
      } else {
        rgbInt = defaultValue;
      }

      if (parseInt(rgbInt, 10) != rgbInt) {
        rgbInt = defaultValue;
      }

      return (
        "#" +
        parseInt(rgbInt == undefined ? defaultValue : rgbInt, 10)
          .toString(16)
          .slice(-6)
          .padStart(6, "0")
      );
    },

    SetRGBIntToRGB(color) {
      const { r, g, b } = color.rgba;
      this.updateValue(solidColourPrefix + ((r << 16) + (g << 8) + b));
    },
  },
};
</script>

<style></style>
