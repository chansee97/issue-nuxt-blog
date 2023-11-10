<template>
  <div>
    <AppHeader />
    <main class="px-12 py-10 w-100%">
      <div class="max-w-73ch m-auto">
        <slot />
        <AppFooter />
      </div>
    </main>
  </div>
</template>
