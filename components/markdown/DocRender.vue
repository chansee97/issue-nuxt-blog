<script setup lang="ts">
import { md } from './markdown-it'

const { content } = defineProps(['content'])

const mdContent = md.render(content || '暂无内容')
</script>

<template>
  <div v-html="mdContent" />
</template>

<style>

</style>
