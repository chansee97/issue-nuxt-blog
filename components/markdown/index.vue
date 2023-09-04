<script setup lang="ts">
import type { Issue } from 'api/type'

import DocTitle from './DocTitle.vue'
import DocFooter from './DocFooter.vue'
import DocRender from './DocRender.vue'
import DocToc from './DocToc.vue'

const props = defineProps<{
  issue: Issue | string
}>()

const isRaw = typeof props.issue === 'string'
</script>

<template>
  <div class="prose slide-enter-content relative">
    <!-- 文章页头 -->
    <DocTitle v-if="!isRaw" :issue="issue" />

    <!-- 文章目录 -->
    <DocToc />

    <!-- 文章正文 -->
    <DocRender :content="isRaw ? issue : issue?.body" />

    <!-- 文章底部 -->
    <DocFooter v-if="!isRaw" :issue="issue" />
  </div>
</template>

<style lang="scss">
@use './markdown.scss'
</style>
