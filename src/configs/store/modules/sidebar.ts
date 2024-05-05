import { SidebarState } from "./helpers";

const state: SidebarState = {
  sidebarShow: "responsive",
  sidebarMinimize: false,
};

const mutations = {
  toggleSidebarDesktop(state: SidebarState) {
    const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarOpened ? false : "responsive";
  },
  toggleSidebarMobile(state: SidebarState) {
    const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
    state.sidebarShow = sidebarClosed ? true : "responsive";
  },
  set(state: SidebarState, [variable, value]: any[]) {
    state[variable as keyof SidebarState] = value;
  },
};

export default {
  state,
  mutations,
};
