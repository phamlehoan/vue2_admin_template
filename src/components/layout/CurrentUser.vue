<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">Người dùng</div>
      </CHeaderNavLink>
    </template>
    <CDropdownItem> <CIcon name="cil-lock-locked" />Đăng xuất</CDropdownItem>
  </CDropdown>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CurrentUser extends Vue {}
</script>
