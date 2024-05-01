<script>
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import AppHighlights from './components/AppHighlights.vue';
import AppModel from './components/AppModel.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    AppHighlights,
    AppModel
  }
}
</script>

<template>
  <main>
    <AppHeader />
    <AppHero />
    <AppHighlights />
    <AppModel />
  </main>
</template>

<style></style>
