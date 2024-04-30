<script>
import { gsap } from 'gsap';

export default {
    name: 'GsapTimeline',
    data() {
        return {
            isPlaying: true,
        };
    },
    mounted() {
        this.playAnimation();
    },
    methods: {
        playAnimation() {
            this.tl = gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true, })
                .to(this.$refs.box1, { x: 200, duration: 1 })
                .to(this.$refs.box1, { y: -200, duration: 1 })
                .to(this.$refs.box1, { x: -200, duration: 1 });
        },
        pauseAnimation() {

            this.tl.pause();

        },
        resumeAnimation() {

            this.tl.resume();

        },
        toggleAnimation() {
            this.isPlaying = !this.isPlaying;
            this.isPlaying ? this.resumeAnimation() : this.pauseAnimation();

        },
    },
};
</script>


<template>
    <div class="wrapper">
        <div ref="box1" id="yellow_box"></div>
        <h1>GsapTo</h1>
        <button @click="toggleAnimation">{{ isPlaying ? 'Pause' : 'Play' }}</button>

    </div>
</template>

<style>
.wrapper {
    display: flex;
    flex-direction: column;
}

#yellow_box {
    width: 200px;
    height: 200px;
    background-color: rgb(237, 237, 82);
    border-radius: 1rem;
}
</style>
