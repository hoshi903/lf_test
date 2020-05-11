<template>
  <div class="content fullh border bgcolor-wh">
    <div class="big anime right-fade">
      <span><i class="fa fa-fw fa-pencil"></i>others.</span>
    </div>
    <span>チップチューンやドット絵に限らず個人の創作活動の記録など、</span><br>
    <span>「悦楽舎Web」としてリニューアルした際にごっそり削ったコンテンツが復活するかもしれないページです。</span><br>
    <ul class="flex start wrap">
      <tile-article
        v-for="article in articles"
        :key="article.name"
        :obj="article" />
    </ul>
  </div>
</template>
<script>
  import TileArticle from "@/components/tile_article.vue";
  import List from '@/articles/list.js'

  export default {
    layout: 'shadows-frame',
    components: {
      TileArticle
    },
    async asyncData ({app}) {
      const articles = List

      async function importMD (id) {
        const mds = await import(`@/articles/${id}.md`)
        return mds.attributes
      }

      return Promise.all(articles.map(id => importMD(id)))
      .then((res) => {
        return {
          articles: res
        }
      })
    },
    head () {
      return {
        title: '悦楽舎 others - 903.blog',
        link: [
          { rel: 'canonical', href: 'https://hoshi.903.ch' },
          // Icons
          { rel: 'icon', href: 'img/favicon.ico', type: 'image/vnd.microsoft.icon'  },
          { rel: 'shortcut icon', href: 'img/favicon.ico', type: 'image/vnd.microsoft.icon' },
          { rel: 'apple-touch-icon', sizes: "152x152", href: 'img/touch/apple-touch-icon.png' },
          // PWA
          { rel: 'manifest', href: 'manifest.json' },
        ],
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
          { name: 'theme-color', content: '#000' },
          // OGP
          { property: 'og:title', content: '悦楽舎 others - 903.blog' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://hoshi.903.ch/' },
          { property: 'og:image', content: 'http://hoshi.s54.xrea.com/img/touch/apple-touch-icon.png' },
          { property: 'og:site_name', content: 'hoshi.903.ch' },
          { property: 'og:description', content: '悦楽舎(チップチューンやドット絵)に限らず創作の記録などもまとめたblogです。' },
          // twitter
          { name: 'twitter:card', content: 'summary' },
          // iOS Safari FullScreen
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
          // iOS Safari No CallLink
          { name: 'format-detection', content: 'telephone=no' },
        ]
      }
    }
  }
</script>