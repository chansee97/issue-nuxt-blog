<script setup lang="ts">
import DocRender from '@/components/markdown/DocRender.vue'
import { getReadme } from '@/api'

const { data } = await getReadme()

const readme = decodeURIComponent(escape(atob(data.value.content)))
</script>

<template>
  <section class="prose">
    <DocRender :content="readme" />
  </section>
</template>

<style>
.skill-wrapper{
  display: flex;
  flex-wrap: wrap;
  gap:0.5em;
  margin-bottom: 0.5em;
}
.skill-wrapper > img{
  border-radius: 3px;
  margin: 3px;
}
</style>
