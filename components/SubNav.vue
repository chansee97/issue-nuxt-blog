<script setup lang="ts">
import { getMilestones } from '@/api'

const { data: milestones } = await getMilestones()

const route = useRoute()

const catelog = computed(() => {
  return route.params.catelog ? Number(route.params.catelog) : null
})

const catelogName = computed(() => {
  const result = milestones.value.find(item => item.number === catelog.value)
  return result?.title
})

useHead({
  title: catelogName.value,
})
</script>

<template>
  <ul class="flex gap-1em mb-2em text-xl sm:text-3xl">
    <li
      class="cursor-pointer transition-opacity"
      :class="!catelog ? 'font-bold' : 'op-30 hover:op-70'"
      @click="$router.push('/blog')"
    >
      <span> ALL</span>
    </li>
    <li
      v-for="(item) in milestones" :key="item.id"
      class="cursor-pointer transition-opacity"
      :class="catelog === item.number ? ' font-bold' : 'op-30 hover:op-70'"
      @click="$router.push(`/blog/${item.number}`)"
    >
      <span> {{ item.title }}</span>
    </li>
  </ul>
</template>
