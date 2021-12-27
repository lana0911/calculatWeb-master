import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Activity from '@/pages/Activity.vue'
import Document from '@/pages/Document.vue'
import LoveDoc from '@/pages/LoveDoc.vue'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/document',
    name: 'Document',
    component: Document
  },
  {
    path: '/lovedoc',
    name: 'LoveDoc',
    component: LoveDoc
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
