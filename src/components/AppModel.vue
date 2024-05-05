<script setup>
import { animateModels, animateSizeCircle, animatePhoneSizes, animateTitle } from '../assets/js/animations.js';
import { ref, computed, onMounted } from 'vue';
import Model3D from './Model3D.vue';
import { store } from '../store.js'

const modelName = ref('iPhone 15 Pro in Black Titanium');
const selectedModel = ref(true);
const currentId = ref(4);
const selectedSize = ref('large');
const sizeCircle = ref(null);
const iPhone_sm = ref(null);
const iPhone_lg = ref(null);
const title = ref(null);
const model = ref(null);
const models_wrapper = ref(null);

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

onMounted(() => {
    animateTitle(title.value)
    animateModels(models_wrapper.value)
})

const changeModel = (col, title, id) => {
    store.phoneColor = col;
    modelName.value = title;
    currentId.value = id;
    selectedModel.value = true;
};

const changeSize = (size) => {
    selectedSize.value = size;
    animateSizeCircle(size, sizeCircle.value);
    animatePhoneSizes(size, iPhone_lg.value.$el, iPhone_sm.value.$el);

    if (size == 'large') {
        store.rotateR = true
        store.rotateL = false
    } else {
        store.rotateR = false
        store.rotateL = true
    }
};


const selectedSizeClass = computed(() => (size) => {
    return { active: selectedSize.value === size.value, unactive: selectedSize.value !== size.value };
});

</script>

<template>
    <section id="model" class="container">
        <div class="top">
            <div class="title no_select" ref="title">Take a closer look.</div>
        </div>
        <div class="bottom">
            <div ref="models_wrapper" class="models_wrapper">
                <div ref="model" class="model">
                    <div class="iPhone">
                        <Model3D ref="iPhone_sm" class="iPhone_sm" />
                    </div>
                    <div class="iPhone">
                        <Model3D ref="iPhone_lg" class="iPhone_lg" />
                    </div>
                </div>
            </div>
            <div class="model_name">{{ modelName }}</div>
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
                    <div class="sizes">
                        <div @click="changeSize(size.value)" v-for="size in sizes" class="size_text"
                            :class="selectedSizeClass(size)">{{
                                size.label }}
                        </div>
                    </div>
                    <div ref="sizeCircle" class="size_circle"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#model {
    min-height: 100vh;
}

.title {
    color: var(--apple-gray-500);
    font-size: 3.75rem;
    font-weight: 500;
}

.models_wrapper {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(100%);
}

.model {
    width: 30%;
    height: 800px;
    display: flex;
    align-items: center;
    justify-content: center;

    .iPhone {
        width: 100%;
        height: 100%;
        position: absolute;
        cursor: grab;
    }

    .iPhone_sm {
        scale: 1;
        transform: translateX(100%);
        z-index: 3;
    }

    .iPhone_lg {
        scale: 1.15;
        transform: translateX(0%);
    }
}

.bottom {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.model_name {
    font-size: .9rem;
}

.controls {
    display: flex;
    gap: .85rem;
    justify-content: center;
    align-items: center;
    z-index: 3;

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
            box-shadow: 0 0 5px 0.6px rgba(255, 255, 255, 0.637);
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
        width: 110px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;

        .size_circle {
            width: 50px;
            height: 50px;
            transform: translateX(50%);
            background-color: var(--apple-lighter);
            border-radius: 50%;
        }

        .sizes {
            width: 110px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;

            .size_text {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: rgb(56, 56, 56);
                z-index: 1;
                font-size: 1rem;
            }

            .size_text:first-child {
                padding-left: .4rem;
            }

            .size_text:last-child {
                padding-right: .4rem;
            }

            .size_text.active {
                color: rgb(56, 56, 56);
                transition: 1s ease;
            }

            .size_text.unactive {
                color: rgb(174, 174, 174);
            }

        }
    }
}
</style>
