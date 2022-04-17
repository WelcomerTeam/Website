<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Welcomer</div>
    </div>
    <div class="dashboard-content">
      <div class="font-bold uppercase py-4 mt-8 border-b mb-4">
        <a>Welcomer Text</a>
      </div>
      <form-value
        title="Enable Welcomer Text"
        :type="FormTypeToggle"
        v-model="welcomerConfig.text.enabled"
        ><div class="text-gray-600 text-sm mt-2">
          This is the description for the form value.
          <a href="#" class="text-primary">Find out more</a>.
        </div></form-value
      >
      <form-value
        title="Welcomer Channel"
        :type="FormTypeChannelListCategories"
        v-model="welcomerConfig.text.channel"
      />

      <form-value
        title="Welcomer Text Message"
        :type="FormTypeEmbed"
        v-model="welcomerConfig.text.message_json"
      >
      </form-value>

      <div class="font-bold uppercase py-4 mt-8 border-b mb-4">
        <a>Welcomer DMs</a>
      </div>

      <form-value
        title="Enable Welcomer DMs"
        :type="FormTypeToggle"
        v-model="welcomerConfig.dms.enabled"
      ></form-value>
      <form-value
        title="Use same formatting as Welcomer Text"
        v-model="welcomerConfig.dms.reuse_message"
        :type="FormTypeToggle"
      />
      <form-value
        title="Welcomer DM Message"
        :type="FormTypeEmbed"
        :disabled="welcomerConfig.dms.reuse_message"
        v-model="welcomerConfig.dms.message_json"
      />
      <form-value
        title="Include Welcomer Image"
        :type="FormTypeToggle"
        v-model="welcomerConfig.dms.include_image"
      ></form-value>

      <div class="font-bold uppercase py-4 mt-8 border-b mb-4">
        <a>Welcomer Images</a>
      </div>

      <form-value
        title="Enable Welcomer Images"
        :type="FormTypeToggle"
        v-model="welcomerConfig.images.enabled"
      ></form-value>

      <form-value
        title="Image Background"
        :type="FormTypeText"
        v-model="welcomerConfig.images.background"
      ></form-value>

      <form-value
        title="Image Message"
        :type="FormTypeTextArea"
        v-model="welcomerConfig.images.message"
      />

      <form-value
        title="Enable Image Border"
        :type="FormTypeToggle"
        v-model="welcomerConfig.images.enable_border"
      ></form-value>
      <form-value
        title="Image Border Colour"
        :type="FormTypeColour"
        v-model="welcomerConfig.images.border_colour"
        :disabled="!welcomerConfig.images.enable_border"
      ></form-value>

      <form-value
        title="Text Colour"
        :type="FormTypeColour"
        v-model="welcomerConfig.images.text_colour"
      ></form-value>
      <form-value
        title="Text Border Colour"
        :type="FormTypeColour"
        v-model="welcomerConfig.images.text_border_colour"
      ></form-value>
      <form-value
        title="Profile Border Colour"
        :type="FormTypeColour"
        v-model="welcomerConfig.images.profile_border_colour"
      ></form-value>
      <form-value
        title="Profile Border Type"
        :type="FormTypeDropdown"
        :values="profileBorderTypes"
        :nullable="true"
        v-model="welcomerConfig.images.profile_border_type"
      ></form-value>

      <form-value
        title="Image Alignment"
        :type="FormTypeText"
        v-model="welcomerConfig.images.image_alignment"
        >TODO: Dropdown</form-value
      >
      <form-value
        title="Image Theme"
        :type="FormTypeText"
        v-model="welcomerConfig.images.image_theme"
        >TODO: Dropdown</form-value
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import FormValue from "../../../components/dashboard/FormValue.vue";
import store from "../../../store/index";

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

var profileBorderTypes = ["Rounded", "Squared", "Hexagonal", "Circular"];

export default {
  components: {
    FormValue,
    EmbedBuilder,
  },
  setup() {
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
      welcomerConfig,

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

      store,
      profileBorderTypes,
    };
  },
};
</script>
