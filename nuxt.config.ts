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
          src: 'https://www.googletagmanager.com/gtag/js?id=G-MEC21CTMC9',
          async: '',
        },
        {
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-MEC21CTMC9');
          `,
        },
      ],
      noscript: [{ children: 'JavaScript is required' }],
      bodyAttrs: {
        class: 'font-sans',
      },
    },
  },
  css: [
    '@unocss/reset/tailwind-compat.css',
    '@/assets/styles/global.css',
    '@/assets/styles/var.css',
    '@/assets/styles/transition.css',
    '@/assets/styles/markdown.scss',
  ],
  devServer: {
    port: 4000,
  },
})
