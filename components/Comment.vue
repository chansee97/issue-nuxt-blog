<script setup lang="ts">
const { id } = defineProps(['id'])
const { VITE_OWNER, VITE_BLOGS_REPO } = import.meta.env
const page = ref('')

onMounted(() => {
  const isDark = document.documentElement.classList.contains('dark')
  const config = {
    url: window.location.href,
    origin: window.location.origin,
    pathname: window.location.pathname,
    repo: `${VITE_OWNER}/${VITE_BLOGS_REPO}`,
    issueNumber: id,
    theme: isDark ? 'github-dark' : 'github-light',
    crossorigin: 'anonymous',
  }
  page.value = `https://utteranc.es/utterances.html?async=&src=https://utteranc.es/client.js&repo=${config.repo}&theme=${config.theme}&crossorigin=${config.crossorigin}&url=${config.url}&origin=${config.origin
    }&pathname=${config.pathname}&issue-number=${config.issueNumber}`
})
</script>

<template>
  <iframe
    class="w-full h-fit min-h-lg"
    title="评论系统"
    scrolling="no"
    allowtransparency="true"
    :src="page"
  />
</template>
