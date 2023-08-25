<script setup lang="ts">
const { issue } = defineProps(['issue'])
</script>

<template>
  <NuxtLink :to="issue.html_url" target="_blank">
    To Github Issues Comment <i class="i-icon-park-outline-arrow-right-up" />
  </NuxtLink>
  <div class="h-6em flex items-center">
    <div class="bg-gray-300:50 h-1px w-full" />
  </div>
</template>
