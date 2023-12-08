<script setup lang="ts">
import { searchIssues } from '@/api'
import type { IssueResult } from '@/api/type'

const route = useRoute()
const catelog = route.params.catelog as string

useHead({
  title: catelog || 'All',
})

const searchResult = ref<IssueResult>()

async function handleSearch(q: string) {
  const { data } = catelog ? await searchIssues(q, { milestone: catelog }) : await searchIssues(q)
  searchResult.value = data.value
}

handleSearch('')
</script>

<template>
  <div>
    <sub-nav />
    <div class="flex items-center m-y-2em">
      <div class="flex-auto border-b-1 border-dashed border-current op-30" />
      <div class="m-x-1em">
        A total of <b> {{ searchResult?.total_count || '?' }} </b> articles
      </div>
      <div class="flex-auto border-b-1 border-dashed border-current op-30" />
    </div>

    <ul>
      <IssueCell
        v-for="(issue, index) in searchResult?.items" :key="issue.id"
        slide-enter :style="{ '--stagger': index + 1 }"
        :issue="issue"
      />
    </ul>
  </div>
</template>
