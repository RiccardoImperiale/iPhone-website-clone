<script>
import { TresCanvas } from '@tresjs/core'
import { OrbitControls } from '@tresjs/cientos'

export default {
    name: 'Model3D',
    components: {
        OrbitControls,
        TresCanvas
    },
};
</script>

<template>
    <TresCanvas>
        <TresPerspectiveCamera :args="[45, 1, 0.1, 1000]" />
        <OrbitControls :enableZoom="false" />
        <TresMesh>
            <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
            <TresMeshBasicMaterial color="orange" />
        </TresMesh>
        <TresAmbientLight :intensity="1" />
    </TresCanvas>
</template>

<style></style>