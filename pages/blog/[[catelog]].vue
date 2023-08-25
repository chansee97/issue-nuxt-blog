<script setup lang="ts">
import { searchIssues } from '@/api'

const route = useRoute()
const catelog = route.params.catelog as string

useHead({
  title: catelog || null,
})

const { data } = catelog ? await searchIssues('', { milestone: catelog }) : await searchIssues('')

const searchValue = ref('')

async function handleSearch() {
  await searchIssues(searchValue.value)
}
</script>

<template>
  <div>
    <sub-nav />
    <div class="flex gap-1em mb-1.5em">
      <input
        v-model="searchValue"
        placeholder="Search post"
        class="flex-1 px-1em py-.2em outline-none rounded-md ring ring-gray:100 transition-colors focus:ring-gray-700"
      >
      <button
        class="bg-gray-300 hover:bg-gray-200 transition-colors rounded-md px-1em"
        @click="handleSearch"
      >
        Search
      </button>
    </div>

    <div class="text-center">
      共有{{ data.total_count }}篇文章
    </div>

    <ul>
      <IssueCell
        v-for="(issue, index) in data.items" :key="issue.id"
        slide-enter :style="{ '--stagger': index + 1 }"
        :issue="issue"
      />
    </ul>
  </div>
</template>
