import colors from 'vuetify/es5/util/colors'
import { theme } from './config/vuetify.options'
import languages from './static/lang/languages'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - grab-clone',
    title: 'grab-clone',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      // { src: "https://code.jquery.com/jquery-migrate-1.2.1.min.js" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
      { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' },
    ],
    
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/vuetify-overide.scss',
    '~/assets/vendors/slick-carousel/slick.css',
    '~/assets/vendors/slick-carousel/slick-theme.css'
  ],

  loading: { color: theme.primary },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/i18n-config.js' },
    { src: '~/plugins/vue-scroll-nav', ssr: false },
    { src: '~/plugins/caroussel-config', ssr: false },
    { src: '~/plugins/flickity', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'default',
        breakpoints: {
          xsDown: 599,
          xsUp: 600,
          smDown: 992,
          smUp: 991,
          mdDown: 1279,
          mdUp: 1280,
          lgDown: 1919,
          lgUp: 1920,
          xl: Infinity
        }
      }
    ],
    [
      'nuxt-i18n',
      {
        // Options
        //to make it seo friendly remove below line and add baseUrl option to production domain
        seo: false,
        // baseUrl: 'https://my-nuxt-app.com',
        lazy: true,
        locales: languages,
        defaultLocale: 'en',
        vueI18n: {
          fallbackLocale: 'en',
        },
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
          alwaysRedirect: true
        },
        langDir: 'static/lang/'
      }
    ]
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/styles.scss'],
    optionsPath: './config/vuetify.options.js'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
