export default defineNuxtRouteMiddleware((to, _from) => {
  useHead({
    title: to.path,
    titleTemplate: (titleChunk) => {
      const title = titleChunk?.replace(/^\/+/, '') || 'Blog'
      return title
    },
    meta: [
      {
        name: 'title',
        content: to.path,
      },
    ],
  })
})
