<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const description = '請在LINE應用程式上開啟「好友」分頁，點選畫面右上方用來加入好友的圖示，接著點選「行動條碼」，然後掃描此行動條碼'
const title = '加入樂台計畫 LINE App'

useHead({
  title,
  meta: [
    { 'http-equiv': 'refresh', content: '0;url=https://line.me/R/ti/p/11FZvoRuwx' },
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:title', property: 'og:title', content: title },
    { hid: 'og:description', property: 'og:description', content: description },
  ],
})
</script>

<template>
  <main>
    <img class="logo" src="@/assets/img/logo/logo_secondary-small-black.svg">
    <FontAwesomeIcon class="icon" :icon="faCircleNotch" spin />
    正在導向至 LINE...
    <br>
    <a href="https://line.me/R/ti/p/11FZvoRuwx">若未能成功導向請點擊此連結</a>
  </main>
</template>

<style scoped lang="sass">
main
  min-height: 70vh
  color: #666
  +flex-center
  .icon
    margin-bottom: .5rem

.logo
  +wh(12rem, auto)
  margin-bottom: 2rem
</style>
