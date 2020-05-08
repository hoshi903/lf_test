<template>
  <div class="app-header color-wh bgcolor-bk">
    <div class="flex start">
      <span v-on:click="toggleLink" class="bars">
        <i class="fa fa-fw fa-bars"></i>
      </span>
      <div>
        <span v-on:click="runTop()" class="big">悦楽舎</span>
        <span>© 2002 hoshi</span>
      </div>
      <div>
        <span>others正式版予定</span>
      </div>
    </div>
  </div>
</template>