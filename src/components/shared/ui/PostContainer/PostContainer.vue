<script setup lang="ts">
import { POSTS } from '@/constants/posts'
import { USERS } from '@/constants/users'

const props = defineProps<{ id: number; showLink?: boolean }>()
const post = POSTS.find((post) => post.id === props.id) ?? { id: 0, userId: 0, text: '' }
const postUserName = USERS.find((user) => user.id === post.userId)?.name ?? ''
</script>

<template>
  <div class="container-post">
    <RouterLink :to="'/users/' + post.userId" class="container-post-user">
      <div class="post-user-circle">{{ postUserName[0] }}</div>
      <div>{{ postUserName }}</div>
    </RouterLink>
    <div>{{ post.text }}</div>
    <div :hidden="!showLink">
      <RouterLink :to="'/posts/' + props.id" class="post-link">Link</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container-post {
  display: flex;
  border: 1px solid gray;
  border-radius: 12px;
  flex-direction: column;
  padding: 1rem;
  gap: 0.5rem;
}

.post-user-circle {
  display: flex;
  background-color: cornflowerblue;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: large;
}

.container-post-user {
  display: flex;
  gap: 0.5rem;
  align-items: center;

  background: transparent;
  color: white;
}

.post-link {
  background-color: cornflowerblue;
  color: white;
  font-weight: 700;
  font-size: 14px;
  width: 5rem;
  border: 0;
  padding: 0.25rem 1rem;
  border-radius: 9999px;
  transition: all 0.25s;
  text-align: center;
}

.post-link:hover {
  background-color: white;
  color: cornflowerblue;
  transition: all 0.25s;
}
</style>
