import { createRouter, createWebHistory } from '@ionic/vue-router';
import BookList from '../views/BookList.vue';
const routes = [
  {
    path: '/',
    redirect: '/book'
  },
  {
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
  path: '/book/:id',
  name: 'BookDetail',
  component: () => import('@/views/BookDetail.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
