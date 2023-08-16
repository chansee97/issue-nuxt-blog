<script setup lang="ts">
const route = useRoute()
const { id } = route.params

const { VITE_USER, VITE_BLOGS_REPO } = import.meta.env
interface IIssues {
  body: string
}
const { data } = await useFetch<IIssues>(`https://api.github.com/repos/${VITE_USER}/${VITE_BLOGS_REPO}/issues/${id}}`)
</script>

<template>
  <div>
    <markdown :value="data?.body" />
  </div>
</template>
