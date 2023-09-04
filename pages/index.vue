<script setup lang="ts">
import { getReadme } from '@/api'

const { data } = await getReadme()

const readme = decodeURIComponent(encodeURI(atob(data.value.content)))
</script>

<template>
  <section>
    <markdown :issue="readme" />
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
}
</style>
