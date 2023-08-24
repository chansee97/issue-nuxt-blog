<script setup lang="ts">
import { formattedDate } from '@/utils'

const { issue } = defineProps(['issue'])
</script>

<template>
  <li

    class="text-lg mb-6 mt-2 flex flex-col transition-opacity hover:op-70 md:(gap-2 flex-row items-center)"
  >
    <NuxtLink :to="`/p/${issue.number}`">
      {{ issue.title }}
    </NuxtLink>
    <span class="text-sm op-70">
      {{ formattedDate(issue.created_at) }}
    </span>
  </li>
</template>
