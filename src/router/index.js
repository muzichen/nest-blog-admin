import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '@/components/LoginComponent.vue'
import LoginedComponent from '@/components/LoginedComponent.vue'
import UsersManagement from '@/components/UsersManagement.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent,
  },
  {
    path: '/admin',
    component: LoginedComponent,
    children: [
      {
        path: 'users',
        component: UsersManagement
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router