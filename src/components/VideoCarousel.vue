<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'VideoCarousel',
    data() {
        return {
            hightlightsSlides: [
                {
                    id: 1,
                    textLists: [
                        "Enter A17 Pro.",
                        "Game‑changing chip.",
                        "Groundbreaking performance.",
                    ],
                    video: '/assets/videos/highlight-first.mp4',
                    videoDuration: 4,
                },
                {
                    id: 2,
                    textLists: ["Titanium.", "So strong. So light. So Pro."],
                    video: '/assets/videos/hightlight-sec.mp4',
                    videoDuration: 5,
                },
                {
                    id: 3,
                    textLists: [
                        "iPhone 15 Pro Max has the",
                        "longest optical zoom in",
                        "iPhone ever. Far out.",
                    ],
                    video: '/assets/videos/hightlight-third.mp4',
                    videoDuration: 2,
                },
                {
                    id: 4,
                    textLists: ["All-new Action button.", "What will yours do?."],
                    video: '/assets/videos/hightlight-fourth.mp4',
                    videoDuration: 3.63,
                },
            ]
        }
    },
    mounted() {
    },
};
</script>

<template>
    <div class="carousel">
        <div class="cards container">
            <div v-for="video in hightlightsSlides" class="card" :key="video.id">
                <video playsInline preload="auto" muted>
                    <source :src="video.video" type="video/mp4">
                </video>
                <div class="card_text">
                    <p v-for="text in video.textLists">{{ text }}</p>
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="progress">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="reset">r</div>
        </div>
    </div>
</template>

<style scoped>
.carousel {
    overflow-x: hidden;
    margin-top: 2rem;

    .cards {
        gap: 3rem;
        height: 100%;
        display: flex;
        transform: translateX(0%);
    }

    .card {
        flex: 0 0;
        flex-basis: 80%;
        height: 800px;
        border-radius: 2rem;
        position: relative;
        overflow: hidden;
        padding-top: 3rem;
        padding-left: 4rem;
    }

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    .card_text {
        position: absolute;
        line-height: 2.5rem;
        font-size: 1.25rem;
    }
}

.controls {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    .progress,
    .reset {
        background-color: aqua;
        border-radius: 50px;
    }

    .progress {
        width: 150px;
        height: 50px;
        display: flex;
        align-items: center;
        /* gap: 1rem; */
        justify-content: space-between;
        padding-inline: 1.8rem;

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: blue;
        }
    }

    .reset {
        width: 50px;
        height: 50px;
    }
}
</style>
