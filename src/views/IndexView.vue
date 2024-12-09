<script setup lang="ts">
import { POSTS } from '@/constants/posts'
import PostContainer from '@/components/shared/ui/PostContainer/PostContainer.vue'
import PostEditor from '@/components/shared/ui/PostEditor/PostEditor.vue'
</script>

<template>
  <div class="container-index">
    <div class="home-title">Home</div>
    <PostEditor />
    <div class="posts-list">
      <PostContainer
        v-for="(post, index) in POSTS"
        v-bind:key="index"
        :id="post.id"
        :show-link="true"
      />
    </div>
  </div>
</template>

<style scoped>
.container-index {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1.5rem;
}
.posts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.home-title {
  font-size: 24px;
  font-weight: 700;
}
</style>
