import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import MainContent from '@/components/MainContent'
import Article from '@/components/Article'

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
        }
      ]
    }
  ]
})
