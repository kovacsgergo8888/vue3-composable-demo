import { createRouter, createWebHashHistory } from "vue-router"
import Increase from '../components/Increase.vue'
import Decrease from '../components/Decrease.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/increase',
      name: 'increase',
      component: Increase
    },
    {
      path: '/decrease',
      name: 'decrease',
      component: Decrease
    }
  ]
})

export default router