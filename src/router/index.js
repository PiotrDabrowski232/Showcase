import { createRouter, createWebHistory } from 'vue-router'
import CvView from '../views/CvView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/Cv',
    name: 'Cv',
    component: CvView
  },
  {
    path: '/',
    name: 'Contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
