<script>
import { gsap } from 'gsap';


export default {
  name: 'AppHighlights',
  mounted() {
    gsap.to(this.$refs.title, { opacity: 1, y: 0 });

  },
};
</script>

<template>
  <section id="highlights">
    <div class="top">
      <div class="title container" ref="title">Get The Highlights.</div>
    </div>
  </section>
</template>

<style>
#highlights {
  width: 100vw;
  overflow: hidden;
  height: 100%;
  background-color: #101010;
  padding: 5rem 0;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: end;
    width: 100%;
    font-size: 3rem;

    .title {
      transform: translateY(20px);
      opacity: 0;
      color: var(--apple-gray-500);
      font-size: 3.75rem;
      font-weight: 500;
    }
  }

}
</style>
