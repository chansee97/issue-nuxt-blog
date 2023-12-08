<script setup lang="ts">
import { formattedDate } from '@/utils'

const { issue } = defineProps(['issue'])
</script>

<template>
  <li>
    <NuxtLink
      :to="`/p/${issue.number}`"
      class="w-full mb-6 flex flex-col transition-opacity op-70 hover:(op-100) md:(gap-2 flex-row items-center)"
    >
      <span class="text-sm op-70 font-mono">
        {{ formattedDate(issue.created_at) }} <span class="display-none md:display-inline">·</span>
      </span>
      <span class="text-lg">
        {{ issue.title }}
      </span>

      <div v-show="issue.comments" class="m-l-auto display-none md:display-block">
        <div class="i-icon-park-outline-comment" /> {{ issue.comments }}
      </div>
    </NuxtLink>
  </li>
</template>
