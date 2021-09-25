import Vue from 'vue'
import Notice from './src/notice.vue'

const NoticeConstructor = Vue.extend(Notice) // 子类

function Notification(options) {
  const opts = options || {}
  console.log(opts);
  const NoticeInstance = new NoticeConstructor({data: opts}).$mount() // 实例
  console.log(NoticeInstance);
  document.body.appendChild(NoticeInstance.$el);
  return NoticeInstance
}

export default Notification