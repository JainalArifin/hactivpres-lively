import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import MainContent from '@/components/MainContent'
import Article from '@/components/Article'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import Utama from '@/components/Utama'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: Utama
        },
        {
          path: '/blog',
          component: Blog,
          children: [
            {
              path: '',
              component: MainContent
            },
            {
              path: ':id',
              name: 'articleSumery',
              component: Article,
              props: true
            }
          ]
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/login',
          component: Login
        },
        {
          path: '/admin',
          component: Admin
        }
      ]
    }
  ]
})
