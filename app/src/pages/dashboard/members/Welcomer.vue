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
        <div class="dashboard-contents">
          <div class="dashboard-inputs">
            <div class="dashboard-heading">Welcomer Text</div>
            <form-value
              title="Enable Welcomer Text"
              :type="FormTypeToggle"
              v-model="config.text.enabled"
              @update:modelValue="onValueUpdate"
              :validation="v$.text.enabled"
              >Welcome users when they join with a custom message. This will
              wait until a user has completed borderwall or rule screening, if
              enabled.</form-value
            >

            <form-value
              title="Welcome Channel"
              :type="FormTypeChannelListCategories"
              v-model="config.text.channel"
              @update:modelValue="onValueUpdate"
              :validation="v$.text.channel"
              :inlineSlot="true"
              :nullable="true"
              >This is the channel we will send welcome messages to.</form-value
            >

            <form-value
              title="Welcome Text Message"
              :type="FormTypeEmbed"
              v-model="config.text.message_json"
              @update:modelValue="onValueUpdate"
              :validation="v$.text.message_json"
              :inlineSlot="true"
              >This is the message users will receive when joining.
              <a
                target="_blank"
                href="/formatting"
                class="text-primary hover:text-primary-dark"
                >Click here</a
              >
              to view all the formatting tags you can use for custom text.
            </form-value>
          </div>
          <div class="dashboard-inputs">
            <div class="dashboard-heading">Welcomer Images</div>
            <form-value
              title="Enable Welcomer Images"
              :type="FormTypeToggle"
              v-model="config.images.enabled"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.enabled"
              >Welcome users when they join with a custom image. This will wait
              until a user has completed borderwall or rule screening, if
              enabled.</form-value
            >

            <form-value
              title="Image Theme"
              :type="FormTypeDropdown"
              :values="imageThemeTypes"
              v-model="config.images.image_theme"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.image_theme"
              :inlineSlot="true"
              >This is the theme that will be used for your welcome image.
              <a
                target="_blank"
                href="/backgrounds"
                class="text-primary hover:text-primary-dark"
                >Click here</a
              >
              to view all the themes you can use.</form-value
            >

            <form-value
              title="Welcomer Image Background"
              :type="FormTypeBackground"
              v-model="config.images.background"
              @update:modelValue="onValueUpdate"
              @update:files="onFilesUpdate"
              :validation="v$.images.background"
              :files="files"
              :inlineSlot="true"
              :customImages="config.custom?.custom_ids"
              >This is the background that will be used in your welcome
              image.</form-value
            >
          </div>

          <div class="dashboard-inputs">
            <form-value
              title="Welcomer Image Message"
              :type="FormTypeTextArea"
              v-model="config.images.message"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.message"
              :inlineSlot="true"
              >This is the custom message that will be included in the welcome
              image.
              <a
                target="_blank"
                href="/formatting"
                class="text-primary hover:text-primary-dark"
                >Click here</a
              >
              to view all the formatting tags you can use for custom
              text.</form-value
            >

            <form-value
              title="Image Text Alignment"
              :type="FormTypeDropdown"
              :values="imageAlignmentTypes"
              v-model="config.images.image_alignment"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.image_alignment"
              :inlineSlot="true"
              >This is the alignment of text in your welcome image.</form-value
            >

            <form-value
              title="Image Text Colour"
              :type="FormTypeColour"
              v-model="config.images.text_colour"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.text_colour"
              :inlineSlot="true"
              >This is the colour of the text in your welcome image.</form-value
            >
            <form-value
              title="Image Text Border Colour"
              :type="FormTypeColour"
              v-model="config.images.text_colour_border"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.text_colour_border"
              :inlineSlot="true"
              >This is the colour of the text border in your welcome
              image.</form-value
            >
          </div>

          <div class="dashboard-inputs">
            <form-value
              title="Image Profile Border Type"
              :type="FormTypeDropdown"
              :values="profileBorderTypes"
              v-model="config.images.profile_border_type"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.profile_border_type"
              :inlineSlot="true"
              >This is the way the profile border shows on your welcome
              image.</form-value
            >

            <form-value
              title="Image Profile Border Colour"
              :type="FormTypeColour"
              v-model="config.images.profile_border_colour"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.profile_border_colour"
              :inlineSlot="true"
              >This is the colour of the border around profile borders in your
              welcome image.</form-value
            >
          </div>

          <div class="dashboard-inputs">
            <form-value
              title="Enable Image Border"
              :type="FormTypeToggle"
              v-model="config.images.enable_border"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.enable_border"
              >This allows you to add a border around your welcome
              images.</form-value
            >

            <form-value
              title="Image Border Colour"
              :type="FormTypeColour"
              v-model="config.images.border_colour"
              :disabled="!config.images.enable_border"
              @update:modelValue="onValueUpdate"
              :validation="v$.images.border_colour"
              :inlineSlot="true"
              >This is the colour of the border around your welcome images, if
              enabled.</form-value
            >
          </div>

          <div class="dashboard-inputs">
            <div class="dashboard-heading">Welcomer DMs</div>
            <form-value
              title="Enable Welcome DMs"
              :type="FormTypeToggle"
              v-model="config.dms.enabled"
              @update:modelValue="onValueUpdate"
              :validation="v$.dms.enabled"
              >Welcome users when they join with a custom message, in their
              direct messages. This will wait until a user has completed
              borderwall or rule screening, if enabled.</form-value
            >

            <form-value
              title="Include Welcome Image"
              :type="FormTypeToggle"
              v-model="config.dms.include_image"
              @update:modelValue="onValueUpdate"
              :validation="v$.dms.include_image"
              :inlineSlot="true"
              >This will include the welcomer image to your welcomer direct
              message, if enabled.</form-value
            >

            <form-value
              title="Use Same Message As Welcome Text"
              v-model="config.dms.reuse_message"
              :type="FormTypeToggle"
              @update:modelValue="onValueUpdate"
              :validation="v$.dms.reuse_message"
              :inlineSlot="true"
              >This will copy the same message as your welcomer text message,
              instead of using a separate message.</form-value
            >

            <form-value
              title="Welcome DM Message"
              :type="FormTypeEmbed"
              :disabled="config.dms.reuse_message"
              v-model="config.dms.message_json"
              @update:modelValue="onValueUpdate"
              :validation="v$.dms.message_json"
              :inlineSlot="true"
              :hideBorder="true"
              >This is the message users will receive in direct messages when
              joining.
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
            v-on:save="saveConfig"
          ></unsaved-changes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { XIcon } from "@heroicons/vue/outline";
import {
  FormTypeToggle,
  FormTypeChannelListCategories,
  FormTypeColour,
  FormTypeText,
  FormTypeTextArea,
  FormTypeDropdown,
  FormTypeEmbed,
  FormTypeBackground,
} from "../../../components/dashboard/FormValueEnum";
import EmbedBuilder from "../../../components/dashboard/EmbedBuilder.vue";
import FormValue from "../../../components/dashboard/FormValue.vue";
import UnsavedChanges from "../../../components/dashboard/UnsavedChanges.vue";
import LoadingIcon from "../../../components/LoadingIcon.vue";
import dashboardAPI from "../../../api/dashboard";
import endpoints from "../../../api/endpoints";
import useVuelidate from "@vuelidate/core";
import { requiredIf } from "@vuelidate/validators";

var imageAlignmentTypes = [
  { key: "Left", value: "left" },
  { key: "Center", value: "center" },
  { key: "Right", value: "right" },
  { key: "Top Left", value: "topLeft" },
  { key: "Top Center", value: "topCenter" },
  { key: "Top Right", value: "topRight" },
  { key: "Bottom Left", value: "bottomLeft" },
  { key: "Bottom Center", value: "bottomCenter" },
  { key: "Bottom Right", value: "bottomRight" },
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
    let isChangeInProgress = ref(false);

    let config = ref({});
    let files = ref([]);

    let validation_rules = () => ({
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
        message: {},
        // message: { required: requiredIf(config.value.images?.enabled) },
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
    const v$ = useVuelidate(validation_rules, config);

    return {
      FormTypeToggle,
      FormTypeChannelListCategories,
      FormTypeColour,
      FormTypeText,
      FormTypeTextArea,
      FormTypeDropdown,
      FormTypeEmbed,
      FormTypeBackground,

      isDataFetched,
      isDataError,
      unsavedChanges,
      isChangeInProgress,

      config,
      files,
      v$,

      profileBorderTypes,
      imageAlignmentTypes,
      imageThemeTypes,
    };
  },

  beforeRouteLeave() {
    return !this.confirmStayInDirtyForm();
  },
  
  beforeDestroy() {
    window.removeEventListener("beforeunload", this.beforeWindowUnload);
  },
  
  mounted() {
    window.addEventListener("beforeunload", this.beforeWindowUnload);

    this.fetchConfig();
  },

  methods: {
    fetchConfig() {
      this.isDataFetched = false;
      this.isDataError = false;

      dashboardAPI.getConfig(
        endpoints.EndpointGuildWelcomer(this.$store.getters.getSelectedGuildID),
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
        endpoints.EndpointGuildWelcomer(this.$store.getters.getSelectedGuildID),
        this.config,
        this.files,
        ({ config }) => {
          this.$store.dispatch("createToast", {
            title: "Changes saved.",
            icon: "check",
            class: "text-green-500 bg-green-100",
          });

          this.config = config;
          this.files = [];
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

    onFilesUpdate(event) {
      this.files = event;
      this.onValueUpdate();
    },
  },
};
</script>
