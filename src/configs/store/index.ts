import Vue from "vue";
import Vuex from "vuex";

import sidebarStore from "./modules/sidebar";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { sidebarStore },
});
