<script setup>
import { getReadme } from '@/api'

const data = await getReadme()
</script>

<template>
  <section>
    <markdown :value="data" />
  </section>
</template>
