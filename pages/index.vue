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
    }
  }
</script>