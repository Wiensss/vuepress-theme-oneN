module.exports = (options, ctx) => ({
  plugins: [
    [
      '@vuepress/medium-zoom',
      { selector: '.content__default :not(a) > img' }
    ],
    [
      '@vuepress/search',
      { searchMaxSuggestions: 5 }
    ],
    [
      '@vuepress/pwa',
      { serviceWorker: true, updatePopup: true }
    ],
    [ require('./plugins/nprogress') ],
    [
      'container',
      { type: 'tip', defaultTitle: { '/zh/': '提示' } }
    ],
    [
      'container',
      { type: 'warning', defaultTitle: { '/zh/': '注意' } }
    ],
    [
      'container',
      { type: 'danger', defaultTitle: { '/zh/': '警告' } }
    ]
  ]
})