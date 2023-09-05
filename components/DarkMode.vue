<script setup lang="ts">
let isDark: boolean

function toggleDark() {
  const root = document.documentElement
  isDark = root.classList.contains('dark')
  root.classList.remove(isDark ? 'dark' : 'light')
  root.classList.add(isDark ? 'light' : 'dark')
}
function toggleViewTransition(event: MouseEvent) {
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
  ]
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleDark()
    await nextTick()
  })

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: isDark ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: isDark
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}

function toogleTheme(event: MouseEvent) {
  // @ts-expect-error: Transition API
  const isSupport = document.startViewTransition
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isSupport) {
    toggleDark()
    return
  }
  toggleViewTransition(event)
}
</script>

<template>
  <div title="Toggle Color Scheme" class="cursor-pointer dark:i-icon-park-outline-moon i-icon-park-outline-sun " @click="toogleTheme" />
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  mix-blend-mode: normal;
  animation: none;
}

/* 进入dark模式和退出dark模式时，两个图像的位置顺序正好相反 */
.dark::view-transition-old(root) {
  z-index: 1;
}

.dark::view-transition-new(root) {
  z-index: 999;
}

::view-transition-old(root) {
  z-index: 999;
}

::view-transition-new(root) {
  z-index: 1;
}
</style>
