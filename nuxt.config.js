module.exports = {
  mode: 'spa',
  head: {
    title: 'Nuxt実験エリア - 903.netlify.app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: 'theme-color', content: '#000' },
      // OGP
      { property: 'og:title', content: 'Nuxt実験エリア - 903.netlify.app' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://903.netlify.app/' },
      { property: 'og:image', content: 'http://hoshi.s54.xrea.com/img/touch/apple-touch-icon.png' },
      { property: 'og:site_name', content: '903.netlify.app' },
      { property: 'og:description', content: 'なんとなーくNuxt実装実験中' },
      // iOS Safari FullScreen
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      // iOS Safari No CallLink
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'canonical', href: 'https://903.netlify.app' },
      // Icons
      { rel: 'icon', href: 'img/favicon.ico', type: 'image/vnd.microsoft.icon'  },
      { rel: 'shortcut icon', href: 'img/favicon.ico', type: 'image/vnd.microsoft.icon' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: 'img/touch/apple-touch-icon.png' },
      // PWA
      { rel: 'manifest', href: 'manifest.json' },
    ]
  },
  css: [
    '~assets/css/style.css',
    '~assets/css/load.css',
    '~assets/css/font-awesome.min.css'
  ],
  plugins: [
    { src: '@/plugins/inobounce.min.js', ssr: false },
    { src: '@/plugins/lazysizes.min.js', ssr: false },
  ],
}