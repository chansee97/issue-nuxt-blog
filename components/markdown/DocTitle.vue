<script setup lang="ts">
import { formattedDate, getReadTime } from '@/utils'

const { issue } = defineProps(['issue'])
</script>

<template>
  <div>
    <h1>{{ issue.title }}  </h1>

    <div class="op-70 mb-4em">
      <!-- Time -->
      <div class="flex justify-between">
        <span class="flex items-center">
          <div class="i-icon-park-outline-calendar m-r-2" /> {{ formattedDate(issue.created_at) }}
          <div class="i-icon-park-outline-timer m-l-4 m-r-2" /> {{ getReadTime(issue.body) }} mins read
        </span>
        <a :href="issue.html_url" target="_blank">See this issue <div class="i-icon-park-outline-arrow-right-up" /></a>
      </div>

      <!-- Tags -->
      <div class="flex gap-2 m-y-0.5em">
        <div
          v-for="label in issue.labels" :key="label.id"
          :style="{ backgroundColor: `#${label.color}77` }"
          class="px-2 rd-1 cursor-pointer"
          @click="$router.push(`/tags/${label.name}`)"
        >
          # {{ label.name }}
        </div>
      </div>
    </div>
  </div>
</template>
