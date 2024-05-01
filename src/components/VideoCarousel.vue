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
            ],
            playing: false,
            paused: false,
            currentVideoIndex: 0,
        }
    },
    methods: {
        playNextVideo(index) {
            if (index < this.hightlightsSlides.length - 1) {
                const nextVideo = this.$refs[`video-${index + 1}`][0];
                nextVideo.play();
                this.currentVideoIndex++;

                const texts = document.querySelectorAll('.card_text')
                gsap.to(texts[this.currentVideoIndex], { x: '0px', opacity: 1, duration: 1, delay: 0.5 });

                const progBars = document.querySelectorAll('.progress_bar')
                const firstVideoDuration = this.hightlightsSlides[index].videoDuration * 1000;
                gsap.to(progBars[this.currentVideoIndex], { width: '100%', duration: firstVideoDuration / 1000 });

                const cardWidth = this.$refs[`video-${index + 1}`][0].parentElement.offsetWidth;
                const translation = `-${(index + 1) * (cardWidth + 80)}px`; // current width - gap
                gsap.to(this.$refs.carousel, { x: translation, duration: 1.5, ease: 'power1.inOut' });

            } else {
                this.playing = false;
            }
        },
        start() {
            const firstVideo = this.$refs['video-0'][0];
            firstVideo.play();
            this.playing = true;
            gsap.to(this.$refs.text0, { x: '0px', opacity: 1, duration: 1, delay: 0.5 });

            const progBars = document.querySelectorAll('.progress_bar')
            const firstVideoDuration = this.hightlightsSlides[this.currentVideoIndex].videoDuration * 1000;
            gsap.to(progBars[0], { width: '100%', duration: firstVideoDuration / 1000 });
        },
        restart() {
            gsap.to(this.$refs.carousel, { x: 0, duration: 1, ease: 'power1.inOut' });

            const progBars = document.querySelectorAll('.progress_bar');
            progBars.forEach(bar => gsap.set(bar, { width: 0 }));

            const texts = document.querySelectorAll('.card_text')
            texts.forEach(text => gsap.set(text, { x: '-320px', opacity: 0 }))

            this.start();
            this.currentVideoIndex = 0;
            this.paused = false;
        },
        togglePause() {
            this.paused = !this.paused;

            const currentVideo = this.$refs[`video-${this.currentVideoIndex}`][0];
            if (currentVideo) {
                this.paused ? currentVideo.pause() : currentVideo.play();
            }

            gsap.globalTimeline.paused(this.paused);
        },
        stopCurrentVideo() {
            const currentVideo = this.$refs[`video-${this.currentVideoIndex}`][0];
            currentVideo && currentVideo.pause();
        },
        dotWidth(index) {
            return index === this.currentVideoIndex && this.playing ? '100px' : '12px';
        },
        initIntersectionObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.5
            };

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.start();
                        observer.disconnect();
                    }
                });
            }, options);

            const carouselElement = this.$refs.carousel;
            observer.observe(carouselElement);
        }
    },
    mounted() {
        this.initIntersectionObserver();
    }
};
</script>

<template>
    <div class="carousel">
        <div ref="carousel" class="cards container">
            <div v-for="(video, index) in hightlightsSlides" class="card" :key="video.id">
                <video playsInline preload="auto" muted :ref="`video-${index}`" @ended="playNextVideo(index)">
                    <source :src="video.video" type="video/mp4">
                </video>
                <div :ref="'text' + index" class="card_text">
                    <p v-for="text in video.textLists">{{ text }}</p>
                </div>
            </div>
        </div>
        <div class="controls">
            <div class="progress">
                <div v-for="(video, index) in hightlightsSlides" :key="video.id" :style="{ width: dotWidth(index) }"
                    class="dot">
                    <div ref="progressBars" class="progress_bar"></div>
                </div>
            </div>
            <div v-if="!playing" @click="restart" class="control_btn">
                <img width="30" src="/assets/images/replay.svg" alt="">
            </div>
            <div v-else @click="togglePause" class="control_btn">
                <img width="30" :src="paused === false ? '/assets/images/pause.svg' : '/assets/images/play.svg'" alt=""
                    :class="paused === true && 'mr-3-negative'">
            </div>
        </div>
    </div>
</template>

<style scoped>
.mr-3-negative {
    margin-right: -3px;
}

.carousel {
    overflow-x: hidden;
    margin: 3rem 0;

    .cards {
        gap: 5rem;
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
        opacity: 0;
        transform: translateX(-320px);
    }
}

.controls {
    display: flex;
    gap: .85rem;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;

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
