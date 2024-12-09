import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import PostView from '@/views/PostView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView,
    },
    {
      path: '/posts/:postId',
      name: 'Post',
      component: PostView,
    },
    {
      path: '/users/:userId',
      name: 'User',
      component: UserView,
    },
  ],
})

export default router
