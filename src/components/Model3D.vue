<script>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import IphoneModel from './IphoneModel.vue';

export default {
    components: {
        IphoneModel,
        OrbitControls,
        TresCanvas
    },
    data() {
        return {
            phoneColor: ''
        }
    },
    methods: {
        changeColor(col) {
            this.phoneColor = col;
        }
    },
}
</script>

<template>
    <TresCanvas class="cursor" preset="realistic">
        <TresPerspectiveCamera :position="[0, 0, 1]" :look-at="[0, 0, 0]" />
        <OrbitControls :enableZoom="false" :rotateSpeed="0.5" :dampingFactor="0.05" />
        <Suspense>
            <IphoneModel :phoneColor="phoneColor" :scale="4.5" />
        </Suspense>
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight cast-shadow :position="[10, 0, 0]" :intensity="2" />

        <!-- Additional lights -->
        <TresDirectionalLight :position="[-10, -10, -10]" :intensity="0.5" />
        <TresDirectionalLight :position="[0, 10, -10]" :intensity="2" />
        <TresDirectionalLight :position="[0, -10, 10]" :intensity="0.5" />

    </TresCanvas>
    <button @click="changeColor('black')">change color bliack</button>
    <button @click="changeColor('blue')">change color blue</button>
</template>

<style>
.cursor {
    cursor: grab;
}
</style>