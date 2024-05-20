import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard/Dashboard.vue'
import CheckoutView from '@/views/CheckoutPage/CheckoutView.vue'
import Login from '@/views/Pages/Login.vue'
import PointOfSale from '@/views/PointOfSale/PointOfSale.vue'
import Stock from '@/views/stocks/Stock.vue'



const routes = [

  {
    path: '/',
    name: 'login page',
    component: Login,
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/stock',
    name: 'stock page',
    component: Stock,
    meta: {
      title: 'Existiencias'
    }
  },
  {
    path: '/dashboard',
    name: 'eCommerce',
    component: Dashboard,
    meta: {
      title: ' Dashboard'
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
      title: 'Checout'
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
  document.title = ` ${to.meta.title}`
  next()
})

export default router
