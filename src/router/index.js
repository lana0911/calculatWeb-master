import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Activity from '@/pages/Activity.vue'
import Document from '@/pages/Document.vue'
import LoveDoc from '@/pages/LoveDoc.vue'
import ThemesPicker from '@/components/Settings/ThemesPicker.vue'
const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
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
  {
    path: '/themespicker',
    name: 'ThemesPicker',
    component: ThemesPicker
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
