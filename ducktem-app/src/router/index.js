import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', redirect: '/index', component: () => import('../components/Layout.vue'), children: [
        { path: 'index', component: () => import('../components/Index.vue') },
        { path: 'detail', component: () => import('../components/Detail.vue') },
        { path: 'list', component: () => import('../components/List.vue') },
        { path: 'list-search', component: () => import('../components/ListSearch.vue') },
        { path: 'login', component: () => import('../components/Login.vue') },
        { path: 'sign-up', component: () => import('../components/SignUp.vue') },
        { path: 'sign-up-ending', component: () => import('../components/SignUpEnding.vue') },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
