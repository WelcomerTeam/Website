<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Welcomer</div>
    </div>
    <div class="font-bold uppercase py-4 mt-8 border-b mb-4">
      <a>Welcomer Text</a>
    </div>
    <form-value
      title="Enable Welcomer Text"
      :type="FormTypeToggle"
      v-model="welcomerConfig.text.enabled"
      @update:modelValue="showUnsavedChanges"
      ><div class="text-gray-600 text-sm mt-2">
        This is the description for the form value.
        <a href="#" class="text-primary">Find out more</a>.
      </div></form-value
    >
    <form-value
      title="Welcomer Channel"
      :type="FormTypeChannelListCategories"
      v-model="welcomerConfig.text.channel"
      @update:modelValue="showUnsavedChanges"
    />

    <form-value
      title="Welcomer Text Message"
      :type="FormTypeEmbed"
      v-model="welcomerConfig.text.message_json"
      @update:modelValue="showUnsavedChanges"
    >
    </form-value>

    <div class="font-bold uppercase py-4 mt-8 border-b mb-4">
      <a>Welcomer DMs</a>
    </div>

    <form-value
      title="Enable Welcomer DMs"
      :type="FormTypeToggle"
      v-model="welcomerConfig.dms.enabled"
      @update:modelValue="showUnsavedChanges"
    />
    <form-value
      title="Use same formatting as Welcomer Text"
      v-model="welcomerConfig.dms.reuse_message"
      :type="FormTypeToggle"
      @update:modelValue="showUnsavedChanges"
    />
    <form-value
      title="Welcomer DM Message"
      :type="FormTypeEmbed"
      :disabled="welcomerConfig.dms.reuse_message"
      v-model="welcomerConfig.dms.message_json"
      @update:modelValue="showUnsavedChanges"
    />
    <form-value
      title="Include Welcomer Image"
      :type="FormTypeToggle"
      v-model="welcomerConfig.dms.include_image"
      @update:modelValue="showUnsavedChanges"
    />

    <div class="font-bold uppercase py-4 mt-8 border-b mb-4">
      <a>Welcomer Images</a>
    </div>

    <form-value
      title="Enable Welcomer Images"
      :type="FormTypeToggle"
      v-model="welcomerConfig.images.enabled"
      @update:modelValue="showUnsavedChanges"
    />

    <form-value
      title="Image Message"
      :type="FormTypeTextArea"
      v-model="welcomerConfig.images.message"
      @update:modelValue="showUnsavedChanges"
    />

    <form-value
      title="Image Background"
      :type="FormTypeText"
      v-model="welcomerConfig.images.background"
      @update:modelValue="showUnsavedChanges"
    />

    <form-value
      title="Enable Image Border"
      :type="FormTypeToggle"
      v-model="welcomerConfig.images.enable_border"
      @update:modelValue="showUnsavedChanges"
    />
    <form-value
      title="Image Border Colour"
      :type="FormTypeColour"
      v-model="welcomerConfig.images.border_colour"
      :disabled="!welcomerConfig.images.enable_border"
      @update:modelValue="showUnsavedChanges"
    />

    <form-value
      title="Text Colour"
      :type="FormTypeColour"
      v-model="welcomerConfig.images.text_colour"
      @update:modelValue="showUnsavedChanges"
    />
    <form-value
      title="Text Border Colour"
      :type="FormTypeColour"
      v-model="welcomerConfig.images.text_border_colour"
      @update:modelValue="showUnsavedChanges"
    />
    <form-value
      title="Profile Border Colour"
      :type="FormTypeColour"
      v-model="welcomerConfig.images.profile_border_colour"
      @update:modelValue="showUnsavedChanges"
    />
    <form-value
      title="Profile Border Type"
      :type="FormTypeDropdown"
      :values="profileBorderTypes"
      :nullable="true"
      v-model="welcomerConfig.images.profile_border_type"
      @update:modelValue="showUnsavedChanges"
    />

    <form-value
      title="Image Alignment"
      :type="FormTypeText"
      v-model="welcomerConfig.images.image_alignment"
      @update:modelValue="showUnsavedChanges"
      >TODO: Dropdown</form-value
    >
    <form-value
      title="Image Theme"
      :type="FormTypeText"
      v-model="welcomerConfig.images.image_theme"
      @update:modelValue="showUnsavedChanges"
      >TODO: Dropdown</form-value
    >

    <unsaved-changes :unsavedChanges="unsavedChanges" v-on:save="saveConfig" />
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
} from "../../../components/dashboard/FormValueEnum";
import EmbedBuilder from "../../../components/dashboard/EmbedBuilder.vue";
import UnsavedChanges from "../../../components/dashboard/UnsavedChanges.vue";

var profileBorderTypes = ["Rounded", "Squared", "Hexagonal", "Circular"];

export default {
  components: {
    FormValue,
    EmbedBuilder,
    UnsavedChanges,
    XIcon,
  },
  setup() {
    let unsavedChanges = ref(false);
    let welcomerConfig = ref({
      text: {
        enabled: false,
        channel: null,
        message_json: "",
      },
      images: {
        enabled: true,
        enable_border: true,
        border_colour: 0,
        background: "default",
        text_colour: 0,
        text_border_colour: 0,
        profile_border_colour: 0,
        profile_border_type: "Rounded",
        image_alignment: "Center",
        image_theme: "Legacy",
        message: "",
      },
      dms: {
        enabled: false,
        include_image: false,
        reuse_message: false,
        message_json: "",
      },
    });

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

      unsavedChanges,
      welcomerConfig,
      store,

      profileBorderTypes,
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

  methods: {
    confirmLeave() {
      return window.confirm(
        "You have unsaved changes! Are you sure you want to leave?"
      );
    },

    confirmStayInDirtyForm() {
      return this.unsavedChanges && !this.confirmLeave();
    },

    beforeWindowUnload(e) {
      if (this.confirmStayInDirtyForm()) {
        e.preventDefault();
        e.returnValue = "";
      }
    },

    saveConfig() {
      let toastID = Date.now();
      store.dispatch("createToast", {
        title: "Changes saved.",
        icon: "check",
        class: "text-green-500 bg-green-100",
        id: toastID,
      });
      setTimeout(() => {
        store.dispatch("removeToast", toastID);
      }, 5000);

      this.unsavedChanges = false;
    },
    resetConfig() {},
    showUnsavedChanges() {
      this.unsavedChanges = true;
    },
  },
};
</script>
