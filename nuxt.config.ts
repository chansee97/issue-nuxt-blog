// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
  ],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', 'content': 'IE=edge' },
      ],
       script: [
        {
          src: '//sdk.51.la/js-sdk-pro.min.js?id=3F57lu6zMWXHeBL1&ck=3F57lu6zMWXHeBL1',
          id: 'LA_COLLECT',
        },
      ],
      noscript: [{ children: 'JavaScript is required' }],
      bodyAttrs: {
        class: 'font-sans',
      },
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '@/assets/styles/global.css',
    '@/assets/styles/var.css',
    '@/assets/styles/transition.css',
    '@/assets/styles/markdown.scss',
  ],
})
