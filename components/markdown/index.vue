<script setup lang="ts">
import type { Issue } from 'api/type'
import { md } from './markdown-it'
import DocTitle from './DocTitle.vue'
import DocFooter from './DocFooter.vue'

const props = defineProps<{
  issue?: Issue
}>()

const mdContent = computed(() => {
  return md.render(props.issue?.body || '暂无内容')
})
</script>

<template>
  <div class="prose slide-enter-content">
    <!-- 文章页头 -->
    <DocTitle :issue="props.issue" />

    <!-- 文章正文 -->
    <div v-html="mdContent" />

    <!-- 文章底部 -->
    <DocFooter :issue="props.issue" />
  </div>
</template>

<style lang="scss">
@use './markdown.scss'
</style>
