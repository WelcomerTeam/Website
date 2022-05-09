<template>
  <Listbox
    as="div"
    v-slot="{ open }"
    class="relative"
    v-model="modelValue"
    :disabled="$props.disabled"
    @update:modelValue="updateValue($event)"
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
          <ListboxButton
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
          </ListboxButton>
        </div>
      </div>
    </div>
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ListboxOptions
        class="z-10 w-full overflow-auto text-base bg-white rounded-md max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border-t-0 rounded-t-none"
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
                  {{ tab.name }}
                </a>
              </nav>
            </div>

            <div class="overflow-auto">
              <div class="grid grid-cols-2 p-4 gap-2" v-if="this.page == 1">
                <ListboxOption
                  as="template"
                  v-slot="{ active, selected }"
                  v-for="image in images"
                  :key="image"
                  :value="image.id"
                >
                  <img
                    :src="imageRoot(image.id)"
                    :class="[
                      active ? 'bg-primary' : '',
                      selected ? 'bg-primary' : '',
                      'hover:brightness-75  rounded-md focus:outline-none focus:ring-4 focus:ring-primary focus:border-primary',
                    ]"
                  />
                </ListboxOption>
              </div>
              <div class="space-y-1" v-if="this.page == 2">B</div>
            </div>
          </div>
        </div>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

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

const tabs = [
  { name: "Backgrounds", value: 1, enabled: true },
  { name: "Custom", value: 2, enabled: true },
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

    return {
      tabs,
      page,
      images,
      displayEmbed,

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
  },
};
</script>

<style></style>
