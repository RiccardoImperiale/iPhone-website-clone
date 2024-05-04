<script setup>
import { useGLTF } from '@tresjs/cientos'
import { ref, onMounted, watch } from 'vue';
import { store } from '../store.js'
const { scene, materials } = await useGLTF('/models/scene.glb', { draco: true })

const cameraNotch = ref(null);
const dispBorder = ref(null);
const screen = ref(null);
const cameras = ref(null);
const flashBorder = ref(null);
const lato = ref(null);
const slot = ref(null);
const back = ref(null);
const back2 = ref(null);
const back3 = ref(null);
const back4 = ref(null);
const fret1 = ref(null);
const fret2 = ref(null);
const fret3 = ref(null);


watch(() => store.phoneColor, (newColor) => {
    setColor(colors[newColor]);
});

const colors = {
    black: { col1: '#454749', col2: '#000000', },
    yellow: { col1: '#8F8A81', col2: '#282721', },
    blue: { col1: '#53596E', col2: '#101028', },
    white: { col1: '#C9C8C2', col2: '#282721', }
}

onMounted(() => {
    cameraNotch.value = materials['ujsvqBWRMnqdwPx'];
    dispBorder.value = materials['zFdeDaGNRwzccye'];
    screen.value = materials['pIJKfZsazmcpEiU'];
    cameras.value = materials['hUlRcbieVuIiOXG'];
    flashBorder.value = materials['PaletteMaterial001'];
    lato.value = materials['eShKpuMNVJTRrgg'];
    slot.value = materials['jpGaQNgTtEGkTfo'];
    back.value = materials['oZRkkORNzkufnGD'];
    back2.value = materials['yhcAXNGcJWCqtIS'];
    back3.value = materials['bCgzXjHOanGdTFV'];
    back4.value = materials['vhaEJjZoqGtyLdo'];
    fret1.value = materials['PaletteMaterial002'];
    fret2.value = materials['jlzuBkUzuJqgiAK'];
    fret3.value = materials['HGhEhpqSBZRnjHC'];

    setColor(colors[store.phoneColor]);
})


const setColor = (newColor) => {
    cameraNotch.value.color.set(newColor.col2);
    dispBorder.value.color.set(newColor.col2);
    screen.value.color.set(newColor.col2);
    cameras.value.color.set(newColor.col1);
    flashBorder.value.color.set(newColor.col1);
    lato.value.color.set(newColor.col1);
    slot.value.color.set(newColor.col2);
    back.value.color.set(newColor.col1);
    back2.value.color.set(newColor.col1);
    back3.value.color.set(newColor.col1);
    back4.value.color.set(newColor.col1);
    fret1.value.color.set(newColor.col2);
    fret2.value.color.set(newColor.col2);
    fret3.value.color.set(newColor.col2);
};

</script>

<template>
    <primitive :object="scene" />
</template>