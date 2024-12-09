<script setup lang="ts">
import { POST_MAXIMUM_LENGTH } from '@/constants/posts'
import { ref, watch } from 'vue'

const text = ref('')
let textRemaining = POST_MAXIMUM_LENGTH

watch(text, (value) => {
  textRemaining = POST_MAXIMUM_LENGTH - value.length
})
</script>

<template>
  <div class="container-editor">
    {{ textRemaining }}/{{ POST_MAXIMUM_LENGTH }}
    <textarea class="editor" v-model="text" placeholder="Create a post" :maxlength="140"></textarea>
    <button class="submit-button">Submit</button>
  </div>
</template>

<style scoped>
.container-editor {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.submit-button {
  background-color: cornflowerblue;
  color: white;
  font-weight: 700;
  font-size: 14px;
  width: 5rem;
  border: 0;
  padding: 0.5rem;
  border-radius: 9999px;
  transition: all 0.25s;
  text-align: center;
  align-self: end;
}

.submit-button:hover {
  background-color: white;
  color: cornflowerblue;
  transition: all 0.25s;
}

.editor {
  background-color: transparent;
  color: white;
  resize: none;
  border: 1px solid gray;
  border-radius: 12px;
  height: 4rem;
  font-size: 1rem;
  padding: 0.5rem;
}
</style>
