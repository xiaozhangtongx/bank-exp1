/*
 * @Description:路由
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-11 16:24:25
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import findLast from 'lodash/findLast'
import BasicLayout from '@/layout/BasicLayout'
import NotFound from '../views/error/404.vue'
import { notification } from 'ant-design-vue'
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
    meta: { authority: ['user', 'admin'], index: 1 },
    component: BasicLayout,
    children: [
      // 系统首页
      {
        path: '/main/home',
        meta: { icon: 'home', title: '系统首页', index: 1 },
        name: 'Home',
        component: () => import('../views/main/Home.vue'),
      },
      // 用户管理页面
      {
        path: '/main/users',
        meta: {
          icon: 'team',
          title: '储户管理',
          authority: ['admin'],
          index: 2,
        },
        name: 'Users',
        component: () => import('../views/main/users/Users.vue'),
      },
      // 存取款管理
      {
        path: '/main/cards',
        meta: {
          icon: 'bank',
          title: '存取款管理',
          authority: ['admin'],
          index: 3,
        },
        name: 'Cards',
        component: () => import('../views/main/cards/Cards.vue'),
      },
      // 用户存取款
      {
        path: '/main/money',
        meta: {
          icon: 'pay-circle',
          title: '存取款',
          authority: ['user'],
          index: 3,
        },
        name: 'money',
        component: () => import('../views/main/cards/Money.vue'),
      },
      // 账号管理
      {
        path: '/main/accounts',
        meta: {
          icon: 'idcard',
          title: '账号管理',
          authority: ['admin'],
          index: 4,
        },
        name: 'Accounts',
        component: () => import('../views/main/accounts/Accounts.vue'),
      },
      // 个人中心
      {
        path: '/main/my',
        meta: {
          icon: 'user',
          title: '个人中心',
          index: 5,
          authority: ['user'],
        },
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
  // 401页面
  {
    path: '/401',
    name: '401',
    hideInMenu: true,
    component: () => import('../views/error/401.vue'),
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
  if (to.path == '/login') return next()
  const store = window.sessionStorage.getItem('store')
  var storeobj = JSON.parse(store)
  if (storeobj.user == null) {
    notification.error({
      message: '401',
      description: '你没有权限访问，请登录后再访问。',
    })
    next('/login')
  }
  const record = findLast(to.matched, (record) => record.meta.authority)
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== '/login') {
      next({
        path: '/login',
      })
    } else if (to.path !== '/401') {
      notification.error({
        message: '401',
        description: '你没有权限访问，请联系管理员咨询。',
      })
      next({
        path: '/401',
      })
    }
    NProgress.done()
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})
export default router
