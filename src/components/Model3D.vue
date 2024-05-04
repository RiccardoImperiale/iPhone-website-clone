<script setup>
import { ref, watch } from 'vue';
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import IphoneModel from './IphoneModel.vue';
import { store } from '../store.js'
import { gsap } from 'gsap';

import { CSSPlugin } from 'gsap/CSSPlugin'; // Import the CSSPlugin

// Register the CSSPlugin with GSAP
gsap.registerPlugin(CSSPlugin);

const modelScale = ref(store.size);
const iphoneModelRef = ref(null);




watch(() => store.size, (newSize, oldSize) => {
    // Apply smooth transition to model scale
    const scaleDifference = newSize / oldSize;
    const currentScale = modelScale.value;
    // Scale up or down smoothly
    const scaleTo = currentScale * scaleDifference;

    gsap.to(modelScale, {
        value: scaleTo,
        duration: 1,
        ease: 'power2.out',
    });
});


</script>

<template>
    <TresCanvas class="cursor" preset="realistic">
        <TresPerspectiveCamera :position="[0, 0, 1]" :look-at="[0, 0, 0]" />
        <OrbitControls :enableZoom="false" :rotateSpeed="0.5" :dampingFactor="0.05" />
        <Suspense>
            <IphoneModel :rotation="[0, 10, 0]" class="iphone" ref="iphoneModelRef" :scale="4" />
        </Suspense>
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight cast-shadow :position="[10, 0, 0]" :intensity="2" />

        <!-- Additional lights -->
        <TresDirectionalLight :position="[-10, -10, -10]" :intensity="0.5" />
        <TresDirectionalLight :position="[0, 10, -10]" :intensity="2" />
        <TresDirectionalLight :position="[0, -10, 10]" :intensity="0.5" />
    </TresCanvas>
</template>

<style>
.cursor {
    cursor: grab;
}

.iphone {
    opacity: 1;
}
</style>