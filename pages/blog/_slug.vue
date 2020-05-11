<template>
  <div class="content border bgcolor-wh">
    <div class="intro flex">
        <img :src="getBlank" :data-src="getMain" class="lazyload" alt="" style="width:1920px;">
        <div class="front anime down-fade">
          <span><i class="fa fa-fw fa-pencil"></i><b>{{ date }}</b></span>
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
        title: this.title + ' - 903.blog',
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
          { property: 'og:title', content: this.title + ' - 903.blog' },
          { property: 'og:type', content: 'article' },
          { property: 'og:url', content: 'https://hoshi.903.ch/blog/' + this.id + '/' },
          { property: 'og:image', content: 'https://hoshi.903.ch/img/' + this.id + '/_thumbnail.jpg' },
          { property: 'og:site_name', content: 'hoshi.903.ch' },
          { property: 'og:description', content: this.description },
          // twitter
          { name: 'twitter:card', content: 'summary_large_image' },
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

    @media (max-width: 602px){
      max-width: 100%;
    }
  }

  .front {
    width: 100%;
    padding: 34px 12px;
    margin-bottom: auto;

    h2 {
      font-size: 26px;
    }
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
    line-height: 1.2;
    background: #373739;
    border-radius: 4px;
    padding: 10px 21px;
    overflow-x: auto;
    margin-bottom: 32px;

    div {
      background: #fff;
      width: fit-content;
      margin: -10px 0 6px -8px;
      padding: 0 6px;

      small {
        font-family: sans-serif;
      }
    }

    code {
      font: normal 10pt Consolas, Monaco, monospace;
      color: #d1d9e1;
      background: #373739;
      font-size: 12.5px;
      padding: 0;
    }
  }

}

.hljs-comment,
.hljs-quote {
  color: #969896;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-type,
.hljs-addition {
  color: #cc99cc;
}

.hljs-number,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #f99157;
}

.hljs-string,
.hljs-doctag,
.hljs-regexp {
  color: #8abeb7;
}

.hljs-title,
.hljs-name,
.hljs-section,
.hljs-built_in {
  color: #b5bd68;
}

.hljs-variable,
.hljs-template-variable,
.hljs-selector-id,
.hljs-class .hljs-title {
   color: #ffcc66;
}

.hljs-section,
.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-symbol,
.hljs-bullet,
.hljs-subst,
.hljs-meta,
.hljs-link {
  color: #f99157;
}

.hljs-deletion {
  color: #dc322f;
}

.hljs-formula {
  background: #eee8d5;
}

.hljs-attr,
.hljs-attribute {
  color: #81a2be;
}

.hljs-emphasis {
  font-style: italic;
}

</style>
