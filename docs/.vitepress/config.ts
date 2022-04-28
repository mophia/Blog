export default {
  lang: 'zh-CN',
  title: '俊润',
  description: 'A running Jun',

  themeConfig: {
    repo: 'devull/blog',
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
      { text: 'Go', link: '/', activeMatch: '^/$|^/go/' },
      { text: 'Python', link: '/python/', activeMatch: '^/python/'},
      { text: 'JavaScript', link: '/', activeMatch: '^/$|^/js/' },
      { text: '文章', link: '/doc/', activeMatch: '^/doc/'},
      { text: 'React', link: '/react/', activeMatch: '^/react/'},
    ],

    sidebar: {
      '/': getGoSidebar(),
      '/js/': getJsSidebar(),
      '/doc/': getDocSidebar(),
      '/react/': getReactSidebar(),
      '/python/': getPythonSidebar(),
    }
  }
}

function getGoSidebar() {
  return [
    {
      text: 'go',
      children: [
        { text: '31-40', link: '/31-40' },
      ]
    },
  ]
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
        { text: 'this', link: '/js/this' },
        { text: '正则表达式', link: '/js/regex' },
        { text: '其他', link: '/js/other' },
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
        { text: '前端进阶之道', link: '/doc/' },
        { text: '前端路线', link: '/doc/frontend-roadmap-ssh' },
        { text: '前端大全', link: '/doc/all-of-frontend-yck' },
        { text: 'React路线', link: '/doc/react-roadmap' },
        { text: 'Mac 快捷键', link: '/doc/shortcuts-for-mac' },
      ]
    },
  ]
}

function getReactSidebar() {
  return [
    {
      text: 'React 文献',
      children: [
        { text: '重构复杂的 React 组件', link: '/react/refactor-component' },
      ]
    },
  ]
}

function getPythonSidebar() {
  return [
    {
      text: '数据结构',
      children: [
        { text: '列表', link: '/python/list' },
        { text: '元组', link: '/python/tuple' },
        { text: '字典', link: '/python/dict' },
        { text: '装饰器', link: '/python/decorator' },
      ]
    },
  ]
}
