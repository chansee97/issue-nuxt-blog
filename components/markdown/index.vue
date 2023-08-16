<script setup lang="ts">
import MarkdownIt from 'markdown-it'

const props = defineProps<{
  value?: string
}>()
const md = new MarkdownIt()
const result = md.render(props.value)
</script>

<template>
  <div v-html="result" />
</template>
