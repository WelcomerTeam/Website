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
          <div class="dashboard-title">Borderwall</div>
        </div>
        <div class="dashboard-contents">
          <div class="dashboard-inputs">
            <form-value
              title="Enable Borderwall Protection"
              :type="FormTypeToggle"
              v-model="config.enabled"
              @update:modelValue="onValueUpdate"
              :validation="v$.enabled"
              >Borderwall protects your server from automated accounts by presenting them with a captcha for them to complete before they can continue using your server. This will not stop a user from messaging certain channels by default, you must use roles to permit messaging in the channels you want to protect.</form-value
            >

            <form-value
              title="Verify Message"
              :type="FormTypeEmbed"
              v-model="config.message_verify"
              @update:modelValue="onValueUpdate"
              :validation="v$.message_verify"
              :inlineSlot="true"
              :disabled="!config.enabled"
              >This is the messages users will receive if they have not verified.
              <a
                target="_blank"
                href="/formatting"
                class="text-primary hover:text-primary-dark"
                >Click here</a
              >
              to view all the formatting tags you can use for custom text.
            </form-value>
            
            <form-value
              title="Verified Message"
              :type="FormTypeEmbed"
              v-model="config.message_verified"
              @update:modelValue="onValueUpdate"
              :validation="v$.message_verified"
              :inlineSlot="true"
              :disabled="!config.enabled"
              >This is the message users will receive when completing verification.
              <a
                target="_blank"
                href="/formatting"
                class="text-primary hover:text-primary-dark"
                >Click here</a
              >
              to view all the formatting tags you can use for custom text.
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
import { computed, ref } from "vue";

import useVuelidate from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";

import {
  FormTypeBlank,
  FormTypeEmbed,
  FormTypeToggle,
} from "@/components/dashboard/FormValueEnum";

import EmbedBuilder from "@/components/dashboard/EmbedBuilder.vue";
import FormValue from "@/components/dashboard/FormValue.vue";
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
  },
  setup() {
    let isDataFetched = ref(false);
    let isDataError = ref(false);
    let unsavedChanges = ref(false);
    let isChangeInProgress = ref(false);

    let config = ref({});

    const validation_rules = computed(() => {
      const validation_rules = {
        enabled: {},
        message_verify: {
          required: requiredIf(
            config.value.enabled,
          ),
        },
        message_verified: {},
        roles_on_join: {},
        roles_on_verify: {},
      };

      return validation_rules;
    });
    
    const v$ = useVuelidate(validation_rules, config, { $rewardEarly: true });

    return {
      FormTypeBlank,
      FormTypeEmbed,
      FormTypeToggle,

      isDataFetched,
      isDataError,
      unsavedChanges,
      isChangeInProgress,

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
        endpoints.EndpointGuildBorderwall(this.$store.getters.getSelectedGuildID),
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
        endpoints.EndpointGuildBorderwall(this.$store.getters.getSelectedGuildID),
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
  },
};
</script>
