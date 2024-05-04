<script setup>
import { ref, watch } from 'vue';
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import IphoneModel from './IphoneModel.vue';
import { store } from '../store.js'


const iphoneModelRef = ref(null);

</script>

<template>
    <TresCanvas alpha class="cursor" preset="realistic">
        <TresPerspectiveCamera :position="[0, 0, 1]" :look-at="[0, 0, 0]" />
        <OrbitControls :enableZoom="false" :rotateSpeed="0.5" :dampingFactor="0.05" />
        <Suspense>
            <IphoneModel :rotation="[0, 0, 0]" class="iphone" ref="iphoneModelRef" :scale="3.5" />
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