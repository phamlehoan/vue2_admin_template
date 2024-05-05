import { dom, library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";

library.add(fas, far);
dom.watch();

Vue.component("font-awesome-icon", FontAwesomeIcon);
