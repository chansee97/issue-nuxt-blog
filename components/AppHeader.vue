<script setup lang="ts">
const { VITE_OWNER } = import.meta.env
const repoIssuesPath = `https://github.com/${VITE_OWNER}`
</script>

<template>
  <header class="max-w-73ch m-auto flex items-center justify-end gap-5% text-lg p-2em p-x-12">
    <NuxtLink to="/blog/Blog" title="Blog" class="transition-opacity op-70 hover:op-100">
      Blog
    </NuxtLink>
    <NuxtLink to="/tags" title="Tags" class="transition-opacity op-70 hover:op-100">
      Tags
    </NuxtLink>
    <NuxtLink to="/" title="About" class="transition-opacity op-70 hover:op-100">
      About
    </NuxtLink>

    <span class="ml-auto" />

    <a
      href="/rss" target="_blank" title="RSS"
      class="transition-opacity op-70 hover:op-100 i-icon-park-outline-rss"
    />
    <a
      :href="repoIssuesPath" target="_blank" title="GitHub Issues"
      class="transition-opacity op-70 hover:op-100 i-icon-park-outline-github-one"
    />
    <dark-mode class="transition-opacity op-70 hover:op-100" />
  </header>
</template>
