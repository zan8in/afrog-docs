import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "afrog",
  description: "A vast collection of security tools for bug bounty, pentest and red teaming",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guide', link: '/guide/what-is-afrog' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'FAQ', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is afrog?', link: '/guide/what-is-afrog' },
          { text: 'Getting Started', link: '/guide/getting-started' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zan8in/afrog' }
    ]
  }
})
