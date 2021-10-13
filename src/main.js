/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-11 16:24:25
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/less/global.less'
import 'element-ui/lib/theme-chalk/index.css'
import Authorized from '@/components/Authorized'
import { Table, TableColumn, Pagination, Switch } from 'element-ui'
import AFTableColumn from 'af-table-column'

Vue.use(AFTableColumn)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Switch)
Vue.component('Authorized', Authorized)
Vue.use(Antd)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
