import axios from 'axios'

class LLMApi {
  constructor(options = {}) {
    this.provider = options.provider || 'openai'
    this.apiKey = options.apiKey
    this.cache = {}
    
    // 初始化axios实例
    this.http = axios.create({
      baseURL: this.getBaseUrl(),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    })
  }
  
  getBaseUrl() {
    const providers = {
      openai: 'https://api.openai.com/v1',
      huggingface: 'https://api-inference.huggingface.co'
    }
    return providers[this.provider]
  }
  
  async ask(question) {
    const cacheKey = `qa:${question}`
    if (this.cache[cacheKey]) return this.cache[cacheKey]
    
    try {
      const response = await this.http.post('/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: question }],
        temperature: 0.7
      })
      
      const result = {
        answer: response.data.choices[0]?.message?.content || '无法获取答案'
      }
      
      this.cache[cacheKey] = result
      return result
    } catch (error) {
      console.error('问答请求失败:', error)
      throw error
    }
  }
  
  async summarize(content, options = {}) {
    const cacheKey = `summary:${content.substring(0, 50)}`
    if (this.cache[cacheKey]) return this.cache[cacheKey]
    
    try {
      const prompt = this.getSummaryPrompt(content, options)
      const response = await this.http.post('/completions', {
        model: 'text-davinci-003',
        prompt,
        max_tokens: options.length === 'short' ? 100 : 200,
        temperature: 0.5
      })
      
      const summary = response.data.choices[0]?.text?.trim() || '无法生成摘要'
      this.cache[cacheKey] = summary
      return summary
    } catch (error) {
      console.error('摘要生成失败:', error)
      throw error
    }
  }
  
  getSummaryPrompt(content, options) {
    const lengthInstruction = options.length === 'short' 
      ? '用1-2句话总结以下内容:' 
      : '用一段话总结以下内容:'
    
    return `${lengthInstruction}\n\n${content}\n\n摘要:`
  }
  
  async recommend(content, options = {}) {
    const cacheKey = `rec:${content.substring(0, 50)}`
    if (this.cache[cacheKey]) return this.cache[cacheKey]
    
    try {
      const prompt = `基于以下内容推荐${options.count || 3}个相关资源:\n\n${content}\n\n推荐:`
      const response = await this.http.post('/completions', {
        model: 'text-davinci-003',
        prompt,
        max_tokens: 300,
        temperature: 0.7
      })
      
      const recommendations = this.parseRecommendations(response.data.choices[0]?.text)
      this.cache[cacheKey] = recommendations
      return recommendations
    } catch (error) {
      console.error('推荐生成失败:', error)
      throw error
    }
  }
  
  parseRecommendations(text) {
    if (!text) return []
    
    // 简单解析推荐结果，实际应用中可能需要更复杂的解析逻辑
    return text.split('\n')
      .filter(line => line.trim())
      .map(line => ({
        title: line.replace(/^\d+\.\s*/, '').trim(),
        url: '#' // 实际应用中需要生成或查找真实URL
      }))
      .slice(0, 3)
  }
  
  async translate(content, targetLanguage) {
    const cacheKey = `trans:${targetLanguage}:${content.substring(0, 50)}`
    if (this.cache[cacheKey]) return this.cache[cacheKey]
    
    try {
      const prompt = `将以下内容翻译成${targetLanguage}:\n\n${content}`
      const response = await this.http.post('/completions', {
        model: 'text-davinci-003',
        prompt,
        max_tokens: content.length * 2,
        temperature: 0.3
      })
      
      const translated = response.data.choices[0]?.text?.trim() || content
      this.cache[cacheKey] = translated
      return translated
    } catch (error) {
      console.error('翻译失败:', error)
      throw error
    }
  }
}

// 导出单例实例
let instance = null
export default function getLLMApi(options) {
  if (!instance) {
    instance = new LLMApi(options)
    // 挂载到Vue原型上
    if (window.Vue) {
      window.Vue.prototype.$llmApi = instance
    }
  }
  return instance
}