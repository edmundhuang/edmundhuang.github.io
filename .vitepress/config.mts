import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的知识库",
  description: "编程、运维、设计",
  srcDir: 'src',
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      label: '页面导航'
    },

    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '未找到结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            }
          }
        }
      }
    },

    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
