<script setup>
import { getReadme } from '@/api'

const { data } = await getReadme()
</script>

<template>
  <section>
    <markdown :value="data" />
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
