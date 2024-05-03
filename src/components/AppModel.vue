<script setup>
import { ref } from 'vue';
import Model3D from './Model3D.vue';
import { store } from '../store.js'

const phoneColor = ref('');
const modelName = ref('iPhone 15 Pro in Black Titanium');
const selectedModel = ref(true);
const currentId = ref(2);

const changeModel = (col, title, id) => {
    store.phoneColor = col;
    modelName.value = title;
    currentId.value = id;
    selectedModel.value = true;
};

const models = ref([
    {
        id: 1,
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
        modelColor: "yellow"
    },
    {
        id: 2,
        title: "iPhone 15 Pro in Blue Titanium",
        color: ["#53596E", "#6395ff", "#21242e"],
        modelColor: "blue"
    },
    {
        id: 3,
        title: "iPhone 15 Pro in White Titanium",
        color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
        modelColor: "white"
    },
    {
        id: 4,
        title: "iPhone 15 Pro in Black Titanium",
        color: ["#454749", "#3b3b3b", "#181819"],
        modelColor: "black"
    },
]);

const sizes = ref([
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
]);


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
            <div>{{ modelName }}</div>
            <div class="controls">
                <div class="progress">
                    <template v-for="model in models" :key="model.id">
                        <div>
                            <div @click="changeModel(model.modelColor, model.title, model.id)"
                                :style="{ backgroundColor: model.color[0] }" class="dot">
                            </div>
                            <div :class="(selectedModel && currentId === model.id) ? 'selected' : 'unselected'"
                                class="dot_active"></div>
                        </div>
                    </template>
                </div>
                <div class="control_btn">
                    <div class="size_circle"></div>
                </div>
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
    height: 800px;
}

.bottom {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.controls {
    display: flex;
    gap: .85rem;
    justify-content: center;
    align-items: center;

    .progress,
    .control_btn {
        background-color: var(--apple-gray-800);
        border-radius: 50px;
    }

    .progress {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 1rem;

        .dot {
            width: 26px;
            height: 26px;
            border-radius: 12px;
            background-color: var(--apple-gray-300);
            margin: 0 .5rem;
            position: relative;
            overflow: hidden;
            transition: .25s;
            cursor: pointer;
        }

        .dot_active {
            position: absolute;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            margin-top: 4.5px;
            transform: translateX(calc(0.5rem + 11px));
            transition: .25s;
        }

        .selected {
            background-color: white;
            box-shadow:
                /* inner white */
                /* middle magenta */
                0 0 5px 0.6px rgba(255, 255, 255, 0.637);
            /* outer cyan */
        }

        .unselected {
            background-color: rgb(21, 21, 21);
        }

        .progress_bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 12px;
            background-color: var(--apple-lighter);
            border-radius: 6px;
        }
    }

    .control_btn {
        width: 100px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .size_circle {
            width: 50px;
            height: 50px;
            transform: translateX(-40%);
            background-color: var(--apple-lighter);
            border-radius: 50%;
        }
    }
}
</style>
