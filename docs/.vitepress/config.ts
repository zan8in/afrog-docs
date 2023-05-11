import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "afrog",
  titleTemplate: ':title - A vast collection of security tools for bug bounty, pentest and red teaming',
  description: "A vast collection of security tools for bug bounty, pentest and red teaming",

  head: [
    ['link', { rel: 'shortcut icon', href: '/afrog-favicon.png' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: "/afrog-logo.svg",

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/examples/': sidebarExamples(),
      '/faq/': sidebarFaq()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zan8in/afrog' }
    ]

   
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
      text: 'FAQ',
      collapsed: false,
      items: [
        { text: 'How to configure api-key?', link: '/faq/which-api-key-to-config' },
        { text: 'How to configure proxy?', link: '/faq/how-to-configure-proxy' },
        { text: 'I can not run it', link: '/faq/i-can-not-run-it' },
        { text: 'afrog PoC format', link: '/faq/afrog-poc-format'},
        { text: 'afrog Update failed?', link: '/faq/afrog-update-failed' }
      ]
    }
  ]
}

function nav() {
  return [
      { text: 'Guide', link: '/guide/what-is-afrog',activeMatch: '/guide/' },
      { text: 'Examples', link: '/examples/',activeMatch: '/examples/' },
      { text: 'FAQ', link: '/faq/which-api-key-to-config',activeMatch: '/faq/' }
  ]
}