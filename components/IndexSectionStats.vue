<script setup lang="ts">
const date = '截至 2022 年 2 月'
const list = [
  {
    label: '樂台計畫總用戶數',
    value: 6000,
    isApproximate: true,
  },
  {
    label: '合作院校社團',
    value: 26,
    suffix: '所',
  },
  {
    label: '累計協辦賽次',
    value: 60,
    isApproximate: true,
  },
]
</script>

<template>
  <section>
    <div class="container">
      <div class="row justify-content-around">
        <div v-for="item in list" :key="item.label" class="col-auto">
          <div class="count-to">
            <div class="number">
              {{ item.value }}{{ item.isApproximate ? "+" : "" }}
            </div>
            <span v-if="item.suffix" class="suffix">{{ item.suffix }}</span>
            <div class="label">
              {{ item.label }}
            </div>
          </div>
        </div>
        <div class="col-12 text-right">
          <small class="date">{{ date }}</small>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.container
  position: relative
  overflow: visible !important
  &::before
    content: ''
    position: absolute
    background: center / contain no-repeat url('~/assets/img/peep/deco1.svg')
    +wh(8rem)
    left: -6rem
    top: -4rem
    @include media-breakpoint-down(xs)
      display: none

.count-to
  margin-bottom: 1rem

.number
  display: inline-block
  font-size: 3.5rem
  font-family: roboto, Helvetica, Arial
  font-weight: 900
  margin: 0
  padding: 0
.suffix
  margin-left: .5rem
  font-size: 1.5rem
  font-weight: 500
.label
  font-weight: 500
  margin-top: -.5rem
  text-align: center

.date
  opacity: .7
</style>
