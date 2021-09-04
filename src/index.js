import Button from '../packages/button';

const components = [
  Button,
]

const install = function(Vue, opts = {}) {
  // 全局注册组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })

}

export default {
  version: '0.0.1',
  install
}