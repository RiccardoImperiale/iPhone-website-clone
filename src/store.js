import { reactive } from 'vue'

export const store = reactive({
    phoneColor: 'black',
    resetOrbit: false,
    modelRotation: { x: 0, y: 0, z: 0 }
})