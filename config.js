module.exports = {
  // 插件功能开关
  features: {
    summary: {
      enabled: true,
      length: 'medium', // short | medium | long
      position: 'sidebar' // sidebar | bottom
    },
    qa: {
      enabled: true,
      trigger: 'click' // click | auto
    },
    recommendations: {
      enabled: true,
      count: 3,
      source: 'internal' // internal | external
    },
    translation: {
      enabled: true,
      defaultLanguage: 'en'
    }
  },
  
  // LLM提供商配置
  provider: 'openai', // openai | huggingface
  apiKey: '', // 请在此处填写您的API密钥
  
  // 缓存配置
  cache: {
    enabled: true,
    ttl: 3600 // 缓存有效期(秒)
  },
  
  // UI配置
  ui: {
    theme: 'light', // light | dark
    position: 'right' // left | right
  }
}