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
      placeholder="Search post"
      class="r-input"
    >
    <button
      class="r-button"
      @click="handleSearch"
    >
      Search
    </button>
  </div>
</template>
