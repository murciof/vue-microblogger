<script setup lang="ts">
import { PhHouse } from '@phosphor-icons/vue'
</script>

<template>
  <div class="sidebar-menu">
    <RouterLink :to="'/'" class="menu-link"><PhHouse :size="28" />Home</RouterLink>
  </div>
</template>

<style scoped>
.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.menu-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 24px;
  font-weight: 700;
  color: white;
}

.menu-link:hover {
  background-color: transparent;
}
</style>
