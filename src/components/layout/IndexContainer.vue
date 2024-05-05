<template>
  <div class="c-app">
    <Sidebar />
    <CWrapper>
      <Header />
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid class="c-innerMain">
            <transition name="fade" mode="out-in">
              <router-view :key="$route.path"></router-view>
            </transition>
          </CContainer>
        </main>
      </div>
    </CWrapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sidebar from "./Sidebar.vue";
import Header from "./Header.vue";

@Component({
  components: {
    Sidebar,
    Header,
  },
})
export default class IndexContainer extends Vue {}
</script>

<style scoped>
.c-innerMain {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.c-main {
  background-color: #edf0f4;
}
</style>
