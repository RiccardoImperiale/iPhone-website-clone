<script setup>
import { useGLTF } from '@tresjs/cientos'
import { ref, onMounted } from 'vue';
const { scene, nodes, materials } = await useGLTF('/models/scene.glb', { draco: true })


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


let color = 'blue'

const black = {
    col1: '#454749',
    col2: '#000000',
}

const yellow = {
    col1: '#8F8A81',
    col2: '#282721',
}

const blue = {
    col1: '#53596E',
    col2: '#21242e',
}

const white = {
    col1: '#C9C8C2',
    col2: '#282721',
}


// Get the material after the component is mounted
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


    // Set the color of the material
    if (color === 'black') {
        setColor(black);
    }

    if (color === 'yellow') {
        setColor(yellow);
    }

    if (color === 'blue') {
        setColor(blue);
    }

    if (color === 'white') {
        setColor(white);
    }

});

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