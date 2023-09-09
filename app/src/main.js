import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import store from "./store";

import VueLazyload from "vue3-lazyload";

import "./index.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faYoutube, faUnsplash } from "@fortawesome/free-brands-svg-icons";
library.add(faYoutube, faUnsplash);

import {
  faArrowsRotate,
  faAt,
  faBook,
  faBoxesPacking,
  faChartLine,
  faCheck,
  faChevronUp,
  faChevronDown,
  faCircle,
  faCircleQuestion,
  faClose,
  faCog,
  faDoorClosed,
  faDoorOpen,
  faDownLong,
  faFaceLaugh,
  faFileImage,
  faGripVertical,
  faHashtag,
  faHeart,
  faHeartPulse,
  faImage,
  faImages,
  faInfo,
  faLifeRing,
  faListCheck,
  faListOl,
  faMicrophoneLines,
  faMoon,
  faPaintRoller,
  faPenToSquare,
  faPersonCircleQuestion,
  faPhotoFilm,
  faPlugCircleBolt,
  faPlugCirclePlus,
  faPlus,
  faShield,
  faSquare,
  faSun,
  faTachographDigital,
  faToolbox,
  faTriangleExclamation,
  faTurnDown,
  faTurnUp,
  faUpLong,
  faUser,
  faUserCheck,
  faUserClock,
  faUserGroup,
  faUserMinus,
  faUserPlus,
  faUserShield,
  faWrench
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowsRotate,
  faAt,
  faBook,
  faBoxesPacking,
  faChartLine,
  faCheck,
  faClose,
  faChevronUp,
  faChevronDown,
  faCircle,
  faCircleQuestion,
  faCog,
  faDoorClosed,
  faDoorOpen,
  faDownLong,
  faFaceLaugh,
  faFileImage,
  faGripVertical,
  faHashtag,
  faHeart,
  faHeartPulse,
  faImage,
  faImages,
  faInfo,
  faLifeRing,
  faListCheck,
  faListOl,
  faMicrophoneLines,
  faMoon,
  faPaintRoller,
  faPenToSquare,
  faPersonCircleQuestion,
  faPhotoFilm,
  faPlugCircleBolt,
  faPlugCirclePlus,
  faPlus,
  faShield,
  faSquare,
  faSun,
  faTachographDigital,
  faToolbox,
  faTriangleExclamation,
  faTurnDown,
  faTurnUp,
  faUpLong,
  faUser,
  faUserCheck,
  faUserClock,
  faUserGroup,
  faUserMinus,
  faUserPlus,
  faUserShield,
  faWrench
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueLazyload)
  .use(store)
  .use(router)
  .mount("#app");
