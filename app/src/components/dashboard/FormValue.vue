<template>
  <div class="field-container">
    <label class="field-title">
      {{ title }}
    </label>
    <div v-if="type == FormTypeToggle" class="field-input-container">
      <Switch
        :modelValue="modelValue"
        @update:modelValue="updateValue($event)"
        :class="[
          modelValue ? 'bg-green-500' : 'bg-gray-400',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
        ]"
      >
        <span class="sr-only">{{ title }}</span>
        <span
          :class="[
            modelValue ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          ]"
        >
          <span
            :class="[
              modelValue
                ? 'opacity-0 ease-out duration-100'
                : 'opacity-100 ease-in duration-200',
              'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
            ]"
            aria-hidden="true"
          >
            <svg class="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 12 12">
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
              modelValue
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

    <div v-else-if="type == FormTypeChannelList" class="field-input-container">
      <Listbox
        as="div"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
      >
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg-icon
                type="mdi"
                :path="mdiPound"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="$store.getters.isLoading"
              class="block ml-10 h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
            ></div>
            <span v-else class="block pl-10 truncate">{{
              modelValue == null
                ? "No channel selected"
                : $store.getters.getGuildChannelById(modelValue)?.name ||
                  `Unknown channel ${modelValue}`
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption as="template" v-slot="{ active, selected }">
                <li
                  :class="[
                    active ? 'text-white bg-primary' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-semibold' : 'font-normal',
                      'block truncate',
                    ]"
                  >
                    Unselect channel
                  </span>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-primary',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
              <div
                v-if="$store.getters.isLoading"
                class="flex py-5 w-full justify-center"
              >
                <LoadingIcon />
              </div>
              <ListboxOption
                v-else
                as="template"
                v-for="channel in this.filterTextChannels(
                  $store.getters.getGuildChannels
                )"
                :key="channel.id"
                :value="channel.id"
                v-slot="{ active, selected }"
              >
                <li
                  :class="[
                    active ? 'text-white bg-primary' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-semibold' : 'font-normal',
                      'block truncate',
                    ]"
                  >
                    <svg-icon
                      type="mdi"
                      :path="mdiPound"
                      :class="[
                        active ? 'text-white' : 'text-gray-400',
                        'inline w-4 h-4 mr-1',
                      ]"
                    />
                    {{ channel.name }}
                  </span>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-primary',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <div
      v-else-if="type == FormTypeChannelListCategories"
      class="field-input-container"
    >
      <Listbox
        as="div"
        v-model="modelValue"
        @update:modelValue="updateValue($event)"
      >
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
          >
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg-icon
                type="mdi"
                :path="mdiPound"
                class="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div
              v-if="$store.getters.isLoading"
              class="block ml-10 h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
            ></div>
            <span v-else class="block pl-10 truncate">{{
              modelValue == null
                ? "No channel selected"
                : $store.getters.getGuildChannelById(modelValue)?.name ||
                  `Unknown channel ${modelValue}`
            }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-10 w-full mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption as="template" v-slot="{ active, selected }">
                <li
                  :class="[
                    active ? 'text-white bg-primary' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-semibold' : 'font-normal',
                      'block truncate',
                    ]"
                  >
                    Unselect channel
                  </span>

                  <span
                    v-if="selected"
                    :class="[
                      active ? 'text-white' : 'text-primary',
                      'absolute inset-y-0 right-0 flex items-center pr-4',
                    ]"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </li>
              </ListboxOption>
              <div
                v-if="$store.getters.isLoading"
                class="flex py-5 w-full justify-center"
              >
                <LoadingIcon />
              </div>
              <div
                v-else
                v-for="category in $store.getters.getPackedGuildChannels"
                :key="category"
              >
                <div
                  class="py-3"
                  v-if="category.name && category.channels.length !== 0"
                >
                  <span class="pl-2 text-xs font-bold uppercase">{{
                    category.name
                  }}</span>
                </div>
                <ListboxOption
                  as="template"
                  v-for="channel in category.channels"
                  :key="channel.id"
                  :value="channel.id"
                  v-slot="{ active, selected }"
                >
                  <li
                    :class="[
                      active ? 'text-white bg-primary' : 'text-gray-900',
                      'cursor-default select-none relative py-2 pl-3 pr-9',
                    ]"
                  >
                    <span
                      :class="[
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      ]"
                    >
                      <svg-icon
                        type="mdi"
                        :path="mdiPound"
                        :class="[
                          active ? 'text-white' : 'text-gray-400',
                          'inline w-4 h-4 mr-1',
                        ]"
                      />
                      {{ channel.name }}
                    </span>

                    <span
                      v-if="selected"
                      :class="[
                        active ? 'text-white' : 'text-primary',
                        'absolute inset-y-0 right-0 flex items-center pr-4',
                      ]"
                    >
                      <CheckIcon class="w-5 h-5" aria-hidden="true" />
                    </span>
                  </li>
                </ListboxOption>
              </div>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>

    <div
      v-else-if="type == FormTypeRoleList"
      class="field-input-container"
    ></div>

    <div
      v-else-if="type == FormTypeMemberList"
      class="field-input-container"
    ></div>

    <div
      v-else-if="type == FormTypeEmojiList"
      class="field-input-container"
    ></div>

    <div v-else-if="type == FormTypeColour" class="field-input-container"></div>

    <div v-else-if="type == FormTypeText" class="field-input-container"></div>

    <div v-else-if="type == FormTypeNumber" class="field-input-container"></div>

    <div
      v-else-if="type == FormTypeTextArea"
      class="field-input-container"
    ></div>

    <span v-else>Unknown type {{ type }}</span>
  </div>
</template>

<style lang="scss">
@layer components {
  .field-container {
    @apply sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5 mb-4 sm:mb-0;
  }
  .field-title {
    @apply block font-medium text-gray-700 sm:mt-px sm:pt-2;
  }
  .field-input-container {
    @apply mt-1 sm:mt-0 sm:col-span-2;
  }
}
</style>

<script>
import store from "../../store/index";
import LoadingIcon from "../LoadingIcon.vue";

import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Switch,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { XIcon } from "@heroicons/vue/outline";
import {
  mdiPound,
  mdiBullhorn,
  mdiVolumeHigh,
  mdiAt,
  mdiCheckboxBlank,
  mdiAccount,
} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

import { ColorPicker } from "vue-color-kit";
import "vue-color-kit/dist/vue-color-kit.css";

import {
  FormTypeToggle,
  FormTypeChannelList,
  FormTypeChannelListCategories,
  FormTypeRoleList,
  FormTypeMemberList,
  FormTypeEmojiList,
  FormTypeColour,
  FormTypeText,
  FormTypeTextArea,
  FormTypeNumber,
} from "./FormValueEnum";

export default {
  components: {
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    Switch,
    CheckIcon,
    SelectorIcon,
    SvgIcon,
    XIcon,
    ColorPicker,
    LoadingIcon,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
      validator(value) {
        return [
          FormTypeToggle,
          FormTypeChannelList,
          FormTypeChannelListCategories,
          FormTypeRoleList,
          FormTypeMemberList,
          FormTypeEmojiList,
          FormTypeColour,
          FormTypeText,
          FormTypeTextArea,
          FormTypeNumber,
        ].includes(value);
      },
    },
    modelValue: {
      type: null,
    },
  },

  emits: ["update:modelValue"],

  setup(props) {
    let selected = null;

    selected = "";

    return {
      FormTypeToggle,
      FormTypeChannelList,
      FormTypeChannelListCategories,
      FormTypeRoleList,
      FormTypeMemberList,
      FormTypeEmojiList,
      FormTypeColour,
      FormTypeText,
      FormTypeTextArea,
      FormTypeNumber,

      mdiPound,
      mdiBullhorn,
      mdiVolumeHigh,
      mdiAt,
      mdiCheckboxBlank,
      mdiAccount,

      selected,
    };
  },

  methods: {
    refreshStore() {
      switch (props.type) {
        case FormTypeChannelList:
          var channel = store.getters.getGuildChannelById(props.modelValue);
          break;
        case FormTypeChannelListCategories:
          break;
        case FormTypeRoleList:
          break;
        case FormTypeMemberList:
          break;
        case FormTypeEmojiList:
          break;
      }
    },
    RGBIntToRGB(rgbInt, defaultValue) {
      return (
        "#" + (rgbInt | defaultValue).toString(16).slice(-6).padStart(6, "0")
      );
    },
    SetRGBIntToRGB(color) {
      const { r, g, b } = color.rgba;
      this.selectedF = (r << 16) + (g << 8) + b;
    },
    updateValue(value) {
      this.$emit("update:modelValue", value);
    },
    filterTextChannels(channels) {
      return channels.filter((c) => {
        return c.type === 0;
      });
    },
  },
};
</script>
