<script setup lang="ts">
import { getTags } from '@/api'

useHead({
  title: 'Tags',
})

const { data: tags } = await getTags()
</script>

<template>
  <h1 class="text-xl sm:text-3xl mb-2em font-bold">
    Tags
  </h1>
  <ul class="flex gap-1em flex-wrap">
    <li
      v-for="(tag, index) in tags" :key="tag.id"
      slide-enter
      :style="{ '--stagger': index + 1, 'backgroundColor': `#${tag.color}66` }"
      class="px-2 rd-1"
    >
      <NuxtLink :to="`/tags/${tag.name}`" class="flex gap-2">
        <span class="hover">#{{ tag.name }}</span>
      </NuxtLink>
    </li>
  </ul>
</template>
