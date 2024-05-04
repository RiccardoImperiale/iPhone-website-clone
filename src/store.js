import { reactive } from 'vue'

export const store = reactive({
    phoneColor: 'black',
    // size: 4.6,
    resetOrbit: false,
    modelRotation: { x: 0, y: 0, z: 0 }
})