<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none">
      <div class="generalAffaris">
        <div class="ch">Đường sắt</div>
      </div>
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
  </CSidebar>
</template>

<script>
import nav from "@/configs/router/sidebarMenu";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  nav,
  computed: {
    show() {
      return this.$store.state.sidebarStore.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarStore.sidebarMinimize;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/layout/sidebar.scss";
</style>
