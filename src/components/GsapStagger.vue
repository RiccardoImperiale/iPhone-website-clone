<script>
import { gsap } from 'gsap';

export default {
    name: 'GsapStagger',
    data() {
        return {

        };
    },
    mounted() {
        const staggerBoxes = document.querySelectorAll('.red_box');
        gsap.to(staggerBoxes, {
            y: 250,
            rotation: 360,
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: .1,
                grid: [2, 1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center'
            }
        });
    }
}
</script>


<template>
    <div class="wrapper">
        <h1>GsapStagger</h1>

        <div class="boxes">
            <div ref="stagger_box" class="red_box"></div>
            <div ref="stagger_box" class="red_box"></div>
            <div ref="stagger_box" class="red_box"></div>
            <div ref="stagger_box" class="red_box"></div>
            <div ref="stagger_box" class="red_box"></div>
            <div ref="stagger_box" class="red_box"></div>
        </div>
    </div>
</template>

<style>
.boxes {
    display: flex;
    gap: 2rem;
}

.red_box {
    width: 100px;
    height: 100px;
    background-color: rgb(237, 82, 82);
    border-radius: 1rem;
}
</style>
