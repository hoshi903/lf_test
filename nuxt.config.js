import fs from 'fs'
import path from 'path'

import FMMode from 'frontmatter-markdown-loader/mode'
import hljs from 'highlight.js'

module.exports = {
  mode: 'spa',
  loading: {
    color: '#009688',
    height: '1px'
  },
  loadingIndicator: '@/components/loading.vue',
  css: [
    '@/static/css/style.css',
    '@/static/css/font-awesome.min.css'
  ],
  plugins: [
    { src: '@/plugins/inobounce.min.js', ssr: false },
    { src: '@/plugins/lazysizes.min.js', ssr: false },
  ],
  build: {
    extend (config) {
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'articles'),
          options: {
            markdownIt: {
              html: true,
              breaks: true,
              highlight(str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return hljs.highlight(lang, str).value
                  } catch (e) {
                    console.error(e)
                  }
                }
                return ''
              }
            },
            mode: [FMMode.VUE_COMPONENT],
            vue: { root: "markdown-body" }
          }
        }
      )
    }
  },
  generate: {
    routes: []
    .concat(
      fs.readdirSync(path.resolve(__dirname, 'articles'))
      .filter(filename => path.extname(filename) === '.md')
      .map(filename => `blog/${path.parse(filename).name}`)
    )
  }
}