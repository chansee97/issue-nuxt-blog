<script setup lang="ts">
import { getIssue } from '@/api'

const route = useRoute()
const { id } = route.params

const data = await getIssue(id as string)
</script>

<template>
  <div>
    <markdown :value="data?.body" />
  </div>
</template>
