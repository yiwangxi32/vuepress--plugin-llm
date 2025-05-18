<template>
  <div class="llm-plugin">
    <div class="llm-tabs">
      <button 
        @click="activeTab = 'qa'" 
        :class="{ active: activeTab === 'qa' }"
      >
        {{ $t('llm.qaTab') }}
      </button>
      <button 
        @click="activeTab = 'summary'" 
        :class="{ active: activeTab === 'summary' }"
      >
        {{ $t('llm.summaryTab') }}
      </button>
    </div>

    <div v-if="activeTab === 'qa'" class="qa-container">
      <input 
        v-model="question" 
        :placeholder="$t('llm.questionPlaceholder')"
        @keyup.enter="submitQuestion"
      />
      <button @click="submitQuestion">{{ $t('llm.askButton') }}</button>
      <div v-if="loading" class="loading">{{ $t('llm.thinking') }}</div>
      <div v-if="answer" class="answer" v-html="$options.filters.markdown(answer)"></div>
      <div class="action-buttons">
        <button v-if="answer" @click="copyToClipboard" class="copy-btn">复制</button>
        <button v-if="answer && loading === false" @click="retryQuestion" class="retry-btn" ref="retryButton">重试</button>
      </div>
    </div>

    <div v-if="activeTab === 'summary'" class="summary-container">
      <button @click="generateSummary">生成摘要</button>
      <div v-if="summary" class="summary">{{ summary }}</div>
    </div>
  </div>
</template>

<script>
export default {
  filters: {
    markdown(value) {
      if (!value) return ''
      // 使用marked库进行更完善的Markdown渲染
      if (typeof marked === 'function') {
        return marked.parse(value)
      }
      // 回退到基本实现
      return value
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/\n/g, '<br>')
    }
  },
  data() {
    return {
      activeTab: 'qa',
      question: '',
      answer: '',
      summary: '',
      loading: false
    }
  },
  methods: {
    debouncedSubmit: _.debounce(async function() {
      if (!this.question.trim()) return
      
      try {
        this.loading = true
        this.answer = ''
        const result = await this.$llmApi.ask(this.question)
        
        // 打字机效果
        let i = 0
        const fullAnswer = result.answer
        const typewriterInterval = setInterval(() => {
          if (i < fullAnswer.length) {
            this.answer = fullAnswer.substring(0, i + 1)
            i++
          } else {
            clearInterval(typewriterInterval)
            this.cacheQuestion(this.question, fullAnswer)
          }
        }, 30)
        
      } catch (error) {
        this.answer = this.$t('llm.errorMessage')
        console.error('问答请求错误:', error)
        this.$nextTick(() => {
          this.$refs.retryButton?.focus()
        })
      } finally {
        this.loading = false
      }
    }, 500),
    
    retryQuestion() {
      if (this.question.trim()) {
        this.debouncedSubmit()
      }
    },
    
    async submitQuestion() {
      this.debouncedSubmit()
    },
    
    cacheQuestion(question, answer) {
      const cached = JSON.parse(localStorage.getItem('llmCache') || '{}')
      cached[question] = answer
      localStorage.setItem('llmCache', JSON.stringify(cached))
    },
    
    copyToClipboard() {
      const el = document.createElement('textarea')
      el.value = this.answer
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      alert('已复制到剪贴板！')
    },
    },
    async generateSummary() {
      try {
        const content = document.querySelector('.content__default').textContent
        const result = await this.$llmApi.summarize(content)
        this.summary = result.summary
      } catch (error) {
        this.summary = '生成摘要时出错，请稍后再试。'
      }
    }
  }
}
</script>

<style scoped>
.llm-plugin {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

.llm-tabs {
  display: flex;
  margin-bottom: 1rem;
}

.llm-tabs button {
  padding: 0.5rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
}

.llm-tabs button.active {
  border-bottom: 2px solid #42b983;
}

.qa-container input {
  width: 70%;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.qa-container button {
  padding: 0.5rem 1rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.answer, .summary {
  margin-top: 1rem;
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 4px;
}

.loading {
  margin-top: 1rem;
  padding: 1rem;
  color: #666;
  font-style: italic;
}

.copy-btn {
  margin-top: 0.5rem;
  padding: 0.3rem 0.6rem;
  background: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 3px;
  cursor: pointer;
}
</style>