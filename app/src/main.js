import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import VueLazyload from "vue3-lazyload";

import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueLazyload)
  .use(store)
  .use(router)
  .mount("#app");
