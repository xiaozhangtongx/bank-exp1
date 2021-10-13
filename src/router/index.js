/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-11 16:24:25
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import BasicLayout from '@/layout/BasicLayout'
import NotFound from '../views/error/404.vue'
import { check, isLogin } from '../utils/auth'

Vue.use(VueRouter)

const routes = [
  // 路由重定向
  {
    path: '/',
    redirect: '/login',
  },
  // 用户登录
  {
    hideInMenu: true,
    path: '/login',
    name: 'User',
    component: () => import('../views/user/User.vue'),
  },
  // 系统主界面
  {
    path: '/main',
    name: 'Main',
    redirect: '/main/home',
    meta: { authority: ['user', 'admin'] },
    component: BasicLayout,
    children: [
      // 系统首页
      {
        path: '/main/home',
        meta: { icon: 'home', title: '系统首页' },
        name: 'Home',
        component: () => import('../views/main/Home.vue'),
      },
      // 用户管理页面
      {
        path: '/main/users',
        meta: { icon: 'team', title: '储户管理', authority: ['admin'] },
        name: 'Users',
        component: () => import('../views/main/users/Users.vue'),
      },
      // 存取款管理
      {
        path: '/main/cards',
        meta: { icon: 'bank', title: '存取款管理' },
        name: 'Cards',
        component: () => import('../views/main/cards/Cards.vue'),
      },
      // 账号管理
      {
        path: '/main/accounts',
        meta: { icon: 'idcard', title: '账号管理', authority: ['admin'] },
        name: 'Accounts',
        component: () => import('../views/main/accounts/Accounts.vue'),
      },
      // 个人中心
      {
        path: '/main/my',
        meta: { icon: 'user', title: '个人中心' },
        name: 'My',
        component: () => import('../views/main/my/My.vue'),
      },
    ],
  },
  // 404页面
  {
    path: '*',
    hideInMenu: true,
    component: NotFound,
  },
]

const router = new VueRouter({
  routes,
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.path != from.path) {
    NProgress.start()
  }
  NProgress.done()
  next()
})
export default router
