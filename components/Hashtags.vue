<script setup lang="ts">
const list = ['報名繳費', '即時賽況', '賽事資訊']
</script>

<template>
  <ul class="p-0 m-0">
    <li
      v-for="item in list"
      :key="item"
      class="hashtag"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style scoped lang="sass">
.hashtag
  display: inline-block
  position: relative
  margin-right: 1rem
  color: white
  font-style: oblique
  &::before
    content: '#'
    display: inline-block
    font-weight: bold
    opacity: .5
    color: $secondary1
    transform: scale(1.3)
</style>
