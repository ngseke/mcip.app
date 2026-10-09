<script setup lang="ts">
const navbar = [
  { name: 'News', to: '/news' },
  { name: 'FAQ', to: '/faq' },
  { name: 'Payment', to: '/ecpay', active: true },
]

const description = '樂台計畫與綠界科技（ECPay）合作，為大專院校音樂賽事提供線上報名繳費服務。參賽者完成報名後即可使用虛擬 ATM 帳號轉帳繳費，繳費狀態與通知全程自動化處理。'

useHead({
  title: '金流服務說明',
  meta: [
    { hid: 'description', name: 'description', content: description },
    { hid: 'og:description', property: 'og:description', content: description },
    { hid: 'og:title', property: 'og:title', content: '金流服務說明 - 樂台計畫' },
  ],
})

const steps = [
  {
    no: '01',
    tag: '參賽者',
    title: '完成報名，取得繳費代碼',
    body: '透過樂台計畫 LINE 官方帳號完成報名後，系統將提供專屬虛擬 ATM 繳費帳號，有效期限為 3 日。',
  },
  {
    no: '02',
    tag: '參賽者',
    title: 'ATM／網路銀行轉帳',
    body: '請依頁面顯示之應繳金額，於期限內以 ATM 或網路銀行轉帳繳費。',
  },
  {
    no: '03',
    tag: '自動',
    title: '繳費狀態即時更新',
    body: '綠界確認入帳後，系統自動更新繳費狀態，主辦院校可於管理後台即時查看。',
  },
  {
    no: '04',
    tag: '自動',
    title: 'LINE 推播繳費成功通知',
    body: '繳費完成後，參賽者將收到 LINE 推播通知，亦可隨時於 App 查詢繳費紀錄。',
  },
  {
    no: '05',
    tag: '院校',
    title: '款項撥付至院校帳戶',
    body: '報名截止後 3–5 個工作天內，款項將匯入主辦院校指定帳戶。',
  },
]

const notes = [
  {
    label: '繳費方式',
    title: '虛擬 ATM 帳號轉帳',
    body: '可使用實體 ATM 或網路銀行轉帳，須啟用「非約定轉帳」功能；虛擬帳號不適用臨櫃匯款。',
  },
  {
    label: '繳費期限',
    title: '取得代碼後 3 日內',
    body: '逾期帳號即失效，須重新報名以取得新的繳費代碼。',
  },
]
</script>

<template>
  <div>
    <TheNavbar :items="navbar" />
    <main class="ecpay">
      <Header className="ecpay">
        <SubpageTitle zh="金流服務說明" en="Payment" />
      </Header>

      <div class="container">
        <Breadcrumb :items="[{ name: `樂台計畫`, url: `/` }, { name: `金流服務說明` }]" />
      </div>

      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-9">
            <section class="row align-items-center">
              <div class="col-12 col-md-7">
                <h2>與綠界科技合作的線上報名繳費</h2>
                <p class="lead">
                  {{ description }}
                </p>
              </div>
              <div class="col-12 col-md-5">
                <div class="fee-card">
                  <div class="label">
                    平台服務費
                  </div>
                  <div class="amount">
                    <span class="currency">TWD</span>
                    <span class="number">15</span>
                    <span class="unit">元 / 每筆報名</span>
                  </div>
                  <p>
                    每筆報名表單繳費成功後，樂台計畫收取新臺幣 15 元服務費。未完成繳費或繳費逾期之報名，不收取任何費用。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2>繳費流程</h2>
              <p class="subtitle">
                從報名到款項入帳，共五個步驟
              </p>
              <ol class="steps">
                <li v-for="step in steps" :key="step.no" class="step">
                  <div class="head">
                    <span class="no">STEP {{ step.no }}</span>
                    <span class="tag">{{ step.tag }}</span>
                  </div>
                  <h3>{{ step.title }}</h3>
                  <p>{{ step.body }}</p>
                </li>
              </ol>
            </section>

            <section>
              <h2>繳費須知</h2>
              <div class="row">
                <div v-for="note in notes" :key="note.label" class="col-12 col-md-6">
                  <div class="note-card">
                    <div class="label">
                      {{ note.label }}
                    </div>
                    <h3>{{ note.title }}</h3>
                    <p>{{ note.body }}</p>
                  </div>
                </div>
              </div>
              <p class="more">
                更多繳費與退費的常見疑問，請參閱
                <NuxtLink to="/faq#金流合作院校---繳費相關">
                  常見問題
                </NuxtLink>。
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="sass">
main.ecpay
  background-color: #f8f8f8

section
  +py(2.5rem)
  &:not(:last-child)
    border-bottom: solid 1px #ddd

h2
  font-size: 1.75rem
  font-weight: 700
  margin-bottom: .75rem

h3
  font-size: 1.125rem
  font-weight: 700
  margin-bottom: .5rem

p
  color: #555
  margin-bottom: 0

.lead
  font-size: 1rem
  line-height: 1.9

.subtitle
  color: #888
  margin-bottom: 1.5rem

.fee-card
  background-color: $black
  color: white
  border-radius: 1rem
  padding: 1.75rem
  box-shadow: $big-btn-shadow
  @include media-breakpoint-down(sm)
    margin-top: 2rem
  .label
    font-size: .85rem
    color: rgba(white, .7)
    letter-spacing: 1px
  .amount
    display: flex
    align-items: baseline
    flex-wrap: wrap
    +my(.5rem)
    .currency
      font-size: 1rem
      color: rgba(white, .7)
      margin-right: .5rem
    .number
      font-size: 3.5rem
      font-weight: 700
      line-height: 1
    .unit
      font-size: .9rem
      color: rgba(white, .7)
      margin-left: .5rem
  p
    color: rgba(white, .8)
    font-size: .85rem
    line-height: 1.8
    border-top: solid 1px rgba(white, .2)
    padding-top: 1rem
    margin-top: 1rem

.steps
  list-style: none
  padding: 0
  margin: 0
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))
  gap: .75rem

.step
  background-color: white
  border: solid 1px #e5e5e5
  border-radius: .75rem
  padding: 1.25rem
  .head
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: .75rem
  .no
    font-size: .8rem
    font-weight: 700
    letter-spacing: 1px
    color: $primary
  .tag
    font-size: .75rem
    color: #666
    background-color: #f0f0f0
    border-radius: 100rem
    padding: .15rem .6rem
  p
    font-size: .9rem
    line-height: 1.8

.note-card
  background-color: white
  border: solid 1px #e5e5e5
  border-radius: .75rem
  padding: 1.5rem
  height: 100%
  @include media-breakpoint-down(sm)
    margin-bottom: .75rem
  .label
    font-size: .85rem
    color: #888
    margin-bottom: .5rem
  p
    font-size: .9rem
    line-height: 1.8

.more
  margin-top: 1.5rem
  font-size: .9rem
  a
    color: $primary
    +floating-link
</style>
