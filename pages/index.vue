<script setup lang="ts">
const { data } = useFetch('https://api.github.com/repos/chansee97/my-blogs/issues')
</script>

<template>
  <div>
    <header>
      <h1>文章</h1>
      <nav>
        <ul>
          <li v-for="issue in data" :key="issue.id">
            <NuxtLink :to="`/p/${issue.number}`">
              {{ issue.title }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>
