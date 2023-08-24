<script setup lang="ts">
import { getIssues, searchIssues } from '@/api'

const route = useRoute()
const catelog = route.params.catelog as string

let issues = catelog ? await getIssues({ milestone: catelog }) : await getIssues()

const searchValue = ref('')

async function handleSearch() {
  issues = await searchIssues(searchValue.value)
}
</script>

<template>
  <div>
    <nav>
      <sub-nav />
    </nav>
    <div class="flex gap-1em mb-1em">
      <input
        v-model="searchValue"
        placeholder="Search post title / description / tag"
        class="flex-1 px-1em py-.5em outline-none rounded-md ring ring-gray:100 focus:ring-gray-700"
      >
      <button
        class="bg-gray-300 hover:bg-gray-200 rounded-md px-1em"
        @click="handleSearch"
      >
        Search
      </button>
    </div>

    <ul>
      <IssueCell
        v-for="(issue, index) in issues" :key="issue.id"
        slide-enter :style="{ '--stagger': index + 1 }"
        :issue="issue"
      />
    </ul>
  </div>
</template>
