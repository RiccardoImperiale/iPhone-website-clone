<script>
import { gsap } from 'gsap';

export default {
  name: 'GsapFromTo',
  mounted() {
    gsap.fromTo(this.$refs.box, {
      x: 0,
      rotation: 0,
      borderRadius: '0%',
    },
      {
        x: 250,
        repeat: -1,
        yoyo: true,
        duration: 2,
        rotation: 360,
        borderRadius: '100%',
        ease: 'bounce'
      });
  }
};
</script>


<template>
  <div class="wrapper">
    <div ref="box" id="green_box"></div>
    <h1>GsapTo</h1>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}

#green_box {
  width: 200px;
  height: 200px;
  background-color: rgb(64, 182, 88);
  border-radius: 1rem;
}
</style>
