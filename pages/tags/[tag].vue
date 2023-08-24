<script setup lang="ts">
import { getIssues } from '@/api'

const route = useRoute()
const tag = route.params.tag as string

const issues = tag ? await getIssues({ labels: tag }) : await getIssues()
</script>

<template>
  <div>
    <h1 class="text-xl sm:text-3xl mb-2em font-bold">
      <NuxtLink to="/tags">
        Tags
      </NuxtLink> /
      <span class="op-60">
        {{ tag }}
      </span>
    </h1>
    <ul>
      <IssueCell
        v-for="(issue, index) in issues" :key="issue.id"
        slide-enter :style="{ '--stagger': index + 1 }"
        :issue="issue"
      />
    </ul>
  </div>
</template>
