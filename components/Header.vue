<script setup lang="ts">
defineProps<{
  className?: string
}>()
</script>

<template>
  <header :class="className">
    <slot />
  </header>
</template>

<style scoped lang="sass">
header
  background: url('~/assets/img/background/index.jpg') center center / cover
  background-color: $secondary3
  color: white
  +flex-center
  flex-direction: column
  padding: 5rem 0 4rem
  min-height: 50vh
  &.news
    background-image: url('~/assets/img/background/news.jpg')
  &.faq
    background-image: url('~/assets/img/background/faq.jpg')
</style>
