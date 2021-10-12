/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-11 16:24:25
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    component: () => import('../views/user/User.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
