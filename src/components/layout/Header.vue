<template>
  <CHeader fixed with-subheader light class="justify-content-between">
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo" />
    </CHeaderBrand>
    <CHeaderNav class="mr-4">
      <CurrentUser />
    </CHeaderNav>
    <CSubheader class="px-3 justify-content-start">
      <CBreadcrumbRouter class="border-0 mb-0" array />
    </CSubheader>
  </CHeader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CurrentUser from "./CurrentUser.vue";

@Component({
  components: {
    CurrentUser,
  },
})
export default class Header extends Vue {}
</script>
