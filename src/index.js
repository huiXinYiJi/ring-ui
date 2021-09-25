import Button from '../packages/button';
import Notice from '../packages/notice'

const components = [
  Button,
  Notice
]

const install = function(Vue, opts = {}) {
  // 全局注册组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$notice = Notice
}

export default {
  version: '0.0.1',
  install
}