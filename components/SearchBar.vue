<script setup lang="ts">
const emit = defineEmits<{
  search: [q: string] // 具名元组语法
}>()

const q = ref('')

function handleSearch() {
  emit('search', q.value)
}
</script>

<template>
  <div class="flex gap-1em">
    <input
      v-model="q"
      class="r-input"
      placeholder="Search post title"
      @keyup.enter="handleSearch"
    >
    <button
      class="r-button"
      @click="handleSearch"
    >
      <div class="i-icon-park-outline-search" />
      Search
    </button>
  </div>
</template>
