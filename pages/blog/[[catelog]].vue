<script setup lang="ts">
import { getIssues } from '@/api'

const route = useRoute()
const catelog = route.params.catelog as string

const issues = catelog ? await getIssues({ milestone: catelog }) : await getIssues()
</script>

<template>
  <div>
    <nav>
      <sub-nav />
    </nav>
    <ul>
      <IssueCell
        v-for="(issue, index) in issues" :key="issue.id"
        slide-enter :style="{ '--stagger': index + 1 }"
        :issue="issue"
      />
    </ul>
  </div>
</template>
