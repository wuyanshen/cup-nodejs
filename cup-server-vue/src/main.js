import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import '@/styles/element-variables.scss'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import '@/styles/cup.scss'

import App from './App'
import store from './store'
import router from './router'

import '@/icons' // icon
import '@/permission' // permission control
// 自定义表格工具扩展
import RightToolbar from '@/components/RightToolbar'
import Pagination from '@/components/Pagination'
import { resetForm, handleDateRange, getTreeCheckedKeys, setTreeNodeCheck } from '@/utils/cup'
import { getDicts } from '@/api/dict/item'
import { getConfig } from '@/api/config'
import JsonViewer from 'vue-json-viewer'
import VueSocketIO from 'vue-socket.io'

// 全局方法挂载
Vue.prototype.resetForm = resetForm
Vue.prototype.handleDateRange = handleDateRange
Vue.prototype.getTreeCheckedKeys = getTreeCheckedKeys
Vue.prototype.setTreeNodeCheck = setTreeNodeCheck
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfig = getConfig

Vue.prototype.msgSuccess = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'success' })
}

Vue.prototype.msgError = function(msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}

Vue.prototype.msgInfo = function(msg) {
  this.$message.info(msg)
}

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// 全局组件挂载
Vue.component('RightToolbar', RightToolbar)
Vue.component('Pagination', Pagination)
Vue.component('JsonViewer', JsonViewer)

// socket
Vue.use(
  new VueSocketIO({
    debug: false,
    connection: 'http://127.0.0.1:9999/admin'
  })
)

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
