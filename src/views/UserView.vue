<script setup lang="ts">
import { USERS } from '@/constants/users'
</script>

<template>
  <div class="container-user-parent">
    <div class="user-title">User</div>
    <div class="user-container">
      <div class="user-circle">
        {{ USERS.find((user) => user.id === +$route.params.userId)?.name[0] ?? '' }}
      </div>
      <div class="user-name">
        {{ USERS.find((user) => user.id === +$route.params.userId)?.name ?? '' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-user-parent {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.user-title {
  font-size: 24px;
  font-weight: 700;
}
.user-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.user-circle {
  display: flex;
  background-color: cornflowerblue;
  color: white;
  width: 64px;
  height: 64px;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: x-large;
}
.user-name {
  font-size: larger;
  font-weight: 700;
}
</style>
