<template>
  <form-value title="Roles" :type="FormTypeBlank" :hideBorder="true">
    <table class="min-w-full border-spacing-2">
      <thead>
        <tr>
          <th scope="col" class="relative py-3.5 pr-3 text-left w-4/5">
            <!-- Role -->
          </th>
          <th scope="col" class="relative py-3.5">
            <!-- Actions -->
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200 dark:divide-secondary-light">
        <tr v-for="(role, index) in this.$props.roles" :key="index">
          <td class="pr-3 text-sm dark:text-gray-50">
            <font-awesome-icon
              icon="circle"
              class="inline w-4 h-4 mr-1 border-primary"
              :style="{ color: `${getHexColor(role?.color)}` }"
            />
            {{ role.name }}
          </td>
          <td
            class="whitespace-nowrap py-4 text-sm text-center dark:text-gray-50 space-x-2"
          >
            <a
              @click="this.onRemoveRole(role.id)"
              class="text-primary hover:text-primary-dark cursor-pointer"
            >
              <font-awesome-icon icon="close" />
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <Listbox as="div" @update:modelValue="this.onSelectRole($event)">
              <div class="relative">
                <ListboxButton
                  class="bg-white dark:bg-secondary-dark relative w-full mt-2 py-2 pl-3 pr-10 text-left border border-gray-300 dark:border-secondary-light rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <div
                    v-if="$store.getters.isLoadingGuild"
                    class="block h-6 sm:h-5 animate-pulse bg-gray-200 w-48 rounded-md"
                  ></div>
                  <span v-else class="block truncate">Add role</span>
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
                  <ListboxOptions
                    class="absolute z-20 w-full mt-1 overflow-auto text-base bg-white dark:bg-secondary-dark rounded-md shadow-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <div
                      v-if="$store.getters.isLoadingGuild"
                      class="flex py-5 w-full justify-center"
                    >
                      <LoadingIcon />
                    </div>
                    <div v-else>
                      <ListboxOption
                        as="template"
                        v-for="role in this.$props.selectableRoles"
                        :key="role.id"
                        :value="role.id"
                        v-slot="{ active, selected }"
                        :disabled="!role.is_assignable"
                      >
                        <li
                          :class="[
                            role.is_assignable
                              ? ''
                              : 'bg-gray-200 dark:bg-secondary-light',
                            active
                              ? 'text-white bg-primary'
                              : 'text-gray-900 dark:text-gray-50',
                            'cursor-default select-none relative py-2 pl-3 pr-9',
                          ]"
                        >
                          <span
                            :class="[
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate',
                            ]"
                          >
                            <font-awesome-icon
                              icon="circle"
                              :class="[
                                active ? 'text-white' : 'text-gray-400',
                                'inline w-4 h-4 mr-1 border-primary',
                              ]"
                              :style="{ color: `${getHexColor(role?.color)}` }"
                            />
                            {{ role.name }}
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
          </td>
          <td />
        </tr>
      </tbody>
    </table>
  </form-value>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

import { ref } from "vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { XIcon } from "@heroicons/vue/outline";
import EmbedBuilder from "./EmbedBuilder.vue";
import FormValue from "./FormValue.vue";
import {
  FormTypeBlank,
} from "./FormValueEnum";
import UnsavedChanges from "./UnsavedChanges.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

import { getHexColor } from "@/utilities";

export default {
  props: {
    roles: {
      type: Object,
      required: true,
    },
    selectableRoles: {
      type: Object,
      required: true,
    },
  },

  emits: ["removeRole", "selectRole"],

  components: {
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,

    FormValue,
    EmbedBuilder,
    UnsavedChanges,
    XIcon,
    LoadingIcon,
    CheckIcon,
    SelectorIcon,
  },
  setup() {
    let roles = ref([]);

    return {
      FormTypeBlank,

      roles,
    };
  },

  methods: {
    getHexColor,

    onSelectRole(roleID) {
      this.$emit("selectRole", roleID);
    },

    onRemoveRole(roleID) {
      this.$emit("removeRole", roleID);
    },
  },
};
</script>

<style></style>