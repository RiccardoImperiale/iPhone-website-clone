<script>
import GsapFrom from './components/GsapFrom.vue';
import GsapFromTo from './components/GsapFromTo.vue';
import GsapScrollTrigger from './components/GsapScrollTrigger.vue';
import GsapStagger from './components/GsapStagger.vue';
import GsapTimeline from './components/GsapTimeline.vue';
import GsapTo from './components/GsapTo.vue'

export default {
  name: 'App',
  components: {
    GsapTo,
    GsapFrom,
    GsapFromTo,
    GsapTimeline,
    GsapStagger,
    GsapScrollTrigger
  }
}
</script>

<template>
  <main>
    <!-- <GsapTo /> -->
    <!-- <GsapFrom /> -->
    <!-- <GsapFromTo /> -->
    <!-- <GsapTimeline /> -->
    <GsapScrollTrigger />

  </main>
</template>

<style>
main {
  display: flex;
  gap: 2rem;
}
</style>
