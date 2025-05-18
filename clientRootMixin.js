import LLMPlugin from './components/LLMPlugin.vue'

export default ({
  Vue, // VuePress正在使用的Vue构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // 注册全局组件
  Vue.component('LLMPlugin', LLMPlugin)
  
  // 添加全局mixin
  Vue.mixin({
    mounted() {
      // 初始化LLM插件逻辑
    }
  })
}