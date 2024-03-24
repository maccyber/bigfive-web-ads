import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify']
  },
  ssr: true,
  modules: [
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@vite-pwa/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@pinia/nuxt',
    'nuxt-gtag',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error 18048
        config.plugins.push(vuetify({ autoImport: true }))
      })
    }
  ],
  typescript: {
    typeCheck: true
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },
  site: {
    url: 'https://bigfive-test.com'
  },
  pwa: {
  },
  gtag: {
    id: 'G-DKM3FF6CR0'
  },
  googleFonts: {
    families: {
      'Passion One': true
    }
  },
  i18n: {
    compilation: {
      strictMessage: false
    },
    locales: [
      {
        name: 'Norsk',
        code: 'no',
        iso: 'nb-NO',
        file: 'nb-NO.js',
        dir: 'ltr'
      },
      {
        name: 'Dansk',
        code: 'da',
        iso: 'da',
        file: 'da.js',
        dir: 'ltr'
      },
      {
        name: 'Svenska',
        code: 'sv',
        iso: 'sv',
        file: 'sv.js',
        dir: 'ltr'
      },
      {
        name: 'Arabic',
        code: 'ar',
        iso: 'ar',
        file: 'ar.js',
        dir: 'rtl'
      },
      {
        name: 'Deutsch',
        code: 'de',
        iso: 'de',
        file: 'de.js',
        dir: 'ltr'
      },
      {
        name: 'Finnish',
        code: 'fi',
        iso: 'fi',
        file: 'fi.js',
        dir: 'ltr'
      },
      {
        name: 'Spanish',
        code: 'es',
        iso: 'es',
        file: 'es.js',
        dir: 'ltr'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        dir: 'ltr'
      },
      {
        name: 'Hindi',
        code: 'hi',
        iso: 'hi',
        file: 'hi.js',
        dir: 'ltr'
      },
      {
        name: 'French',
        code: 'fr',
        iso: 'fr',
        file: 'fr.js',
        dir: 'ltr'
      },
      {
        name: 'Russian',
        code: 'ru',
        iso: 'ru',
        file: 'ru.js',
        dir: 'ltr'
      },
      {
        name: 'Simplified Chinese',
        code: 'zh-Hans',
        iso: 'zh-Hans',
        file: 'zh-Hans.js',
        dir: 'ltr'
      },
      {
        name: 'Bahasa Indonesia',
        code: 'id',
        iso: 'id',
        file: 'id.js',
        dir: 'ltr'
      },
      {
        name: 'Ukrainian',
        code: 'uk',
        iso: 'uk',
        file: 'uk.js',
        dir: 'ltr'
      },
      {
        name: 'Japanese',
        code: 'ja',
        iso: 'ja',
        file: 'ja.js',
        dir: 'ltr'
      },
      {
        name: 'Polish',
        code: 'pl',
        iso: 'pl',
        file: 'pl.js',
        dir: 'ltr'
      },
      {
        name: 'Brazilian Portuguese',
        code: 'pt',
        iso: 'pt-br',
        file: 'pt-BR.js',
        dir: 'ltr'
      },
      {
        name: 'Italian',
        code: 'it',
        iso: 'it',
        file: 'it.js',
        dir: 'ltr'
      },
      {
        name: 'Icelandic',
        code: 'is',
        iso: 'is',
        file: 'is.js',
        dir: 'ltr'
      },
      {
        name: 'Thai',
        code: 'th',
        iso: 'th',
        file: 'th.js',
        dir: 'ltr'
      }
    ],
    baseUrl: 'https://bigfive-test.com',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en'
    }
  }
})
