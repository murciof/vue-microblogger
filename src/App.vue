<script setup lang="ts">
import { RouterView } from 'vue-router'
import LeftSidebar from './components/shared/ui/LeftSidebar/LeftSidebar.vue'
import RightSidebar from './components/shared/ui/RightSidebar/RightSidebar.vue'
</script>

<template>
  <main id="app">
    <LeftSidebar />
    <div class="container-main">
      <RouterView />
    </div>
    <RightSidebar />
  </main>
</template>

<style scoped>
#app {
  display: flex;
  height: 100vh;
  width: 100vw;
  padding: 4rem 18rem 2rem 18rem;
  gap: 4rem;
  justify-content: center;
}
.container-main {
  height: 100%;
  width: 100%;
  overflow: auto;
  flex: 1;
}
</style>
