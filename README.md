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

## Deployment

VuePress generates static HTML, CSS, and JavaScript files that can be easily deployed to various hosting providers.

Popular static hosting providers include:
- GitHub Pages
- Netlify
- Vercel

Generic deployment steps:

1.  **Install VuePress**: Ensure VuePress is installed in your project.
2.  **Configure the plugin**: Add and configure `vuepress-plugin-llm` in your `.vuepress/config.js` file.
3.  **Set API Key**: Make sure to set your API key in the plugin options for the LLM service to work.
4.  **Build your site**: Run the VuePress build command (e.g., `vuepress build docs` or `npm run docs:build`). This will typically generate a `dist` directory (or similar, depending on your VuePress configuration) containing the static files.
5.  **Deploy**: Deploy the contents of the generated `dist` directory to your chosen hosting provider.

For ease of use and built-in CI/CD (Continuous Integration/Continuous Deployment) capabilities, **Netlify** and **Vercel** are highly recommended. They often provide seamless integration with Git repositories, automatically building and deploying your site when you push changes.
