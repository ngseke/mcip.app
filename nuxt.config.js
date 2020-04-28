
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant-TW'
    },
    titleTemplate: titleChunk => (titleChunk)
      ? `${titleChunk} - 樂台計畫 - 大專院校音樂賽事平台`
      : '樂台計畫 - 大專院校音樂賽事平台',
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'author', content: 'Huang Xingqiao' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:description', property: 'og:description', content: process.env.npm_package_description || '' },
      { hid: 'og:image', property: 'og:image', content: '/og-image.png' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: '樂台計畫 - 大專院校音樂賽事平台' },
      { hid: 'og:locale', property: 'og:locale', content: 'zh_tw' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,500,700,900&subset=chinese-traditional,japanese' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Overpass:300,400,600&display=swap' }
    ],
    script: [
      { src: '//static.zotabox.com/9/f/9fccee64ff3ae80ada19da0e463cce9c/widgets.js', async: true },
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-134521649-1', async: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#00B9E6' },
  /*
  ** Global CSS
  */
  css: [
    './assets/sass/style.sass'
  ],
  styleResources: {
    sass: [
      './assets/sass/_functions.sass',
      './assets/sass/_variables.sass'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    '~/plugins/font-awesome',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-coffeescript-module',
    'vue-scrollto/nuxt',
    'nuxt-fontawesome',
  ],
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
