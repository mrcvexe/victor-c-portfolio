<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>
<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
  <TheFooter />
</template>
<style scoped>
main {
  padding-top: calc(var(--header-height) + 4rem);
  padding-bottom: 2.5rem;
  flex: 1 0 auto;
}
</style>
