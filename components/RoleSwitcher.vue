<script setup lang="ts">
import { type Role } from '~/types/Role'

defineProps<{
  modelValue: number
  list: Role[]
}>()

defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

<template>
  <div class="switcher">
    <span class="label">我是</span>
    <template v-for="(item, index) in list" :key="item.value">
      <a
        href="#"
        :class="{ active: modelValue === item.value }"
        @click.prevent="$emit('update:modelValue', item.value)"
      >{{ item.name }}</a>
      <div v-if="index !== list.length - 1" class="divider" />
    </template>
  </div>
</template>

<style scoped lang="sass">
.switcher
  display: inline-flex
  flex-wrap: wrap
  align-items: center
  margin-bottom: 2rem

.label
  color: rgba($black, .7)
  margin-right: .75rem

a
  +floating-link
  color: $black
  font-weight: 700
  font-size: 1.25rem
  &.active
    color: $primary
    color: $secondary3
    text-decoration: underline

.divider
  color: rgba($black, .5)
  margin: .5rem
  font-size: 1rem
  &:after
    content: ' | '
</style>
