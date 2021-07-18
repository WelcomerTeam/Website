<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Dashboard example</div>
    </div>
    <div class="dashboard-content">
      <form-value title="FormTypeToggle" v-model="config.enabled" :type="FormTypeToggle" />


    </div>

    <pre>{{ config }}</pre>
  </div>
</template>

<script>
import { ref } from "vue";
import FormValue from "../../components/dashboard/FormValue.vue";

import { FormTypeToggle } from "../../components/dashboard/FormValueEnum";

var config = ref({
  enabled: true
})

export default {
    components: {
        FormValue,
    },
    setup() {
        return {
            config,

            FormTypeToggle
        }
    }
}
</script>