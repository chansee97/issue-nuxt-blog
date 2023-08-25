export default defineNuxtRouteMiddleware((to, _from) => {
  useHead({
    titleTemplate: (productCategory) => {
      return productCategory
        ? `${productCategory} - Rock Chen`
        : 'Rock Chen'
    },
    meta: [
      {
        name: 'title',
        content: to.path,
      },
    ],
  })
})
