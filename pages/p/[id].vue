<script setup lang="ts">
import { getIssue } from '@/api'

const route = useRoute()
const { id } = route.params

const { data } = await getIssue(id as string)

useHead({
  title: data?.value.title,
})
</script>

<template>
  <div>
    <markdown :issue="data" />
  </div>
</template>
