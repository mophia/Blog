export default {
  lang: 'zh-CN',
  title: 'jun.run',
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
        text: 'ECharts',
        link: '/echarts/default',
        activeMatch: '^/echarts/'
      },
      {
        text: 'CSS',
        link: '/css/ch01',
        activeMatch: '^/css/'
      },
    ],

    sidebar: {
      '/js/': getJsSidebar(),
      '/echarts/': getEChartsSidebar(),
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
        { text: 'ECharts配置', link: '/js/default'},
        { text: '前端杂记', link: '/js/FE' },
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

function getEChartsSidebar() {
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
