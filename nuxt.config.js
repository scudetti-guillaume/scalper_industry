import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  server: {
    host: '0.0.0.0',
  },
  ssr: false,
  target: 'static',
  router: {
    base: '/' ,
    // base: '/scalper-final/' ,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: 'scalperchirurgical.com',
    title: 'scalperchirurgical.com',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=yes' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;500;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Great+Vibes&display=swap',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' },
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_and_default',
    langDir: './locales/',
    lazy: false,
    vueI18n: {
      fallbackLocale: 'fr',
    },
    detectBrowserLanguage: {
      useCookie: true, // Utilisez un cookie pour stocker la langue détectée
      alwaysRedirect: false, // Rediriger toujours vers la version détectée
      fallbackLocale: 'fr', // Langue par défaut en cas de détection échouée
    },
  },

  vuetify: {
    breakpoint: {
      thresholds: {
        // xs: 600, 
        xss:405,
        sm: 1235, 
        // md: 1280, 
        // lg: 1920,
      },
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
