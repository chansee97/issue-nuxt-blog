<script setup>
// This will work in both `<script setup>` and `<script>`
// definePageMeta({
//   layout: 'custom',
// })
const { VITE_USER } = import.meta.env
const { data } = await useFetch(`https://raw.githubusercontent.com/${VITE_USER}/${VITE_USER}/main/.github/readme.md`)
</script>

<template>
  <section>
    <markdown :value="data" />
  </section>
</template>
