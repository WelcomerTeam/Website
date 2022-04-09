<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Welcomer</div>
    </div>
    <div class="dashboard-content">
      <div class="font-bold uppercase py-4 mt-8 border-b">
        <a>Welcomer Text</a>
      </div>
      <form-value title="Enable Welcomer Text" :type="FormTypeToggle"
        ><div class="text-gray-600 text-sm mt-2">
          This is the description for the form value.
          <a href="#" class="text-primary">Find out more</a>.
        </div></form-value
      >
      <form-value
        title="Welcomer Channel"
        :type="FormTypeChannelListCategories"
      />
      <form-value title="Welcomer Text Message" :type="FormTypeBlank">
        <embed-builder v-model="embedData" />
      </form-value>

      <div class="my-8" />

      <form-value title="Enable Welcomer DMs" :type="FormTypeToggle"
        ><div>Hello</div></form-value
      >
      <form-value title="Include Welcomer Image" :type="FormTypeToggle"
        ><div>Hello</div></form-value
      >
      <form-value
        title="Use same formatting as Welcomer Text"
        :type="FormTypeToggle"
      />
      <form-value title="Welcomer DM Message" :type="FormTypeTextArea"
        >TODO: Embed builder</form-value
      >

      <div class="font-bold uppercase py-4 mt-8 border-b">
        <a>Welcomer Images</a>
      </div>

      <form-value title="Enable Welcomer Images" :type="FormTypeToggle"
        ><div>Hello</div></form-value
      >
      <form-value title="Enable Image Border" :type="FormTypeToggle"
        ><div>Hello</div></form-value
      >
      <form-value title="Image Border Colour" :type="FormTypeColour"
        ><div>Hello</div></form-value
      >

      <div class="font-bold uppercase py-4 mt-8 border-b">
        <a>Welcomer DMs</a>
      </div>

      <form-value title="Image Background" :type="FormTypeText"
        ><div>Hello</div></form-value
      >
      <form-value title="Text Colour" :type="FormTypeColour"
        ><div>Hello</div></form-value
      >
      <form-value title="Text Border Colour" :type="FormTypeColour"
        ><div>Hello</div></form-value
      >
      <form-value title="Profile Border Colour" :type="FormTypeColour"
        ><div>Hello</div></form-value
      >
      <form-value
        title="Profile Border Type"
        :type="FormTypeDropdown"
        :values="profileBorderTypes"
        :nullable="true"
        >TODO: Dropdown</form-value
      >

      <div class="my-8" />

      <form-value title="Image Alignment" :type="FormTypeText"
        >TODO: Dropdown</form-value
      >
      <form-value title="Image Theme" :type="FormTypeText"
        >TODO: Dropdown</form-value
      >

      <form-value title="Image Message" :type="FormTypeTextArea" />
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
} from "../../../components/dashboard/FormValueEnum";
import EmbedBuilder from "../../../components/dashboard/EmbedBuilder.vue";

var profileBorderTypes = ["a", "b", "c"];

export default {
  components: {
    FormValue,
    EmbedBuilder,
  },
  setup() {
    let embedData = ref("");

    return {
      embedData,

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

      store,
      profileBorderTypes,
    };
  },
};
</script>
