<script setup lang="ts">
import { searchIssues } from '@/api'

const route = useRoute()
const catelog = route.params.catelog as string

useHead({
  title: catelog || 'All',
})

const searchResult = ref()
const issueList = ref()

async function handleSearch(q: string) {
  const { data } = catelog ? await searchIssues(q, { milestone: catelog }) : await searchIssues(q)
  searchResult.value = data.value
  issueList.value = insertYearToPosts(data.value?.items)
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
      <template v-for="(issue, index) in issueList" :key="issue.id">
        <div
          v-if="issue.isMarked" class="relative pointer-events-none select-none h-20"
          slide-enter :style="{ '--stagger': index + 1 }"
        >
          <span
            class="text-8em font-bold font-mono op-15 absolute -top-0.2em -left-0.3em color-transparent text-stroke-2 text-stroke-hex-aaa"
          >{{ issue.year }}</span>
        </div>
        <IssueCell
          v-else
          slide-enter :style="{ '--stagger': index + 1 }"
          :issue="issue"
        />
      </template>
    </ul>
  </div>
</template>
