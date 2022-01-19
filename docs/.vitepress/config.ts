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
        // { text: '本年进步 🏃', link: '/guide/progress'},
        // { text: '来年展望', link: '/guide/expectations'},
        // { text: '致谢 🙏', link: '/guide/thanks' },
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
