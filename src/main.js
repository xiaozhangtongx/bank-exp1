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
import axios from 'axios'
import * as echarts from 'echarts'
import 'ant-design-vue/dist/antd.css'
import './assets/less/global.less'
import 'element-ui/lib/theme-chalk/index.css'
import Authorized from '@/components/Authorized'
import {
  Table,
  TableColumn,
  Pagination,
  Switch,
  Dialog,
  Input,
  Form,
  FormItem,
  Radio,
  DatePicker,
} from 'element-ui'
import AFTableColumn from 'af-table-column'

Vue.use(AFTableColumn)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Switch)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(DatePicker)
Vue.component('Authorized', Authorized)
Vue.use(Antd)
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:9002'
Vue.prototype.$http = axios // $http这个是自定义的
// Vue.prototype.$echarts = echarts // 引入echarts

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
