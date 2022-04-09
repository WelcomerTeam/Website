<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Dashboard example</div>
    </div>
    <div class="dashboard-content">
      <form-value
        title="Form Type Toggle"
        v-model="config.enabled"
        :type="FormTypeToggle"
        :nullable="true"
      />

      <form-value
        title="Form Type Channel List"
        v-model="config.channel"
        :type="FormTypeChannelList"
        :nullable="true"
      />
      <form-value
        title="Form Type Channel List Categories"
        v-model="config.channelTwo"
        :type="FormTypeChannelListCategories"
        :nullable="true"
      />
      <form-value
        title="Form Type Role List"
        v-model="config.role"
        :type="FormTypeRoleList"
        :nullable="true"
      />
      <form-value
        title="Form Type Member List"
        v-model="config.member"
        :type="FormTypeMemberList"
        :nullable="true"
      />
      <form-value
        title="Form Type Emoji List"
        v-model="config.emoji"
        :type="FormTypeEmojiList"
        :nullable="true"
      />
      <form-value
        title="Form Type Colour"
        v-model="config.colour"
        :type="FormTypeColour"
        :nullable="true"
      />
      <form-value
        title="Form Type Text"
        v-model="config.message"
        :type="FormTypeText"
        :nullable="true"
      />
      <form-value
        title="Form Type Number"
        v-model="config.count"
        :type="FormTypeNumber"
        :nullable="true"
      />
      <form-value
        title="Form Type TextArea"
        v-model="config.rules"
        :type="FormTypeTextArea"
        :nullable="true"
      />
    </div>

    <pre class="mt-12">{{ config }}</pre>
  </div>
</template>

<script>
import { ref } from "vue";
import FormValue from "../../../components/dashboard/FormValue.vue";
import store from "../../../store/index";

import {
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
} from "../../../components/dashboard/FormValueEnum";

var config = ref({
  enabled: true,
  channel: "485801351352418304",
  channelTwo: null,
  role: null,
  member: "865142611434143755",
  emoji: null,
  colour: 0,
  message: "",
  count: 0,
  rules: "",
});

export default {
  components: {
    FormValue,
  },
  setup() {
    return {
      config,

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

      store,
    };
  },
};
</script>
