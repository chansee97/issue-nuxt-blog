<script setup lang="ts">
const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env
const repoIssuesPath = `https://github.com/${VITE_OWNER}/${VITE_BLOGS_REPO}/issues`
</script>

<template>
  <header class="max-w-70ch m-auto flex items-center justify-end gap-1.5em text-lg p-2em">
    <NuxtLink to="/blog" title="Blog" class="transition-opacity op-70 hover:op-100">
      Blog
    </NuxtLink>
    <NuxtLink to="/tags" title="Tags" class="transition-opacity op-70 hover:op-100">
      Tags
    </NuxtLink>
    <NuxtLink to="/" title="About" class="transition-opacity op-70 hover:op-100">
      About
    </NuxtLink>

    <span class="ml-auto" />

    <!-- <a
      :href="repoIssuesPath" target="_blank" title="RSS"
      class="i-icon-park-outline-rss transition-opacity op-70 hover:op-100"
    /> -->

    <a
      :href="repoIssuesPath" target="_blank" title="GitHub Issues"
      class="i-icon-park-outline-github transition-opacity op-70 hover:op-100"
    />
    <dark-mode class="transition-opacity op-70 hover:op-100" />
  </header>
</template>
