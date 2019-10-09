module.exports = (options, ctx) => ({
  plugins: [
    ['@vuepress/search'],
    ['reading-time'],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/google-analytics', {
      ga: 'UA-128189152-1'
    }],
    ['@vuepress/last-updated'],
    ['@vuepress/plugin-nprogress'],
    [
      'container',
      {
        type: 'tip',
        defaultTitle: { '/zh/': '提示'}
      }
    ],
    [
      'container',
      {
        type: 'warning',
        defaultTitle: { '/zh/': '注意' }
      }
    ],
    [
      'container',
      {
        type: 'danger',
        defaultTitle: { '/zh/': '警告' }
      }
    ]
  ]
})