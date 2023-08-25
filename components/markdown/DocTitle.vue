<script setup lang="ts">
import { formattedDate } from '@/utils'

const { issue } = defineProps(['issue'])
</script>

<template>
  <div>
    <h1>{{ issue.title }}  </h1>
    <div class="op-50 mb-4em">
      <div>
        <!-- Time -->
        {{ formattedDate(issue.created_at) }}

        <!-- Tags -->
        <div class="flex gap-2">
          <NuxtLink
            v-for="label in issue.labels" :key="label.id" :to="`/tags/${label.name}`"
          >
            #{{ label.name }}
          </NuxtLink>
        </div>

        <!-- GO issue -->
        <div>
          <div class="i-simple-icons-github" />
          <a :href="issue.html_url" target="_blank"> Go issue </a>
        </div>
      </div>
    </div>
  </div>
</template>
