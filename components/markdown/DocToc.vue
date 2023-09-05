<script setup lang="ts">
import { toc } from './markdown-it'
</script>

<template>
  <div
    class="absolute top-0 left-full h-full pl-2em hidden xl:block w-20em"
  >
    <div
      class="sticky top-14 w-25em max-h-70vh overflow-y-auto overscroll-contain op-30 hover:op-100 transition-opacity" v-html="toc.html || ''"
    />
  </div>
</template>
