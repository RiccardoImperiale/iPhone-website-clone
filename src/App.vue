<script>
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppHighlights from './components/AppHighlights.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    AppHighlights
  }
}
</script>

<template>
  <main>
    <AppHeader />
    <AppHero />
    <AppHighlights />
  </main>
</template>

<style></style>
