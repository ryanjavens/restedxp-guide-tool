import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Guide from '../views/Guide.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-guide',
    name: 'New Guide',
    component: Guide
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
