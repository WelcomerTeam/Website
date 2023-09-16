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
          <div class="dashboard-title">Leaver</div>
        </div>
        <div class="dashboard-contents">
          <div class="dashboard-inputs">
            <form-value
              title="Enable Leaver"
              :type="FormTypeToggle"
              v-model="config.enabled"
              @update:modelValue="onValueUpdate"
              :validation="v$.enabled"
              >Send messages in a channel when users leave your server.</form-value
            >

            <form-value
              title="Leaver Channel"
              :type="FormTypeChannelListCategories"
              v-model="config.channel"
              @update:modelValue="onValueUpdate"
              :validation="v$.channel"
              :inlineSlot="true"
              :nullable="true"
              >This is the channel we will send leaver messages to.</form-value
            >
            
            <form-value
              title="Leaver Message"
              :type="FormTypeEmbed"
              v-model="config.message_json"
              @update:modelValue="onValueUpdate"
              :validation="v$.message_json"
              :inlineSlot="true"
              >This is the message that will be sent when users leave.
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
import { ref } from "vue";
import EmbedBuilder from "../../../components/dashboard/EmbedBuilder.vue";
import FormValue from "../../../components/dashboard/FormValue.vue";
import {
  FormTypeBlank,
  FormTypeToggle,
  FormTypeChannelListCategories,
  FormTypeEmbed,
} from "../../../components/dashboard/FormValueEnum";
import UnsavedChanges from "../../../components/dashboard/UnsavedChanges.vue";
import LoadingIcon from "../../../components/LoadingIcon.vue";
import dashboardAPI from "../../../api/dashboard";
import endpoints from "../../../api/endpoints";
import useVuelidate from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";

import { toHTML } from "../../../components/discord-markdown";

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

    const validation_rules = () => ({
      enabled: {},
      channel: {
        required: requiredIf(
          config.value.enabled
        )
      },
      message_json: {},
    })
    const v$ = useVuelidate(validation_rules, config);

    return {
      FormTypeBlank,
      FormTypeToggle,
      FormTypeChannelListCategories,
      FormTypeEmbed,

      isDataFetched,
      isDataError,
      unsavedChanges,
      isChangeInProgress,

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

    fetchConfig() {
      this.isDataFetched = false;
      this.isDataError = false;

      dashboardAPI.getConfig(
        endpoints.EndpointGuildLeaver(this.$store.getters.getSelectedGuildID),
        ({ config }) => {
          this.config = config;
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
        endpoints.EndpointGuildLeaver(this.$store.getters.getSelectedGuildID),
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
  },
};
</script>
