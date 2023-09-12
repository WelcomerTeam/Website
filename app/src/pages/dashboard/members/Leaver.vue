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
          <div class="dashboard-title">Rules</div>
        </div>
        <div class="dashboard-contents">
          <div class="dashboard-inputs">
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
} from "../../../components/dashboard/FormValueEnum";
import UnsavedChanges from "../../../components/dashboard/UnsavedChanges.vue";
import LoadingIcon from "../../../components/LoadingIcon.vue";
import dashboardAPI from "../../../api/dashboard";
import endpoints from "../../../api/endpoints";
import useVuelidate from "@vuelidate/core";

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
      toggle_enabled: {},
      channel: {
        required: requiredIf(
          config.value.toggle_enabled
        )
      },
      message_format: {},
    })
    const v$ = useVuelidate(validation_rules, config);

    return {
      FormTypeBlank,
      FormTypeToggle,

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
    setConfig(config) {
      this.config = config;

      this.rules = [];
      this.config.rules.forEach((rule) => {
        this.rules.push({
          value: rule,
          selected: false,
        });
      });
    },

    fetchConfig() {
      this.isDataFetched = false;
      this.isDataError = false;

      dashboardAPI.getConfig(
        endpoints.EndpointGuildLeaver(this.$store.getters.getSelectedGuildID),
        ({ config }) => {
          this.setConfig(config);
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

      this.config.rules = [];
      this.rules.forEach((rule) => {
        this.config.rules.push(rule.value);
      });

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

          this.setConfig(config);
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

    marked(input, embed) {
      if (input) {
        return toHTML(input, {
          embed: embed,
          discordCallback: {
            user: function (user) {
              return `Unknown user ${user.id}`;
            },
            channel: function (channel) {
              return `Unknown channel ${channel.id}`;
            },
            role: function (role) {
              return `Unknown role ${role.id}`;
            },
            everyone: function () {
              return `@everyone`;
            },
            here: function () {
              return `@here`;
            },
          },
          cssModuleNames: {
            "d-emoji": "emoji",
          },
        });
      }
      return "";
    },

    onSelectRule(index) {
      this.rules.forEach((rule) => {
        rule.selected = false;
      });

      this.rules[index].selected = true;
      this.rules[index].newValue = this.rules[index].value;
    },

    onSaveRule(index) {
      if (this.rules[index].newValue.trim() == "") {
        this.onDeleteRule(index);
      } else {
        this.rules[index].selected = false;

        if (
          this.rules[index].value !== this.rules[index].newValue
        ) {
          this.onValueUpdate();
        }

        this.rules[index].value = this.rules[index].newValue;
      }
    },

    onCancelRule(index) {
      this.rules[index].selected = false;
    },

    onDeleteRule(index) {
      this.rules.splice(index, 1);
      this.onValueUpdate();
    },

    onEditRuleKeyPress(event, index) {
      if (event.key === "Enter") {
        event.preventDefault();
        this.onSaveRule(index);
      }
    },

    onRuleKeyPress(event) {
      if (event.key === "Enter") {
        event.preventDefault();
        this.onRuleBlur();
      }
    },

    onRuleBlur() {
      this.rule = this.rule.trim();

      if (this.rule != "") {
        this.rules.push({
          value: this.rule,
          selected: false,
        });
        this.rule = "";
        this.onValueUpdate();
      }
    },

    mouseDownHandler(index) {
      this.selectedIndex = index;
    },

    mouseUpHandler() {
      this.selectedIndex = null;
    },

    mouseMoveHandler(index) {
      if (this.selectedIndex != null && this.selectedIndex != index) {
        this.moveRule(index, this.selectedIndex);
        this.selectedIndex = index;
      }
    },

    moveRule(index, newIndex) {
      if (index >= 0 && index <= this.rules.length-1) {
        var temp = this.rules[index];
        this.rules[index] = this.rules[newIndex];
        this.rules[newIndex] = temp;
        this.onValueUpdate();
      }
    },
  },
};
</script>
