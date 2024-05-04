<script setup>
import { ref, watchEffect } from 'vue';

import { extend, useTresContext } from '@tresjs/core'
import { OrbitControls } from 'three/addons/controls/OrbitControls'

extend({ OrbitControls })

const { camera, renderer } = useTresContext()
let orbitControls

watchEffect(() => {
    if (camera && renderer) {
        orbitControls = new OrbitControls(camera, renderer.domElement)
        orbitControls.enableDamping = true
        orbitControls.dampingFactor = 0.1
    }
})
</script>

<template>
    <TresOrbitControls v-if="renderer" :args="[camera, renderer?.domElement]" />
</template>