const path = require('path')

// 配置验证函数
function validateConfig(config) {
  if (!config.apiKey) {
    throw new Error('LLM插件配置错误: 必须提供apiKey')
  }
  
  if (config.typingSpeed && (typeof config.typingSpeed !== 'number' || config.typingSpeed <= 0)) {
    throw new Error('LLM插件配置错误: typingSpeed必须是大于0的数字')
  }
  
  return {
    ...config,
    endpoint: config.endpoint || 'https://api.openai.com/v1',
    model: config.model || 'gpt-3.5-turbo',
    maxTokens: config.maxTokens || 1000,
    typingSpeed: config.typingSpeed || 30
  }
}

module.exports = (options, ctx) => {
  try {
    const validatedConfig = validateConfig(options || {})
    
    return {
      name: 'vuepress-plugin-llm',
      clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),
      define: {
        LLM_CONFIG: validatedConfig
      },
    async ready() {
      // 初始化LLM插件
      if (process.client) {
        const { default: llmApi } = await import('./llmApi')
        llmApi.init(this.$LLM_CONFIG)
      }
    },
    
    // 自动摘要方法
    async generateSummary(content) {
      if (process.client) {
        const { default: llmApi } = await import('./llmApi')
        return await llmApi.summarize(content)
      }
    },
    
    // 智能问答方法
    async answerQuestion(question) {
      if (process.client) {
        const { default: llmApi } = await import('./llmApi')
        return await llmApi.ask(question)
      }
    },
    enhanceAppFiles: [
      {
        name: 'llm-api-setup',
        content: `import llmApi from './llmApi'
import LLMPlugin from './LLMPlugin.vue'

export default ({ Vue }) => {
  Vue.prototype.$llmApi = llmApi
  Vue.component('LLMPlugin', LLMPlugin)
  llmApi.init(Vue.prototype.$LLM_CONFIG)
}`
      }
    ]
  }
}