<script setup lang="ts">
import PostContainer from '@/components/shared/ui/PostContainer/PostContainer.vue'
</script>

<template>
  <div class="container-post-parent">
    <div class="post-title">Post</div>
    <PostContainer :id="+$route.params.postId" />
  </div>
</template>

<style scoped>
.container-post-parent {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.post-title {
  font-size: 24px;
  font-weight: 700;
}
</style>
