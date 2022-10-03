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
          <div class="dashboard-title">Welcomer</div>
        </div>
        <div class="dashboard-heading">Welcomer Text</div>
        <form-value
          title="Enable Welcome Text"
          :type="FormTypeToggle"
          v-model="config.text.enabled"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.text.enabled"
          id="welcome_text_enable"
        />

        <form-value
          title="Welcome Channel"
          :type="FormTypeChannelListCategories"
          v-model="config.text.channel"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.text.channel"
        />

        <form-value
          title="Welcome Text Message"
          :type="FormTypeEmbed"
          v-model="config.text.message_json"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.text.message_json"
        >
        </form-value>

        <div class="dashboard-heading">Welcomer Images</div>

        <form-value
          title="Enable Welcomer Images"
          :type="FormTypeToggle"
          v-model="config.images.enabled"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.enabled"
        />

        <form-value
          title="Image Message"
          :type="FormTypeTextArea"
          v-model="config.images.message"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.message"
        />

        <form-value
          title="Image Theme"
          :type="FormTypeDropdown"
          :values="imageThemeTypes"
          v-model="config.images.image_theme"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.image_theme"
        />

        <form-value
          title="Image Background"
          :type="FormTypeBackground"
          v-model="config.images.background"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.background"
        />

        <div class="pt-4" />

        <form-value
          title="Text Alignment"
          :type="FormTypeDropdown"
          :values="imageAlignmentTypes"
          v-model="config.images.image_alignment"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.image_alignment"
        ></form-value>

        <form-value
          title="Text Colour"
          :type="FormTypeColour"
          v-model="config.images.text_colour"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.text_colour"
        />
        <form-value
          title="Text Border Colour"
          :type="FormTypeColour"
          v-model="config.images.text_colour_border"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.text_colour_border"
        />

        <div class="pt-4" />

        <form-value
          title="Profile Border Type"
          :type="FormTypeDropdown"
          :values="profileBorderTypes"
          v-model="config.images.profile_border_type"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.profile_border_type"
        />

        <form-value
          title="Profile Border Colour"
          :type="FormTypeColour"
          v-model="config.images.profile_border_colour"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.profile_border_colour"
        />

        <div class="pt-4" />

        <form-value
          title="Enable Image Border"
          :type="FormTypeToggle"
          v-model="config.images.enable_border"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.enable_border"
        />
        <form-value
          title="Image Border Colour"
          :type="FormTypeColour"
          v-model="config.images.border_colour"
          :disabled="!config.images.enable_border"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.images.border_colour"
        />

        <div class="dashboard-heading">Welcomer DMs</div>

        <form-value
          title="Enable Welcome DMs"
          :type="FormTypeToggle"
          v-model="config.dms.enabled"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.dms.enabled"
        />
        <form-value
          title="Use Same Message As Welcome Text"
          v-model="config.dms.reuse_message"
          :type="FormTypeToggle"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.dms.reuse_message"
          ><div class="text-gray-600 dark:text-gray-400 text-sm mt-2">
            When enabled, this will send the same message as your welcome text
            message.
          </div></form-value
        >

        <form-value
          title="Include Welcome Image"
          :type="FormTypeToggle"
          v-model="config.dms.include_image"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.dms.include_image"
          ><div class="text-gray-600 dark:text-gray-400 text-sm mt-2">
            When enabled, this will include your welcomer image (if enabled).
            This will override your embed image URL.
          </div></form-value
        >

        <form-value
          title="Welcome DM Message"
          :type="FormTypeEmbed"
          :disabled="config.dms.reuse_message"
          v-model="config.dms.message_json"
          @update:modelValue="showUnsavedChanges"
          :validation="v$.dms.message_json"
        />

        <unsaved-changes
          :unsavedChanges="unsavedChanges"
          v-on:save="saveConfig"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import FormValue from "../../../components/dashboard/FormValue.vue";
import store from "../../../store/index";
import { XIcon } from "@heroicons/vue/outline";
import {
  FormTypeBlank,
  FormTypeToggle,
  FormTypeChannelList,
  FormTypeChannelListCategories,
  FormTypeRoleList,
  FormTypeMemberList,
  FormTypeEmojiList,
  FormTypeColour,
  FormTypeText,
  FormTypeNumber,
  FormTypeTextArea,
  FormTypeDropdown,
  FormTypeEmbed,
  FormTypeBackground,
} from "../../../components/dashboard/FormValueEnum";
import EmbedBuilder from "../../../components/dashboard/EmbedBuilder.vue";
import UnsavedChanges from "../../../components/dashboard/UnsavedChanges.vue";
import useVuelidate from "@vuelidate/core";
import dashboardAPI from "../../../api/dashboard";
import { requiredIf } from "@vuelidate/validators";
import LoadingIcon from "../../../components/LoadingIcon.vue";

var imageAlignmentTypes = [
  { key: "Left", value: "left" },
  { key: "Center", value: "center" },
  { key: "Right", value: "right" },
  { key: "Top Left", value: "topLeft" },
  { key: "Top Center", value: "topCenter" },
  { key: "Top Right", value: "topRight" },
  { key: "Bottom Left", value: "bottomLeft" },
  { key: "Bottom Center", value: "bottomCenter" },
  { key: "BottomRight", value: "bottomRight" },
];

var imageThemeTypes = [
  { key: "Default", value: "default" },
  { key: "Vertical", value: "vertical" },
  { key: "Card", value: "card" },
];

var profileBorderTypes = [
  { key: "Circular", value: "circular" },
  { key: "Rounded", value: "rounded" },
  { key: "Squared", value: "squared" },
  { key: "Hexagonal", value: "hexagonal" },
];

export default {
  components: {
    FormValue,
    EmbedBuilder,
    UnsavedChanges,
    XIcon,
    LoadingIcon,
  },
  setup() {
    let isDataFetched = ref(false);
    let isDataError = ref(false);

    let unsavedChanges = ref(false);

    let config = ref({});

    let rules = () => ({
      text: {
        enabled: {},
        channel: {
          required: requiredIf(
            config.value.images?.enabled || config.value.text?.enabled
          ),
        },
        message_json: {
          required: requiredIf(
            config.value.text?.enabled ||
              (config.value.dms?.reuse_message && config.value.dms?.enabled)
          ),
        },
      },
      images: {
        enabled: {},
        enable_border: {},
        border_colour: {},
        background: {},
        text_colour: {},
        text_border_colour: {},
        profile_border_colour: {},
        profile_border_type: {},
        image_alignment: {},
        image_theme: {},
        message: { required: requiredIf(config.value.images?.enabled) },
      },
      dms: {
        enabled: {},
        include_image: {},
        reuse_message: {},
        message_json: {
          required: requiredIf(
            config.value.dms?.enabled && !config.value.dms?.reuse_message
          ),
        },
      },
    });

    const v$ = useVuelidate(rules, config);

    return {
      FormTypeBlank,
      FormTypeToggle,
      FormTypeChannelList,
      FormTypeChannelListCategories,
      FormTypeRoleList,
      FormTypeMemberList,
      FormTypeEmojiList,
      FormTypeColour,
      FormTypeText,
      FormTypeNumber,
      FormTypeTextArea,
      FormTypeDropdown,
      FormTypeEmbed,
      FormTypeBackground,

      isDataFetched,
      isDataError,

      unsavedChanges,
      config,
      v$,

      store,

      profileBorderTypes,
      imageAlignmentTypes,
      imageThemeTypes,
    };
  },

  beforeRouteLeave() {
    return !this.confirmStayInDirtyForm();
  },

  created() {
    window.addEventListener("beforeunload", this.beforeWindowUnload);
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.beforeWindowUnload);
  },

  mounted() {
    this.fetchConfig();
  },

  methods: {
    fetchConfig() {
      this.isDataFetched = false;
      this.isDataError = false;

      dashboardAPI.getWelcomerConfig(
        store.getters.getSelectedGuildID,
        ({ config }) => {
          this.config = config;
          this.isDataFetched = true;
          this.isDataError = false;
        },
        (error) => {
          store.dispatch("createToast", {
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
        store.dispatch("createToast", {
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

      dashboardAPI.setWelcomerConfig(
        store.getters.getSelectedGuildID,
        this.config,
        ({ config }) => {
          store.dispatch("createToast", {
            title: "Changes saved.",
            icon: "check",
            class: "text-green-500 bg-green-100",
          });

          this.config = config;
          this.unsavedChanges = false;
        },
        (error) => {
          store.dispatch("createToast", {
            title: error,
            icon: "xmark",
            class: "text-red-500 bg-red-100",
          });
        }
      );
    },

    showUnsavedChanges() {
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
