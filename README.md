
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>QwenPaw – Open-Source Multi-Agent AI Framework | Build AI Agents with Qwen</title>
    <meta name="description" content="QwenPaw is an open-source multi-agent framework powered by Qwen models. Build, orchestrate, and deploy intelligent AI agents with multi-model support, visual pipeline builder, and 50+ built-in tools." />
    <meta name="keywords" content="QwenPaw, AI agent framework, Qwen model, multi-agent, AgentScope, LLM orchestration" />
    <meta name="author" content="AgentScope AI" />
    <meta property="og:title" content="QwenPaw – Open-Source Multi-Agent AI Framework" />
    <meta property="og:description" content="Build intelligent AI agents with Qwen models. Multi-model support, visual pipeline builder, and rich tool integrations." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="QwenPaw – Open-Source Multi-Agent AI Framework" />
    <meta name="twitter:description" content="Build intelligent AI agents with Qwen models. Multi-model support, visual pipeline builder, and rich tool integrations." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css">
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Space Grotesk', sans-serif;
        background-color: #010101;
        color: #eef2ff;
        line-height: 1.5;
        scroll-behavior: smooth;
        overflow-x: hidden;
      }

      /* custom scroll */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: #0a0a0a;
      }
      ::-webkit-scrollbar-thumb {
        background: #2d2f36;
        border-radius: 8px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #5c6bc0;
      }

      /* glassmorphic / futuristic backgrounds */
      .gradient-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background: radial-gradient(circle at 20% 30%, rgba(20, 30, 55, 0.6) 0%, #010101 80%);
      }
      .noise {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.12;
        pointer-events: none;
        z-index: -1;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        background-repeat: repeat;
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 32px;
      }

      /* navigation */
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 0;
        flex-wrap: wrap;
        gap: 20px;
        border-bottom: 1px solid rgba(98, 114, 164, 0.2);
        backdrop-filter: blur(4px);
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1.8rem;
        font-weight: 800;
        letter-spacing: -0.02em;
        background: linear-gradient(135deg, #FFFFFF, #94a3f8);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .logo i {
        background: none;
        color: #a5b4fc;
        font-size: 2rem;
        background-clip: unset;
        -webkit-background-clip: unset;
        color: #a5b4fc;
      }
      .nav-links {
        display: flex;
        gap: 2rem;
        align-items: center;
      }
      .nav-links a {
        text-decoration: none;
        color: #cbd5e6;
        font-weight: 500;
        transition: 0.2s;
      }
      .nav-links a:hover {
        color: white;
      }
      .btn-outline-light {
        border: 1px solid #4f5b8c;
        background: transparent;
        padding: 8px 20px;
        border-radius: 40px;
        font-weight: 500;
        color: #e2e8ff;
        transition: 0.2s;
        cursor: pointer;
        font-family: 'Space Grotesk', sans-serif;
      }
      .btn-outline-light:hover {
        background: rgba(100, 120, 200, 0.2);
        border-color: #8b9aff;
      }

      /* hero section */
      .hero {
        padding: 80px 0 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
      .badge {
        background: rgba(100, 108, 255, 0.15);
        backdrop-filter: blur(4px);
        padding: 6px 14px;
        border-radius: 100px;
        font-size: 0.8rem;
        font-weight: 500;
        border: 1px solid rgba(139, 148, 244, 0.3);
        margin-bottom: 28px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .hero h1 {
        font-size: 4rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        background: linear-gradient(to right, #ffffff, #bac8ff, #a0aaff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        max-width: 900px;
        line-height: 1.2;
      }
      .hero .sub {
        font-size: 1.25rem;
        color: #9aa4bf;
        max-width: 650px;
        margin: 28px 0;
      }
      .cta-group {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 16px;
      }
      .btn-primary {
        background: linear-gradient(105deg, #4f46e5, #7c3aed);
        border: none;
        padding: 12px 32px;
        border-radius: 48px;
        font-weight: 600;
        font-size: 1rem;
        color: white;
        cursor: pointer;
        transition: 0.2s;
        box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
        font-family: 'Space Grotesk', sans-serif;
      }
      .btn-primary:hover {
        transform: scale(1.02);
        background: linear-gradient(105deg, #6366f1, #8b5cf6);
        box-shadow: 0 12px 28px rgba(99, 102, 241, 0.4);
      }
      .btn-secondary {
        background: rgba(30, 32, 44, 0.7);
        backdrop-filter: blur(8px);
        border: 1px solid #3b3f5c;
        padding: 12px 32px;
        border-radius: 48px;
        font-weight: 500;
        color: #e0e7ff;
        cursor: pointer;
        transition: 0.2s;
        font-family: 'Space Grotesk', sans-serif;
      }
      .btn-secondary:hover {
        background: #1f2235;
        border-color: #6b72c1;
      }

      /* stats row */
      .stats {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 48px;
        margin: 64px 0 40px;
        padding: 24px 0;
        border-top: 1px solid rgba(98, 114, 164, 0.2);
        border-bottom: 1px solid rgba(98, 114, 164, 0.2);
      }
      .stat-item {
        text-align: center;
      }
      .stat-number {
        font-size: 2.2rem;
        font-weight: 800;
        background: linear-gradient(135deg, #e2e8ff, #a5b4fc);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .stat-label {
        color: #8d99c9;
        font-size: 0.9rem;
      }

      /* section header */
      .section-header {
        text-align: center;
        margin: 80px 0 48px;
      }
      .section-header h2 {
        font-size: 2.5rem;
        font-weight: 700;
        background: linear-gradient(to right, #f0f3ff, #b9c2ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .section-header p {
        color: #9aa2c0;
        max-width: 580px;
        margin: 16px auto 0;
      }

      /* features grid */
      .features-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 32px;
        margin: 40px 0 40px;
      }
      .feature-card {
        background: rgba(12, 14, 25, 0.7);
        backdrop-filter: blur(8px);
        border-radius: 32px;
        padding: 28px 24px;
        border: 1px solid rgba(72, 85, 140, 0.3);
        transition: 0.25s ease;
      }
      .feature-card:hover {
        border-color: #6c74cc;
        transform: translateY(-6px);
        background: rgba(18, 20, 35, 0.8);
      }
      .feature-icon {
        font-size: 2.4rem;
        background: linear-gradient(135deg, #b4c0ff, #6c5ce7);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        margin-bottom: 20px;
      }
      .feature-card h3 {
        font-size: 1.5rem;
        margin-bottom: 12px;
        font-weight: 600;
      }
      .feature-card p {
        color: #b1bbdb;
        line-height: 1.5;
      }

      /* visual pipeline mock (interactive) */
      .pipeline-showcase {
        background: radial-gradient(ellipse at 50% 30%, rgba(40, 44, 80, 0.4), transparent);
        border-radius: 48px;
        padding: 32px 24px;
        margin: 32px 0 64px;
        border: 1px solid #2d2f4e;
      }
      .pipeline-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 28px;
      }
      .pipeline-title span {
        font-family: 'JetBrains Mono', monospace;
        background: #0b0e1a;
        padding: 6px 14px;
        border-radius: 40px;
        font-size: 0.85rem;
        color: #9bb1ff;
      }
      .visual-nodes {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        align-items: center;
      }
      .node {
        background: #131625;
        border-radius: 24px;
        padding: 16px 24px;
        min-width: 140px;
        text-align: center;
        border: 1px solid #2b2f4a;
        transition: 0.2s;
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      }
      .node i {
        font-size: 1.8rem;
        margin-bottom: 8px;
        display: block;
        color: #9baaff;
      }
      .arrow {
        font-size: 1.8rem;
        color: #636b9b;
      }
      @media (max-width: 720px) {
        .arrow { display: none; }
      }

      /* code snippet */
      .code-section {
        background: #0a0c16;
        border-radius: 28px;
        padding: 28px;
        margin: 40px 0;
        border: 1px solid #262b44;
        font-family: 'JetBrains Mono', monospace;
      }
      .code-header {
        display: flex;
        gap: 12px;
        margin-bottom: 20px;
      }
      .code-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #ff5f56;
      }
      .code-dot:nth-child(2) { background: #ffbd2e; }
      .code-dot:nth-child(3) { background: #27c93f; }
      pre {
        overflow-x: auto;
        color: #c9d1f0;
        font-size: 0.85rem;
        line-height: 1.5;
      }
      code {
        font-family: 'JetBrains Mono', monospace;
      }

      /* integrations */
      .integrations {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        margin: 40px 0;
      }
      .integrations span {
        background: #151a2a;
        padding: 8px 20px;
        border-radius: 60px;
        font-weight: 500;
        font-size: 0.9rem;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      /* footer */
      .footer {
        margin-top: 100px;
        padding: 48px 0 32px;
        border-top: 1px solid #1e2238;
        text-align: center;
        color: #7a83ae;
      }

      @media (max-width: 780px) {
        .container { padding: 0 24px; }
        .hero h1 { font-size: 2.5rem; }
        .navbar { flex-direction: column; }
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
        font-family: inherit;
      }
      a {
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="gradient-bg"></div>
    <div class="noise"></div>

    <div class="container">
      <!-- navbar exactly same structure -->
      <nav class="navbar">
        <div class="logo">
          <i class="ri-paw-line"></i>
          <span>QwenPaw</span>
        </div>
        <div class="nav-links">
          <a href="#">Framework</a>
          <a href="#">Agents</a>
          <a href="#">Docs</a>
          <a href="#">GitHub</a>
          <button class="btn-outline-light"><i class="ri-star-line"></i> Star 3.2k</button>
        </div>
      </nav>

      <!-- hero section identical -->
      <div class="hero">
        <div class="badge">
          <i class="ri-flashlight-fill"></i> v2.0 released · Multi‑agent orchestration
        </div>
        <h1>Build intelligent agents<br>with Qwen & open source</h1>
        <p class="sub">QwenPaw gives you a production‑ready multi‑agent framework. Orchestrate Qwen models, 50+ tools, and a visual pipeline builder — deploy at scale.</p>
        <div class="cta-group">
          <button class="btn-primary"><i class="ri-github-fill"></i> GitHub · Get started</button>
          <button class="btn-secondary"><i class="ri-eye-line"></i> Live demo</button>
        </div>
      </div>

      <!-- stats identical -->
      <div class="stats">
        <div class="stat-item"><div class="stat-number">50+</div><div class="stat-label">Built‑in tools</div></div>
        <div class="stat-item"><div class="stat-number">10+</div><div class="stat-label">Agent archetypes</div></div>
        <div class="stat-item"><div class="stat-number">1.2k+</div><div class="stat-label">GitHub stars</div></div>
        <div class="stat-item"><div class="stat-number">Multi‑model</div><div class="stat-label">Qwen, LLaMA, GPT</div></div>
      </div>

      <!-- features section -->
      <div class="section-header">
        <h2>Designed for agentic workflows</h2>
        <p>From research prototypes to enterprise agents — QwenPaw streamlines every step.</p>
      </div>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon"><i class="ri-group-line"></i></div>
          <h3>Multi‑agent orchestration</h3>
          <p>Coordinator, router, debate, hierarchical — build collaborative swarms of Qwen agents with state management.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="ri-shape-line"></i></div>
          <h3>Visual pipeline builder</h3>
          <p>Drag‑and‑drop interface to chain tools, agents, and memory. Real-time debugging and tracing.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="ri-tools-line"></i></div>
          <h3>50+ plug & play tools</h3>
          <p>Web search, code interpreter, RAG, vector stores, APIs, and custom tool builder — extend seamlessly.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon"><i class="ri-cloud-line"></i></div>
          <h3>Multi‑model support</h3>
          <p>Native Qwen (Qwen2.5, Qwen-max), OpenAI, Claude, Gemini, and local models via Ollama.</p>
        </div>
      </div>

      <!-- visual pipeline showcase exactly same -->
      <div class="pipeline-showcase">
        <div class="pipeline-title">
          <span><i class="ri-palette-line"></i> Visual Agent Pipeline · Live preview</span>
          <span><i class="ri-drag-drop-line"></i> drag & drop ready</span>
        </div>
        <div class="visual-nodes">
          <div class="node"><i class="ri-user-settings-line"></i> Input<br><span style="font-size:12px;">User query</span></div>
          <div class="arrow"><i class="ri-arrow-right-s-line"></i></div>
          <div class="node"><i class="ri-brain-line"></i> Qwen Agent<br><span>reasoning</span></div>
          <div class="arrow"><i class="ri-arrow-right-s-line"></i></div>
          <div class="node"><i class="ri-database-2-line"></i> RAG Tool<br><span>vector recall</span></div>
          <div class="arrow"><i class="ri-arrow-right-s-line"></i></div>
          <div class="node"><i class="ri-code-box-line"></i> Code Exec<br><span>sandbox</span></div>
          <div class="arrow"><i class="ri-arrow-right-s-line"></i></div>
          <div class="node"><i class="ri-chat-check-line"></i> Output<br><span>final answer</span></div>
        </div>
        <div style="text-align: center; margin-top: 28px; font-size: 0.8rem; color: #8b96c0;"><i class="ri-information-line"></i> Real-time observability & logs for every agent step</div>
      </div>

      <!-- code snippet exactly same style -->
      <div class="section-header">
        <h2>Agent as code. Pythonic & elegant.</h2>
        <p>Build custom multi-agent workflows with minimal boilerplate.</p>
      </div>
      <div class="code-section">
        <div class="code-header">
          <div class="code-dot"></div><div class="code-dot"></div><div class="code-dot"></div>
          <span style="margin-left: 8px; font-family: monospace;">agent_demo.py</span>
        </div>
        <pre><code>from qwenpaw import Agent, Tool, Orchestrator
from qwenpaw.models import QwenChat

# Initialize Qwen model
model = QwenChat(model="qwen-max", api_key="your_key")

# Define research agent with tools
research_agent = Agent(
    name="Researcher",
    model=model,
    tools=[Tool.web_search(), Tool.rag_index("docs")],
    system_prompt="You are a research expert, cite sources."
)

# Define coder agent
coder_agent = Agent(
    name="Coder",
    model=model,
    tools=[Tool.python_interpreter()],
)

# Orchestrate multi-agent pipeline
orchestrator = Orchestrator(agents=[research_agent, coder_agent])
response = orchestrator.run("Analyze transformer architecture and write a summary.")
print(response)</code></pre>
      </div>

      <!-- integrations section -->
      <div class="section-header">
        <h2>Integrated with the ecosystem you love</h2>
        <p>50+ tools & connectors, from LangChain to native Qwen tool-calling.</p>
      </div>
      <div class="integrations">
        <span><i class="ri-database-line"></i> Vector stores</span>
        <span><i class="ri-search-line"></i> Exa / Tavily</span>
        <span><i class="ri-github-fill"></i> GitHub Actions</span>
        <span><i class="ri-slack-line"></i> Slack</span>
        <span><i class="ri-terminal-line"></i> Code interpreter</span>
        <span><i class="ri-fire-line"></i> Qwen2.5</span>
      </div>

      <!-- additional advantage section same as original -->
      <div style="display: flex; flex-wrap: wrap; gap: 32px; margin: 60px 0; background: rgba(12, 15, 28, 0.6); border-radius: 48px; padding: 32px 28px; border: 1px solid #2a2f4e;">
        <div style="flex:1; min-width: 200px;">
          <i class="ri-github-line" style="font-size: 2rem; color:#9eb1ff"></i>
          <h3 style="margin: 16px 0 8px">Fully open source</h3>
          <p style="color:#b9c3e6">Apache 2.0 licensed. Contributions welcome from the community. Extend agents, tools, and memory.</p>
        </div>
        <div style="flex:1; min-width: 200px;">
          <i class="ri-shield-star-line" style="font-size: 2rem; color:#9eb1ff"></i>
          <h3 style="margin: 16px 0 8px">Enterprise ready</h3>
          <p style="color:#b9c3e6">Observability, tracing, role-based access, and deployment on Kubernetes or serverless.</p>
        </div>
        <div style="flex:1; min-width: 200px;">
          <i class="ri-flask-line" style="font-size: 2rem; color:#9eb1ff"></i>
          <h3 style="margin: 16px 0 8px">AgentScope compatibility</h3>
          <p style="color:#b9c3e6">Seamless integration with AgentScope ecosystem and multi-agent evaluation.</p>
        </div>
      </div>

      <!-- CTA Banner exactly same -->
      <div style="background: linear-gradient(125deg, #12152a, #030617); border-radius: 48px; padding: 52px 32px; text-align: center; margin: 32px 0 40px;">
        <h2 style="font-size: 2rem;">Start building with QwenPaw today</h2>
        <p style="margin: 16px 0 24px; color: #b9c0e6; max-width: 500px; margin-left: auto; margin-right: auto;">Join the future of multi-agent AI — production-grade, fully open, and powered by Qwen.</p>
        <div class="cta-group" style="margin-top: 8px;">
          <button class="btn-primary"><i class="ri-github-fill"></i> GitHub repository</button>
          <button class="btn-secondary"><i class="ri-book-open-line"></i> Documentation</button>
        </div>
      </div>

      <!-- footer exactly same -->
      <div class="footer">
        <div class="logo" style="justify-content: center; margin-bottom: 24px;">
          <i class="ri-paw-line"></i> <span>QwenPaw</span>
        </div>
        <p style="margin-bottom: 16px;">Open-source multi-agent framework · Built with ❤️ for the Qwen & AgentScope community</p>
        <div style="display: flex; justify-content: center; gap: 28px; flex-wrap: wrap; margin-bottom: 24px;">
          <span><i class="ri-twitter-x-line"></i> X</span>
          <span><i class="ri-discord-line"></i> Discord</span>
          <span><i class="ri-github-line"></i> GitHub</span>
          <span><i class="ri-mail-line"></i> hello@qwenpaw.dev</span>
        </div>
        <p style="font-size: 0.8rem;">© 2025 QwenPaw · Apache 2.0. All trademarks belong to their respective owners.</p>
      </div>
    </div>

    <!-- identical interactive javascript behavior -->
    <script>
      document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline-light').forEach(btn => {
        btn.addEventListener('click', (e) => {
          if(btn.innerText.includes('GitHub') || btn.innerText.includes('Get started') || btn.innerText.includes('repository')) {
            window.open('https://github.com/', '_blank');
            e.preventDefault();
          } else if(btn.innerText.includes('Live demo')) {
            alert('🎉 Interactive demo preview: QwenPaw visual pipeline + agent playground coming soon!');
          } else {
            alert('✨ QwenPaw docs & getting started — explore agent orchestration!');
          }
        });
      });
      const starBtn = document.querySelector('.btn-outline-light');
      if(starBtn && starBtn.innerHTML.includes('Star')) {
        starBtn.addEventListener('click', () => {
          starBtn.innerHTML = '<i class="ri-star-fill"></i> Starred · 3.3k';
          starBtn.style.borderColor = '#facc15';
        });
      }
    </script>
  </body>
</html>

# VuePress LLM 插件

## 功能特性

- **智能问答系统**：支持自然语言提问，提供即时答案
- **自动摘要生成**：一键生成当前页面内容的简明摘要
- **打字机效果**：答案以逐字显示的方式呈现，提升用户体验
- **问题缓存**：自动缓存已回答问题，提高响应速度

## 安装步骤

1. 安装插件包：
```bash
npm install vuepress-plugin-llm
```

2. 在VuePress配置文件中添加插件：
```javascript
// .vuepress/config.js
module.exports = {
  plugins: [
    ['vuepress-plugin-llm', {
      // 配置选项
    }]
  ]
}
```

## 使用说明

### 智能问答
1. 点击"智能问答"标签
2. 在输入框中输入您的问题
3. 按Enter键或点击"提问"按钮
4. 等待系统思考并返回答案

### 自动摘要
1. 点击"自动摘要"标签
2. 点击"生成摘要"按钮
3. 系统将自动分析页面内容并生成摘要

## 高级功能

- **重试问题**：答案不满意时可点击"重试"按钮重新获取
- **复制答案**：点击"复制"按钮可将答案复制到剪贴板

## 配置选项

| 选项 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| enabled | Boolean | true | 是否启用插件 |
| apiEndpoint | String | '' | LLM API端点地址 |
| typingSpeed | Number | 30 | 打字机效果速度(ms) |
