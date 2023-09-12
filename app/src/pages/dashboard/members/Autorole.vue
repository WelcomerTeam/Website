<template>
  <div class="dashboard-container">
    <div v-if="this.isDataError">
      <div class="mb-4">Data Error</div>
      <button @click="this.fetchConfig">Retry</button>
    </div>
    <div v-else>
      <div v-if="!this.isDataFetched" class="flex py-5 w-full justify-center">
        <LoadingIcon />
      </div>
      <div v-else>
        <div class="dashboard-title-container">
          <div class="dashboard-title">AutoRoles</div>
        </div>
        <div class="dashboard-contents">
          <div class="dashboard-inputs">
            <form-value
              title="Enable AutoRole"
              :type="FormTypeToggle"
              v-model="config.enabled"
              @update:modelValue="onValueUpdate"
              :validation="v$.enabled"
              >Automatically give users roles when they join your server.</form-value
            >

            <form-value title="Roles" :type="FormTypeBlank" :hideBorder="true">
              <table class="min-w-full border-spacing-2">
                <thead>
                  <tr>
                    <th scope="col" class="relative py-3.5 pr-3 text-left w-4/5">
                      Role
                    </th>
                    <th scope="col" class="relative py-3.5">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="divide-y divide-gray-200 dark:divide-secondary-light"
                >
                  <tr v-for="(role, index) in this.assigned_roles" :key="index">
                    <td class="pr-3 text-sm dark:text-gray-50" >
                      <font-awesome-icon
                        icon="circle"
                        :class="[
                          active ? 'text-white' : 'text-gray-400',
                          'inline w-4 h-4 mr-1 border-primary',
                        ]"
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
                      <Listbox
                        as="div"
                        @update:modelValue="onRoleSelected($event)"
                      >
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
                                  v-for="role in this.roles"
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
          </div>
          <unsaved-changes
            :unsavedChanges="unsavedChanges"
            :isChangeInProgress="isChangeInProgress"
            @save="saveConfig"
          ></unsaved-changes>
        </div>
      </div>
    </div>
  </div>
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
import EmbedBuilder from "../../../components/dashboard/EmbedBuilder.vue";
import FormValue from "../../../components/dashboard/FormValue.vue";
import {
  FormTypeBlank,
  FormTypeToggle,
  FormTypeRoleList,
} from "../../../components/dashboard/FormValueEnum";
import UnsavedChanges from "../../../components/dashboard/UnsavedChanges.vue";
import LoadingIcon from "../../../components/LoadingIcon.vue";
import dashboardAPI from "../../../api/dashboard";
import endpoints from "../../../api/endpoints";
import useVuelidate from "@vuelidate/core";

export default {
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
    let isDataFetched = ref(false);
    let isDataError = ref(false);
    let unsavedChanges = ref(false);
    let isChangeInProgress = ref(false);

    let assigned_roles = ref([]);
    let roles = ref([]);

    let config = ref({});

    const validation_rules = () => ({
      enabled: {},
      roles: {},
    });
    const v$ = useVuelidate(validation_rules, config);

    return {
      FormTypeBlank,
      FormTypeToggle,
      FormTypeRoleList,

      isDataFetched,
      isDataError,
      unsavedChanges,
      isChangeInProgress,

      assigned_roles,
      roles,

      config,
      v$,
    };
  },

  beforeRouteLeave() {
    return !this.confirmStayInDirtyForm();
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.beforeWindowUnload);
    window.removeEventListener("mouseup", this.mouseUpHandler);
  },

  mounted() {
    window.addEventListener("beforeunload", this.beforeWindowUnload);
    window.addEventListener("mouseup", this.mouseUpHandler);

    this.fetchConfig();
  },

  methods: {
    updateRoles() {
      let new_roles = [];
      let new_assigned = [];

      let guild_roles = this.$store.getters.getGuildRoles;

      this.config.roles.forEach((role_id) => {
        var role = guild_roles.find((element) => { return element.id == role_id })

        if (role !== undefined) {
          new_assigned.push(role);
        } else {
          new_assigned.push({
            id: role_id
          })
        }
      })

      guild_roles.forEach((role) => {
        var assigned_roles = this.config.roles.find((element) => { return element == role.id })

        if (assigned_roles === undefined) {
          new_roles.push(role)
        }
      })

      this.assigned_roles = new_assigned;
      this.roles = new_roles;
    },

    fetchConfig() {
      this.isDataFetched = false;
      this.isDataError = false;

      dashboardAPI.getConfig(
        endpoints.EndpointGuildAutorole(this.$store.getters.getSelectedGuildID),
        ({ config }) => {
          this.config = config;
          this.updateRoles();
          this.isDataFetched = true;
          this.isDataError = false;
        },
        (error) => {
          this.$store.dispatch("createToast", {
            title: error,
            icon: "xmark",
            class: "text-red-500 bg-red-100",
          });

          this.isDataFetched = true;
          this.isDataError = false;
        }
      );
    },

    async saveConfig() {
      const validForm = await this.v$.$validate();

      if (!validForm) {
        this.$store.dispatch("createToast", {
          title: "Please fix any errors before submitting",
          icon: "xmark",
          class: "text-red-500 bg-red-100",
        });

        let error = document.querySelector(".errors");
        if (error) {
          error.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center",
          });
        } else {
          console.warn(
            "No error to scroll into view. Is there a missing error message?"
          );
        }

        return;
      }

      this.isChangeInProgress = true;

      dashboardAPI.setConfig(
        endpoints.EndpointGuildAutorole(this.$store.getters.getSelectedGuildID),
        this.config,
        null,
        ({ config }) => {
          this.$store.dispatch("createToast", {
            title: "Changes saved.",
            icon: "check",
            class: "text-green-500 bg-green-100",
          });

          this.config = config;
          this.unsavedChanges = false;
          this.isChangeInProgress = false;
        },
        (error) => {
          this.$store.dispatch("createToast", {
            title: error,
            icon: "xmark",
            class: "text-red-500 bg-red-100",
          });

          this.isChangeInProgress = false;
        }
      );
    },

    onValueUpdate() {
      this.unsavedChanges = true;
    },

    confirmStayInDirtyForm() {
      return this.unsavedChanges && !this.confirmLeave();
    },

    confirmLeave() {
      return window.confirm(
        "You have unsaved changes! Are you sure you want to leave?"
      );
    },

    beforeWindowUnload(e) {
      if (this.confirmStayInDirtyForm()) {
        e.preventDefault();
        e.returnValue = "";
      }
    },

    getHexColor(number) {
      return "#" + (number >>> 0).toString(16).slice(-6);
    },

    onRoleSelected($event) {
      let role = this.$store.getters.getGuildRoleById($event);
      if (role !== undefined) {
        this.config.roles.push(role.id);
        this.updateRoles();
      }
    },

    onRemoveRole(role_id) {
      this.config.roles = this.config.roles.filter((role) => { return role !== role_id })
      this.updateRoles();
    }
  },
};
</script>
