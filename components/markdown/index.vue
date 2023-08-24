<script setup lang="ts">
import { md } from './markdown-it'

const props = defineProps<{
  value?: string
}>()

const result = computed(() => {
  return md.render(props.value || '暂无内容')
})
</script>

<template>
  <div class="prose" v-html="result" />
</template>
