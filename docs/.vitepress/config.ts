export default {
  lang: 'zh-CN',
  title: '奔跑吧，俊！',
  description: 'A running Jun',

  themeConfig: {
    repo: 'sooia/vitepress',
    docsDir: 'docs',
    docsBranch: 'main',

    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg'
    // },

    nav: [
      { text: 'JavaScript', link: '/', activeMatch: '^/$|^/js/' },
      {
        text: '文章',
        link: '/doc/',
        activeMatch: '^/doc/'
      },
    ],

    sidebar: {
      '/js/': getJsSidebar(),
      '/doc/': getDocSidebar(),
      '/css/': getCSSSidebar(),
      '/': getJsSidebar()
    }
  }
}

function getJsSidebar() {
  return [
    {
      text: 'JavaScript',
      children: [
        { text: '前端知识', link: '/js/FE' },
        { text: 'ECharts配置', link: '/js/echarts'},
        { text: '原型和原型链', link: '/js/prototype' },
        { text: '闭包', link: '/js/closure' },
        { text: '变量', link: '/js/variable' },
      ]
    },
    {
      text: '框架',
      children: [
        { text: 'MVVM', link: '/framework/mvvm'},
        { text: '虚拟DOM', link: '/framework/vitual-dom' },
        { text: '路由', link: '/framework/router' },
      ]
    },
    {
      text: '网络',
      children: [
        { text: '浏览器的渲染机制', link: '/network/rendering-principle'},
        { text: '从输入 URL 到页面加载完成的过程', link: '/network/process-from-entering-URL-to-page-load-completion' },
        { text: 'HTTP', link: '/network/http' },
      ]
    }
  ]
}

function getDocSidebar() {
  return [
    {
      text: '文章',
      children: [
        { text: '1', link: '/doc/' },
        { text: '前端路线', link: '/doc/frontend-roadmap-ssh' },
        { text: '前端大全', link: '/doc/all-of-frontend-yck' },
      ]
    },
  ]
}

function getCSSSidebar() {
  return [
    {
      text: 'ECharts',
      children: [
        { text: '推荐配置', link: '/echarts/default' },
        { text: '前端', link: '/echarts/FE' }
      ]
    },
  ]
}
