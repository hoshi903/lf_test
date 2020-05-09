<template>
  <li class="border bgcolor-wh stripe article">
    <img :src="'/img/' + obj.id + '/_thumbnail.jpg'" alt="">
    <div class="big"><span>{{ obj.title }}</span></div>
    <div><span>{{ obj.description }}</span></div>
  </li>
</template>

<script>
  export default {
    props: {
      obj: {}
    }
  }
</script>