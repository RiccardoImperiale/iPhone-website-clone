<script>
import { gsap } from 'gsap';
import { store } from '../store.js'

export default {
  name: 'AppHero',
  data() {
    return {
      isMobile: false,
      videoSrc: '',
    }
  },
  mounted() {
    gsap.to(this.$refs.textTitle, { opacity: 1, delay: 2 });
    gsap.to(this.$refs.cta, { opacity: 1, y: -50, delay: 2 });

    this.checkScreenWidth();
    window.addEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      window.innerWidth < 720 ? this.videoSrc = 'smallHero.mp4' : this.videoSrc = 'hero.mp4'
    },
    setIsHover(isHovered) {
      store.isHovered = isHovered;
    },
    setIsHoverColor(isHovered, color) {
      store.isHovered = isHovered;
      store.hoverCol = color;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth);
  }
};
</script>

<template>
  <section id="hero" class="no_select">
    <span @mouseover="setIsHover(true)" @mouseleave="setIsHover(false)" ref="textTitle"
      class="text_title no_select">iPhone 15 Pro</span>
    <video autoplay muted playsInline :key="videoSrc">
      <source :src="videoSrc ? '/assets/videos/' + videoSrc : ''" type="video/mp4" />
    </video>
    <div ref="cta" id="cta">
      <a href="#highlights" class="btn">Buy</a>
      <p @mouseover="setIsHoverColor(true, 'white')" @mouseleave="setIsHoverColor(false, 'var(--apple-gray-900)')"> From
        $199/month or $999</p>
    </div>
  </section>
</template>

<style scoped>
#hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem;
  gap: 3rem;
  height: calc(100vh - 60px);
}

.text_title {
  font-size: 1.8rem;
  font-weight: 500;
  opacity: 0;
  color: var(--apple-gray-200);
}

video {
  max-width: 1240px;
  width: 100%;
  margin-bottom: 15rem;
}

#cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  gap: 2rem;
  transform: translateY(20px);
  position: absolute;
  bottom: 5rem;

  & p {
    font-size: 1.25rem;
    line-height: 1rem;
  }
}
</style>
