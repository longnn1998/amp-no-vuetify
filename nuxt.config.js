export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', '@nuxtjs/amp'],
  pwa: {
    meta: {
      title: 'BMIC COMPANY',
      author: 'LongNN',
    },
    manifest: {
      name: 'BMIC Modules',
      short_name: 'BMIC Modules',
      lang: 'en',
      display: 'fullscreen',
      start_url: '/',
      theme_color: '#e76f51',
      background_color: '#e76f51',
      icons: [
        {
          src: './static/icon.png',
          sizes: '196x196',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },
  amp: {
    origin: process.env.ORIGIN_URL || 'http://localhost:3000',
    mode: 'hybrid',
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
