export default defineNuxtRouteMiddleware((_to, _from) => {
  useHead({
    titleTemplate: (productCategory) => {
      return productCategory
        ? `${productCategory} - Rock Chen`
        : 'Rock Chen'
    },
  })
})
