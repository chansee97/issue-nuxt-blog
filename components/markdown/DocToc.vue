<script setup lang="ts">
import { toc } from './markdown-it'
</script>

<template>
  <div
    class="absolute top-0 left-full h-full pl-2em hidden xl:block w-20em"
  >
    <div v-html="toc.html || ''" />
  </div>
</template>
