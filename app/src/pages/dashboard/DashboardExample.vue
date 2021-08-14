<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Dashboard example</div>
    </div>
    <div class="dashboard-content">
      <form-value
        title="FormTypeToggle"
        v-model="config.enabled"
        :type="FormTypeToggle"
      />

      <form-value
        title="FormTypeChannelList"
        v-model="config.channel"
        :type="FormTypeChannelList"
      />
      <form-value
        title="FormTypeChannelListCategories"
        v-model="config.channelTwo"
        :type="FormTypeChannelListCategories"
      />
      <form-value
        title="FormTypeRoleList"
        v-model="config.role"
        :type="FormTypeRoleList"
      />
      <form-value
        title="FormTypeMemberList"
        v-model="config.member"
        :type="FormTypeMemberList"
      />
      <form-value
        title="FormTypeEmojiList"
        v-model="config.emoji"
        :type="FormTypeEmojiList"
      />
      <form-value
        title="FormTypeColour"
        v-model="config.colour"
        :type="FormTypeColour"
      />
      <form-value
        title="FormTypeText"
        v-model="config.message"
        :type="FormTypeText"
      />
      <form-value
        title="FormTypeNumber"
        v-model="config.count"
        :type="FormTypeNumber"
      />
      <form-value
        title="FormTypeTextArea"
        v-model="config.rules"
        :type="FormTypeTextArea"
      />
    </div>

    <pre class="mt-12">{{ config }}</pre>
  </div>
</template>

<script>
import { ref } from "vue";
import FormValue from "../../components/dashboard/FormValue.vue";
import store from "../../store/index";

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
} from "../../components/dashboard/FormValueEnum";

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
