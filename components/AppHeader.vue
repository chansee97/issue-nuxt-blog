<template>
  <header class="flex items-center justify-end gap-1.5em text-lg p-2em">
    <NuxtLink to="/blog" class="transition-opacity op-70 hover:op-100">
      Blog
    </NuxtLink>
    <NuxtLink to="/tags" class="transition-opacity op-70 hover:op-100">
      Tags
    </NuxtLink>
    <NuxtLink to="/" class="transition-opacity op-70 hover:op-100">
      About
    </NuxtLink>
    <dark-mode class="transition-opacity op-70 hover:op-100" />
  </header>
</template>
