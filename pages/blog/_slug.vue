<template>
  <div class="content border bgcolor-wh">
    <div class="intro flex">
        <img :src="getBlank" :data-src="getMain" class="lazyload" alt="" style="width:1920px;">
        <div class="front">
          <span>{{ date }}</span>
          <small v-if="update">({{ update }}加筆)</small>
          <h2>{{ title }}</h2>
          <span>{{ description }}</span><br>
          <small v-if="memo" >{{ memo }}</small>
        </div>
    </div>
    <component :is="dynamicComponent" />
  </div>
</template>

<script>
  export default {
    layout: 'shadows-frame',
    data () {
      return {
        id: null,
        date: null,
        update: null,
        title: null,
        description: null,
        memo: null,
        dynamicComponent: null
      }
    },
    computed: {
      getMain () {
        return `/img/${this.id}/_main.jpg`;
      },
      getBlank () {
        return `data:image/gif;base64,R0lGODlhEAAJAPcAAAAAAAAAMwAAZgAAmQAAzAAA/wAzAAAzMwAzZgAzmQAzzAAz/wBmAABmMwBmZgBmmQBmzABm/wCZAACZMwCZZgCZmQCZzACZ/wDMAADMMwDMZgDMmQDMzADM/wD/AAD/MwD/ZgD/mQD/zAD//zMAADMAMzMAZjMAmTMAzDMA/zMzADMzMzMzZjMzmTMzzDMz/zNmADNmMzNmZjNmmTNmzDNm/zOZADOZMzOZZjOZmTOZzDOZ/zPMADPMMzPMZjPMmTPMzDPM/zP/ADP/MzP/ZjP/mTP/zDP//2YAAGYAM2YAZmYAmWYAzGYA/2YzAGYzM2YzZmYzmWYzzGYz/2ZmAGZmM2ZmZmZmmWZmzGZm/2aZAGaZM2aZZmaZmWaZzGaZ/2bMAGbMM2bMZmbMmWbMzGbM/2b/AGb/M2b/Zmb/mWb/zGb//5kAAJkAM5kAZpkAmZkAzJkA/5kzAJkzM5kzZpkzmZkzzJkz/5lmAJlmM5lmZplmmZlmzJlm/5mZAJmZM5mZZpmZmZmZzJmZ/5nMAJnMM5nMZpnMmZnMzJnM/5n/AJn/M5n/Zpn/mZn/zJn//8wAAMwAM8wAZswAmcwAzMwA/8wzAMwzM8wzZswzmcwzzMwz/8xmAMxmM8xmZsxmmcxmzMxm/8yZAMyZM8yZZsyZmcyZzMyZ/8zMAMzMM8zMZszMmczMzMzM/8z/AMz/M8z/Zsz/mcz/zMz///8AAP8AM/8AZv8Amf8AzP8A//8zAP8zM/8zZv8zmf8zzP8z//9mAP9mM/9mZv9mmf9mzP9m//+ZAP+ZM/+ZZv+Zmf+ZzP+Z///MAP/MM//MZv/Mmf/MzP/M////AP//M///Zv//mf//zP///8DAwICAgIAAAACAAAAAgICAAIAAgACAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEAAJAAAIFgCvCRxIsKDBgwgTKlzIsKHDhxARBgQAOw==`
      }
    },
    async asyncData ({params, app}) {
      const markdown = await import(`~/articles/${params.slug}.md`)
      return {
        id: markdown.attributes.id,
        date: markdown.attributes.date,
        update: markdown.attributes.update,
        title: markdown.attributes.title,
        description: markdown.attributes.description,
        memo: markdown.attributes.memo,
        dynamicComponent: markdown.vue.component
      }
    },
    head () {
      return {
        title: this.title + ' - 903.netlify.app',
        link: [
          { rel: 'canonical', href: 'https://903.netlify.app' },
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
          { property: 'og:title', content: this.title + ' - 903.netlify.app' },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://903.netlify.app/' },
          { property: 'og:image', content: 'http://hoshi.s54.xrea.com/img/touch/apple-touch-icon.png' },
          { property: 'og:site_name', content: '903.netlify.app' },
          { property: 'og:description', content: this.description },
          // iOS Safari FullScreen
          { name: 'apple-mobile-web-app-capable', content: 'yes' },
          { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
          // iOS Safari No CallLink
          { name: 'format-detection', content: 'telephone=no' },
        ]
      };
    }
  }
</script>

<style lang="scss">
.intro {
  margin: 12px;

  @media (max-width: 830px){
    flex-wrap: wrap;
  }

  img {
    width: 100%;
    max-width: 568px;
    object-fit: cover;
  }

  .front {
    width: 100%;
    padding: 34px 12px;
    margin-bottom: auto;
  }
}

.markdown-body {
  line-height: 1.6;
  padding: 10px 14px;

  > * {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  > .flex {
    display: flex;
    flex-flow: wrap;

    > * {
      flex : 1 1 auto;
      width: 0%;
    }
  }

  > p > img {
    width: 100%;
    max-width: 100%;
  }

  hr {
    max-width: 722px;
  }
  h1, h2, h3, h4, h5, h6 {
    max-width: 724px;
    text-indent: 12px;
    padding: 10px 0 4px 0;
    margin: 7px auto;
    border-bottom: 1px solid #ccc;
  }
  h1 {
    font-size: 32px;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 20px;
  }

  ul, ol {
    padding-left: 32px;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }

  blockquote {
    border-left: 5px solid #c0c8d0;
    padding: 14px 0 14px 12px;
    margin: 16px auto;
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    padding: 3px 6px;
  }
  pre {
    background-color: #f3f4f4;
    border-radius: 4px;
    padding: 10px 21px;
    overflow-x: auto;
    margin-bottom: 32px;

    code {
      padding: 0;
    }
  }

}
</style>
