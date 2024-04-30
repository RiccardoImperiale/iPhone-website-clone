<script>
import { gsap } from 'gsap';

export default {
  name: 'AppHero',
  data() {
    return {
      isMobile: false,
      videoSrc: ''
    }
  },
  mounted() {
    gsap.to(this.$refs.text_title, { opacity: 1, delay: 2 });
    gsap.to(this.$refs.cta, { opacity: 1, y: -50, delay: 2 });

    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      window.innerWidth < 720 ? this.videoSrc = 'smallHero.mp4' : this.videoSrc = 'hero.mp4'
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth);
  }
};
</script>

<template>
  <section class="hero container">
    <span ref="text_title" class="text_title">iPhone 15 Pro</span>

    <video autoplay muted playsInline :key="videoSrc">
      <source :src="videoSrc ? '/public/assets/videos/' + videoSrc : ''" type="video/mp4" />
    </video>

    <div ref="cta" id="cta">
      <a href="#highlights" class="btn">Buy</a>
      <p>From $199/month or $999</p>
    </div>
  </section>
</template>

<style>
section.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;

  .text_title {
    font-size: 2rem;
    opacity: 0;
    color: var(--apple-gray-200);
  }
}


#cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  gap: 1.5rem;
  margin-top: 8rem;
  transform: translateY(20px);

  & p {
    font-size: 1.25rem;
    color: var(--apple-gray-200);
  }
}

/* .video {
  display: block;
  height: 100%;
} */

video {
  width: 100%;
  /* height: 100%; */
}
</style>
