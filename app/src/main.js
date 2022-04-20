import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import VueLazyload from "vue3-lazyload";

import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
library.add(faYoutube);

import {
  faClose,
  faPlus,
  faHeart,
  faPenToSquare,
  faSquare,
  faHashtag,
  faAt,
  faCircle,
  faUser,
  faImage,
  faCog,
  faFaceLaugh,
  faUserShield,
  faBoxesPacking,
  faMicrophoneLines,
  faChartLine,
  faDoorOpen,
  faHeartPulse,
  faLifeRing,
  faPersonCircleQuestion,
  faImages,
  faTachographDigital,
  faPaintRoller,
  faWrench,
  faUserPlus,
  faListOl,
  faDoorClosed,
  faUserCheck,
  faUserMinus,
  faListCheck,
  faUserClock,
  faPhotoFilm,
  faPlugCircleBolt,
  faPlugCirclePlus,
  faCircleQuestion,
  faShield,
  faCheck,
  faTriangleExclamation,
  faInfo,
  faBook,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faClose,
  faPlus,
  faHeart,
  faPenToSquare,
  faSquare,
  faHashtag,
  faAt,
  faCircle,
  faUser,
  faFaceLaugh,
  faImage,
  faFaceLaugh,
  faHeart,
  faCog,
  faImage,
  faFaceLaugh,
  faUserShield,
  faBoxesPacking,
  faMicrophoneLines,
  faChartLine,
  faDoorOpen,
  faHeartPulse,
  faLifeRing,
  faPersonCircleQuestion,
  faImages,
  faTachographDigital,
  faPaintRoller,
  faWrench,
  faUserPlus,
  faListOl,
  faDoorClosed,
  faUserCheck,
  faUserMinus,
  faListCheck,
  faUserClock,
  faPhotoFilm,
  faPlugCircleBolt,
  faPlugCirclePlus,
  faCircleQuestion,
  faShield,
  faCheck,
  faTriangleExclamation,
  faInfo,
  faBook,
  faArrowsRotate
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueLazyload)
  .use(store)
  .use(router)
  .mount("#app");
