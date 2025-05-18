<template>
  <div class="llm-plugin">
    <!-- 自动摘要组件 -->
    <div v-if="showSummary" class="summary-section">
      <h3>{{ summaryTitle }}</h3>
      <p>{{ pageSummary }}</p>
    </div>
    
    <!-- 智能问答组件 -->
    <div class="qa-section">
      <input 
        v-model="question" 
        :placeholder="qaPlaceholder"
        @keyup.enter="submitQuestion"
      />
      <button @click="submitQuestion">{{ qaButtonText }}</button>
      <div v-if="answer" class="answer">{{ answer }}</div>
    </div>
    
    <!-- 智能推荐组件 -->
    <div v-if="showRecommendations" class="recommendations-section">
      <h3>{{ recommendationsTitle }}</h3>
      <ul>
        <li v-for="(item, index) in recommendations" :key="index">
          <a :href="item.url">{{ item.title }}</a>
        </li>
      </ul>
    </div>
    
    <!-- 实时翻译组件 -->
    <div class="translation-section">
      <select v-model="targetLanguage">
        <option 
          v-for="(lang, code) in supportedLanguages" 
          :value="code"
          :key="code"
        >
          {{ lang }}
        </option>
      </select>
      <button @click="translateContent">{{ translateButtonText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LLMPlugin',
  data() {
    return {
      // 自动摘要数据
      pageSummary: '',
      summaryTitle: '内容摘要',
      
      // 智能问答数据
      question: '',
      answer: '',
      qaPlaceholder: '有什么问题想问？',
      qaButtonText: '提问',
      
      // 智能推荐数据
      recommendations: [],
      recommendationsTitle: '相关内容推荐',
      
      // 实时翻译数据
      targetLanguage: 'en',
      supportedLanguages: {
        en: 'English',
        zh: '中文',
        ja: '日本語',
        ko: '한국어'
      },
      translateButtonText: '翻译'
    }
  },
  computed: {
    showSummary() {
      return this.$LLM_CONFIG?.features?.summary?.enabled
    },
    showRecommendations() {
      return this.$LLM_CONFIG?.features?.recommendations?.enabled
    }
  },
  methods: {
    async submitQuestion() {
      if (!this.question.trim()) return
      
      try {
        const response = await this.$llmApi.ask(this.question)
        this.answer = response.answer
      } catch (error) {
        console.error('问答请求失败:', error)
        this.answer = '抱歉，获取答案时出错。'
      }
    },
    
    async translateContent() {
      try {
        const content = document.querySelector('.content__default').innerText
        const translated = await this.$llmApi.translate(content, this.targetLanguage)
        // 实现翻译内容替换或显示逻辑
      } catch (error) {
        console.error('翻译请求失败:', error)
      }
    },
    
    async generateSummary() {
      if (!this.showSummary) return
      
      try {
        const content = document.querySelector('.content__default').innerText
        this.pageSummary = await this.$llmApi.summarize(content, {
          length: this.$LLM_CONFIG?.features?.summary?.length || 'medium'
        })
      } catch (error) {
        console.error('摘要生成失败:', error)
      }
    },
    
    async generateRecommendations() {
      if (!this.showRecommendations) return
      
      try {
        const content = document.querySelector('.content__default').innerText
        this.recommendations = await this.$llmApi.recommend(content, {
          count: this.$LLM_CONFIG?.features?.recommendations?.count || 3
        })
      } catch (error) {
        console.error('推荐生成失败:', error)
      }
    }
  },
  mounted() {
    this.generateSummary()
    this.generateRecommendations()
  }
}
</script>

<style scoped>
.llm-plugin {
  margin: 2rem 0;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.qa-section {
  margin: 1rem 0;
}

.qa-section input {
  padding: 0.5rem;
  margin-right: 0.5rem;
  width: 60%;
}

.answer {
  margin-top: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
}

.recommendations-section ul {
  padding-left: 1.5rem;
}

.translation-section {
  margin-top: 1rem;
}

.translation-section select {
  padding: 0.5rem;
  margin-right: 0.5rem;
}
</style>