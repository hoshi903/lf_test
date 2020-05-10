<template>
 <div class="container">
    <h1 v-if="error.statusCode === 404">ページが見つかりません</h1>
    <h1 v-else>エラーが発生しました</h1>
    <nuxt-link to="/">戻る</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'shadows-frame'
}
</script>