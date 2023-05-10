import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "afrog",
  description: "A vast collection of security tools for bug bounty, pentest and red teaming",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/faq/': sidebarFaq()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zan8in/afrog' }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'afrog'
      }
    }
  }
})

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is afrog?', link: '/guide/what-is-afrog' },
        { text: 'Getting Started', link: '/guide/getting-started' }
      ]
    },
    {
      text: 'Configuration',
      collapsed: false,
      items: [
        { text: 'Reverse', link: '/guide/reverse' }
      ]
    },
    {
      text: 'Usage',
      collapsed: false,
      items: [
        { text: 'Filters', link: '/guide/filters' },
        { text: 'Rate Limits', link: '/guide/rate-limits' },
        { text: 'Optimization', link: '/guide/optimzations' },
        { text: 'Update', link: '/guide/update' },
        { text: 'Proxy', link: '/guide/proxy' },
      ]
    }
  ]
}

function sidebarExamples() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      // items: [
      //   { text: 'What is afrog?', link: '/guide/what-is-afrog' },
      //   { text: 'Getting Started', link: '/guide/getting-started' }
      // ]
    }
  ]
}

function sidebarFaq() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      // items: [
      //   { text: 'What is afrog?', link: '/guide/what-is-afrog' },
      //   { text: 'Getting Started', link: '/guide/getting-started' }
      // ]
    }
  ]
}

function nav() {
  return [
      { text: 'Guide', link: '/guide/what-is-afrog',activeMatch: '/guide/' },
      { text: 'Examples', link: '/examples/',activeMatch: '/examples/' },
      { text: 'FAQ', link: '/faq/',activeMatch: '/faq/' }
  ]
}