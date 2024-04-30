<script>
import { gsap } from 'gsap';

export default {
  name: 'GsapTo',
  mounted() {
    gsap.to(this.$refs.box, {
      // duration: 1,
      y: -100,
      repeat: -1,
      yoyo: true,
      // rotation: 90
      // ease: 'elastic'
    });
  }
};
</script>

<template>
  <div class="wrapper">
    <div ref="box" id="blue_box"></div>
    <h1>GsapTo</h1>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}

#blue_box {
  width: 200px;
  height: 200px;
  background-color: rgb(60, 60, 252);
  border-radius: 1rem;
}
</style>
