<script>
import AppHeader from './components/AppHeader.vue';
import AppHero from './components/AppHero.vue';
import SectionHighlights from './components/SectionHighlights.vue';
import AppModel from './components/AppModel.vue';
import SectionStory from './components/SectionStory.vue';
import SectionGaming from './components/SectionGaming.vue';
import AppFooter from './components/AppFooter.vue';
import CustomCursor from './components/CustomCursor.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppHero,
    SectionHighlights,
    AppModel,
    SectionStory,
    SectionGaming,
    AppFooter,
    CustomCursor
  }
}
</script>

<template>
  <main>
    <CustomCursor />

    <AppHeader />
    <AppHero />
    <SectionHighlights />
    <AppModel />
    <SectionStory />
    <SectionGaming />
    <AppFooter />
  </main>
</template>

<style></style>
