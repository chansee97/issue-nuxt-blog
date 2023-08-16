<script setup lang="ts">
import { md } from './markdown-it'

const props = defineProps<{
  value?: string
}>()

const result = md.render(props.value || '')
</script>

<template>
  <div class="prose" v-html="result" />
</template>
