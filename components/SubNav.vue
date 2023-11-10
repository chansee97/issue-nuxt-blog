<script setup lang="ts">
import { getMilestones } from '@/api'

const { data: milestones } = await getMilestones()

const route = useRoute()

const catelog = computed(() => {
  return route.params.catelog ? String(route.params.catelog) : null
})
</script>

<template>
  <nav>
    <ul class="flex gap-1em mb-1em text-2xl sm:text-4xl">
      <li
        class="cursor-pointer transition-opacity"
        :class="!catelog ? 'font-bold' : 'op-30 hover:op-70'"
        @click="$router.push('/blog')"
      >
        <span> All</span>
      </li>
      <li
        v-for="(item) in milestones" :key="item.id"
        class="cursor-pointer transition-opacity"
        :class="catelog === item.title ? ' font-bold' : 'op-30 hover:op-70'"
        @click="$router.push(`/blog/${item.title}`)"
      >
        <span> {{ item.title }}</span>
      </li>
    </ul>
  </nav>
</template>
