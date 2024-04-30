<script>
import { gsap } from 'gsap';

export default {
  name: 'GsapFrom',
  mounted() {
    gsap.from(this.$refs.box, {
      duration: 1,
      // y: -200,
      repeat: -1,
      yoyo: true,
      rotation: 180,
      ease: 'power1.inOut',
    });
  }
};
</script>


<template>
  <div class="wrapper">
    <div ref="box" id="orange_box"></div>
    <h1>GsapTo</h1>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}

#orange_box {
  width: 200px;
  height: 200px;
  background-color: rgb(252, 134, 60);
  border-radius: 1rem;
}
</style>
