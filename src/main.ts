import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import i18n from "./configs/plugins/i18n";
import router from "./configs/router";
import store from "./configs/store";

import "./configs/plugins";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
