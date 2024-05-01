<script>

import Model3D from './Model3D.vue'

export default {
    name: 'App3DModel',
    components: {
        Model3D
    },

};
</script>

<template>
    <section id="3d_model" class="container">
        <div class="top">
            <div class="titled" ref="title">Take a closer look.</div>
        </div>
        <div class="bottom">
            <div class="model">
                <Model3D />
            </div>
            <div class="controls">
                contr
            </div>
        </div>
    </section>
</template>

<style scoped>
.titled {
    /* opacity: 0; */
    /* transform: translateY(100px); */
    color: var(--apple-gray-500);
    font-size: 3.75rem;
    font-weight: 500;
}

.model {
    width: 100%;
    height: 600px;
}

.bottom {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
</style>
