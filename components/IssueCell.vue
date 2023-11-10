<script setup lang="ts">
import { formattedDate } from '@/utils'

const { issue } = defineProps(['issue'])
</script>

<template>
  <li>
    <NuxtLink
      :to="`/p/${issue.number}`"
      class="w-fit mb-6 flex flex-col transition-opacity op-70 hover:op-100 md:(gap-2 flex-row items-center)"
    >
      <span class="text-lg">
        {{ issue.title }}
      </span>
      <span class="text-sm op-70">
        {{ formattedDate(issue.created_at) }}
      </span>
    </NuxtLink>
  </li>
</template>
