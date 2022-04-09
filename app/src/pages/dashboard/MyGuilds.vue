<template>
  <div class="dashboard-container">
    <div class="dashboard-title-container">
      <div class="dashboard-title">Dashboard example</div>
    </div>
    <div class="dashboard-content">Hello</div>
  </div>
</template>

<script>
import { mdiHelpRhombus } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";

export default {
  components: {
    SvgIcon,
    mdiHelpRhombus,
  },
  setup() {
    return {};
  },
};
</script>
