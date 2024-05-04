<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls } from '@tresjs/cientos';
import IphoneModel from './IphoneModel.vue';

</script>

<template>
    <TresCanvas alpha preset="realistic">
        <TresPerspectiveCamera :position="[0, 0, 1]" :look-at="[0, 0, 0]" />
        <OrbitControls ref="orbitControlsRef" :enableZoom="false" :rotateSpeed="0.5" :enableDamping="true"
            :dampingFactor="0.1" />
        <Suspense>
            <IphoneModel :rotation="[0, 0, 0]" ref="iphoneModelRef" :scale="4" />
        </Suspense>
        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight cast-shadow :position="[10, 0, 0]" :intensity="2" />

        <!-- Additional lights -->
        <TresDirectionalLight :position="[-10, -10, -10]" :intensity="0.5" />
        <TresDirectionalLight :position="[0, 10, -10]" :intensity="2" />
        <TresDirectionalLight :position="[0, -10, 10]" :intensity="0.5" />
    </TresCanvas>
</template>

<style></style>