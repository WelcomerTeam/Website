<template>
  <div>
    <div v-if="type == FormTypeToggle">
      <div
        class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-gray-200 sm:pt-5"
      >
        <label
          class="block font-medium text-gray-700"
        >
          {{ title }}
        </label>
        <div class="mt-1 sm:mt-0 sm:col-span-2">
          <Switch
            :modelValue="modelValue"
            @update:modelValue="updateValue($event)"
            :class="[
              modelValue ? 'bg-green-500' : 'bg-gray-400',
              'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary',
            ]"
          >
            <span class="sr-only">Use setting</span>
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
      </div>
    </div>

    <div v-else-if="type == FormTypeChannelList">
      
    </div>

    <div v-else-if="type == FormTypeChannelListCategories">
      
    </div>

    <div v-else-if="type == FormTypeRoleList">
      
    </div>

    <div v-else-if="type == FormTypeMemberList">
      
    </div>

    <div v-else-if="type == FormTypeEmojiList">
      
    </div>

    <div v-else-if="type == FormTypeColour">
      
    </div>

    <div v-else-if="type == FormTypeText">
      
    </div>

    <div v-else-if="type == FormTypeNumber">
      
    </div>

    <div v-else-if="type == FormTypeTextArea">
      
    </div>

    <span v-else>Unknown type {{type}}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
  Switch,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { XIcon } from '@heroicons/vue/outline';
import { mdiPound, mdiBullhorn, mdiVolumeHigh, mdiAt, mdiCheckboxBlank, mdiAccount } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

import { ColorPicker } from 'vue-color-kit'
import 'vue-color-kit/dist/vue-color-kit.css'

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
        ].includes(value)
      }
    },
    modelValue: {
      type: null
    }
  },

  emits: [
    'update:modelValue'
  ],

  setup() {
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
    }
  },

  methods: {
    RGBIntToRGB(rgbInt, defaultValue) {
      return "#" + (rgbInt | defaultValue).toString(16).slice(-6).padStart(6, "0");
    },
    SetRGBIntToRGB(color) {
      const { r, g, b } = color.rgba;
      this.selectedF = (r << 16) + (g << 8) + b;
    },
    updateValue: function (value) {
      this.$emit('update:modelValue', value);
    }
  }
}
</script>