<template>
  <div>
    <AppHeader />
    <main class="px-7 py-10 w-100%">
      <div class="max-w-70ch m-auto">
        <slot />
        <AppFooter />
      </div>
    </main>
  </div>
</template>
