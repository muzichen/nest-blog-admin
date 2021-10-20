import { createRouter, createWebHashHistory } from 'vue-router'
import LoginComponent from '@/components/LoginComponent.vue'
import LoginedComponent from '@/components/LoginedComponent.vue'
import UsersManagement from '@/components/UsersManagement.vue'
import PostsManagement from '@/components/PostsManagement.vue'

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
        name: 'usersManage',
        path: 'users',
        component: UsersManagement
      },
      {
        name: 'postsManage',
        path: 'posts',
        component: PostsManagement
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router