import axios from 'axios'

export default {
  // 初始化配置
  init(config) {
    this.apiKey = config.apiKey
    this.endpoint = config.endpoint || 'https://api.openai.com/v1'
    this.model = config.model || 'gpt-3.5-turbo'
    this.maxTokens = config.maxTokens || 1000
  },
  
  // 智能问答方法
  async ask(question) {
    try {
      const response = await axios.post(
        `${this.endpoint}/chat/completions`,
        {
          model: this.model,
          messages: [
            {
              role: 'user',
              content: question
            }
          ],
          max_tokens: this.maxTokens
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          }
        }
      )
      
      return {
        answer: response.data.choices[0].message.content
      }
    } catch (error) {
      console.error('LLM API调用失败:', error)
      throw error
    }
  },
  
  // 自动摘要方法
  async summarize(content) {
    try {
      const prompt = `请为以下内容生成简洁的摘要:\n\n${content}`
      
      const response = await axios.post(
        `${this.endpoint}/chat/completions`,
        {
          model: this.model,
          messages: [
            {
              role: 'user',
              content: prompt
            }
          ],
          max_tokens: this.maxTokens
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.apiKey}`
          }
        }
      )
      
      return {
        summary: response.data.choices[0].message.content
      }
    } catch (error) {
      console.error('LLM API调用失败:', error)
      throw error
    }
  }
}