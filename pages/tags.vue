<script setup lang="ts">
import { getIssues, getTags } from '@/api'

useHead({
  title: 'Tags',
})

const { data: tags } = await getTags()

const issues = ref()
async function fetchIssues(tag: string) {
  // 防止部分文章无动画
  issues.value = []
  const { data } = await getIssues({ labels: tag })
  issues.value = data.value
}
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
      class="px-2 rd-1 cursor-pointer"
      @click="fetchIssues(tag.name)"
    >
      #{{ tag.name }}
    </li>
  </ul>
  <ul class="mt-2em">
    <IssueCell
      v-for="(issue, index) in issues" :key="issue.id"
      slide-enter :style="{ '--stagger': index + 1 }"
      :issue="issue"
    />
  </ul>
</template>
