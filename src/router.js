import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetails from './components/CardDetails.vue'
import LoginPage from './components/LoginPage.vue'
import SettingsPage from './components/SettingsPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/employees/:id', name: 'CardDetails', component: CardDetails },
  { path: '/login', name: 'LoginPage', component: LoginPage },
  { path: '/Settings', name: 'SettingsPage', component: SettingsPage },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
