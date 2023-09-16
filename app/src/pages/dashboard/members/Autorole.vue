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
              >Automatically give users roles when they join your
              server.</form-value
            >

            <role-table
              :roles="this.assigned_roles"
              :selectableRoles="this.roles"
              @removeRole="onRemoveRole"
              @selectRole="onSelectRole"
            ></role-table>
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
import { computed, ref } from "vue";

import useVuelidate from "@vuelidate/core";

import {
  FormTypeBlank,
  FormTypeToggle,
  FormTypeRoleList,
} from "@/components/dashboard/FormValueEnum";

import EmbedBuilder from "@/components/dashboard/EmbedBuilder.vue";
import FormValue from "@/components/dashboard/FormValue.vue";
import RoleTable from "@/components/dashboard/RoleTable.vue";
import UnsavedChanges from "@/components/dashboard/UnsavedChanges.vue";
import LoadingIcon from "@/components/LoadingIcon.vue";

import endpoints from "@/api/endpoints";
import dashboardAPI from "@/api/dashboard";

import {
  getErrorToast,
  getSuccessToast,
  getValidationToast,
  navigateToErrors,
} from "@/utilities";

export default {
  components: {
    FormValue,
    EmbedBuilder,
    UnsavedChanges,
    LoadingIcon,
    RoleTable,
  },
  setup() {
    let isDataFetched = ref(false);
    let isDataError = ref(false);
    let unsavedChanges = ref(false);
    let isChangeInProgress = ref(false);

    let assigned_roles = ref([]);
    let roles = ref([]);

    let config = ref({});

    const validation_rules = computed(() => {
      const validation_rules = {
        enabled: {},
        roles: {},
      };

      return validation_rules;
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
  mounted() {
    this.fetchConfig();
  },

  methods: {
    fetchConfig() {
      this.isDataFetched = false;
      this.isDataError = false;

      dashboardAPI.getConfig(
        endpoints.EndpointGuildAutorole(this.$store.getters.getSelectedGuildID),
        ({ config }) => {
          this.config = config;
          this.isDataFetched = true;
          this.isDataError = false;
        },
        (error) => {
          this.$store.dispatch("createToast", getErrorToast(error));

          this.isDataFetched = true;
          this.isDataError = true;
        }
      );
    },

    async saveConfig() {
      const validForm = await this.v$.$validate();

      if (!validForm) {
        this.$store.dispatch("createToast", getValidationToast());
        navigateToErrors();

        return;
      }

      this.isChangeInProgress = true;

      dashboardAPI.setConfig(
        endpoints.EndpointGuildAutorole(this.$store.getters.getSelectedGuildID),
        this.config,
        null,
        ({ config }) => {
          this.$store.dispatch("createToast", getSuccessToast());

          this.config = config;
          this.unsavedChanges = false;
          this.isChangeInProgress = false;
        },
        (error) => {
          this.$store.dispatch("createToast", getErrorToast(error));

          this.isChangeInProgress = false;
        }
      );
    },

    onValueUpdate() {
      this.unsavedChanges = true;
    },

    updateRoles() {
      let new_roles = [];
      let new_assigned = [];

      let guild_roles = this.$store.getters.getAssignableGuildRoles;

      this.config.roles.forEach((roleID) => {
        var role = guild_roles.find((element) => {
          return element.id == roleID;
        });

        if (role !== undefined) {
          new_assigned.push(role);
        }
      });

      guild_roles.forEach((role) => {
        var assigned_roles = this.config.roles.find((element) => {
          return element == role.id;
        });

        if (assigned_roles === undefined) {
          new_roles.push(role);
        }
      });

      this.assigned_roles = new_assigned;
      this.roles = new_roles;
    },

    onSelectRole(roleID) {
      let role = this.$store.getters.getGuildRoleById(roleID);
      if (role !== undefined) {
        this.config.roles.push(role.id);
        this.config.roles.sort(
          (a, b) =>
            this.$store.getters.getGuildRoleById(a)?.position -
            this.$store.getters.getGuildRoleById(b)?.position
        );
        this.updateRoles();
        this.onValueUpdate();
      }
    },

    onRemoveRole(roleID) {
      this.config.roles = this.config.roles.filter((role) => role !== roleID);
      this.updateRoles();
      this.onValueUpdate();
    },
  },
};
</script>
