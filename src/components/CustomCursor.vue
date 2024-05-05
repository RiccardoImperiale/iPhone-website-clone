<script>
import { gsap } from 'gsap';
import { store } from '../store.js'


export default {
    name: 'CustomCursor',
    data() {
        return {
            size: '40px',
            colorStyle: 'none',
            borderStyle: 'none',
            mouse: { x: 0, y: 0 },
            delayedMouse: { x: 0, y: 0 },
        }
    },
    mounted() {
        this.animate();
        window.addEventListener("mousemove", this.manageMouseMove)
        this.$watch(() => store.isHovered, this.handleHoverChange);
    },
    methods: {
        manageMouseMove(e) {
            const { clientX, clientY } = e;
            this.mouse = {
                x: clientX,
                y: clientY
            }
        },
        moveCircle(x, y) {
            gsap.set(this.$refs.circle, { x, y, xPercent: -50, yPercent: -50 })
        },
        animate() {
            const { x, y } = this.delayedMouse;
            this.delayedMouse = {
                x: this.lerp(x, this.mouse.x, 0.1),
                y: this.lerp(y, this.mouse.y, 0.1)
            }
            this.moveCircle(this.delayedMouse.x, this.delayedMouse.y)
            window.requestAnimationFrame(this.animate)
        },
        lerp(x, y, a) {
            return x * (1 - a) + y * a
        },
        handleHoverChange(newVal) {
            this.size = newVal ? '100px' : '40px';
            this.colorStyle = newVal ? 'white' : 'gray';
        },
        beforeDestroy() {
            window.removeEventListener("mousemove", this.manageMouseMove);
        }
    },

};
</script>

<template>
    <div class="custom_cursor pointer-events-none" :style="{ width: size, height: size, backgroundColor: colorStyle }"
        ref="circle"></div>
</template>

<style scoped>
.custom_cursor {
    position: fixed;
    top: 0;
    left: 0;
    background-color: var(--apple-primary);
    background-color: var(--apple-lighter);
    border-radius: 50%;
    mix-blend-mode: difference;
    z-index: 1000;
    transition: height 0.3s ease-in-out, width 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.pointer-events-none {
    pointer-events: none;
}
</style>
