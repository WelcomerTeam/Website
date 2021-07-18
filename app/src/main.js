import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import VueLazyload from "vue3-lazyload";

import "./index.scss";

createApp(App)
  .use(VueLazyload)
  .use(store)
  .use(router)
  .mount("#app");
