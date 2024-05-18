import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard/Dashboard.vue'
import CheckoutView from '@/views/CheckoutPage/CheckoutView.vue'
import Login from '@/views/Pages/Login.vue'
import PointOfSale from '@/views/PointOfSale/PointOfSale.vue'



const routes = [

  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      title: 'Login page'
    }
  },
  {
    path: '/dashboard',
    name: 'eCommerce',
    component: Dashboard,
    meta: {
      title: 'eCommerce Dashboard'
    }
  },
    {
    path: '/pos',
    name: 'point of sale',
    component:PointOfSale,
    meta: {
      title: 'pos'
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutView,
    meta: {
      title: 'eCommerce Dashboard'
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = `Vue.js ${to.meta.title} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
  next()
})

export default router
