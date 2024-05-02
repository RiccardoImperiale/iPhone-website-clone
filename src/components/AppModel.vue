<script>

import Model3D from './Model3D.vue'

export default {
    name: 'App3DModel',
    components: {
        Model3D
    },
    data() {
        return {
            models: [
                {
                    id: 1,
                    title: "iPhone 15 Pro in Natural Titanium",
                    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
                },
                {
                    id: 2,
                    title: "iPhone 15 Pro in Blue Titanium",
                    color: ["#53596E", "#6395ff", "#21242e"],
                },
                {
                    id: 3,
                    title: "iPhone 15 Pro in White Titanium",
                    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
                },
                {
                    id: 4,
                    title: "iPhone 15 Pro in Black Titanium",
                    color: ["#454749", "#3b3b3b", "#181819"],
                },
            ],
            sizes: [
                { label: '6.1"', value: "small" },
                { label: '6.7"', value: "large" },
            ]
        }
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
                <div class="progress">
                    <div v-for="(video, index) in 4" :key="video.id" class="dot">
                    </div>
                </div>
                <!-- <div v-if="!playing" @click="restart" class="control_btn">
                    <img width="30" src="/assets/images/replay.svg" alt="">
                </div>
                <div v-else @click="togglePause" class="control_btn">
                    <img width="30" :src="paused === false ? '/assets/images/pause.svg' : '/assets/images/play.svg'"
                        alt="" :class="paused === true && 'mr-3-negative'">
                </div> -->
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
        padding-inline: 1.8rem;

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 12px;
            background-color: var(--apple-gray-300);
            margin: 0 .5rem;

            position: relative;
            overflow: hidden;
            transition: .25s;
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
        width: 60px;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
}
</style>
