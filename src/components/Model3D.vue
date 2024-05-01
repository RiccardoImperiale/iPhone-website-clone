<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';

import IphoneModel from './IphoneModel.vue';


</script>


<template>
    <TresCanvas preset="realistic">
        <TresPerspectiveCamera :position="[0, 0, 1]" :look-at="[0, 0, 0]" />
        <OrbitControls :enableZoom="false" :rotateSpeed="0.5" :dampingFactor="0.05" />
        <Suspense>
            <IphoneModel :scale="4" />
        </Suspense>
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight cast-shadow :position="[10, 0, 0]" :intensity="2" />

        <!-- Additional lights -->
        <TresDirectionalLight :position="[-10, -10, -10]" :intensity="0.5" />
        <TresDirectionalLight :position="[0, 10, -10]" :intensity="0.5" />
        <TresDirectionalLight :position="[0, -10, 10]" :intensity="0.5" />
    </TresCanvas>
</template>

<style></style>