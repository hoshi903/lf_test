<template>
  <div class="link-wrapper flex around">
    <span onClick="window.location.href = 'https://903.ch'" class="border bgcolor-wh stripe">top</span>
    <span onClick="window.location.href = 'https://903.ch?s=ex2'" class="border bgcolor-wh stripe">about</span>
    <span onClick="window.location.href = 'https://903.ch?s=ex3'" class="border bgcolor-wh stripe">works</span>
    <nuxt-link to="/" class="color border bgcolor-wh stripe">others</nuxt-link>
  </div>
</template>