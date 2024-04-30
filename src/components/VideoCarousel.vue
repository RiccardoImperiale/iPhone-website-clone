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
            playing: false, // Track if any video is playing
            paused: false, // Track animation state
            currentVideoIndex: 0 // Track the index of the current video
        }
    },
    methods: {
        playNextVideo(index) {
            // Play the next video if it's not the last one
            if (index < this.hightlightsSlides.length - 1) {
                const nextVideo = this.$refs[`video-${index + 1}`][0];
                nextVideo.play();
                this.currentVideoIndex++;
                const cardWidth = this.$refs[`video-${index + 1}`][0].parentElement.offsetWidth;
                const translation = `-${(index + 1) * (cardWidth + 80)}px`; // current width - gap

                gsap.to(this.$refs.carousel, {
                    x: translation,
                    duration: 1.5,
                    ease: 'power1.inOut'
                });
            } else {
                // All videos have finished playing
                this.playing = false;
            }
        },
        start() {
            const firstVideo = this.$refs['video-0'][0];
            firstVideo.play();
            this.playing = true;
        },
        restart() {
            gsap.to(this.$refs.carousel, {
                x: 0,
                ease: 'power1.inOut'
            });

            this.start();
            this.currentVideoIndex = 0; // Reset the current video index
            this.paused = false;
        },
        togglePause() {

            this.paused = !this.paused;

            // Pause or resume videos
            const currentVideo = this.$refs[`video-${this.currentVideoIndex}`][0];
            if (currentVideo) {
                if (this.paused) {
                    currentVideo.pause();
                } else {
                    currentVideo.play();
                }
            }

            // Pause or resume animation
            gsap.globalTimeline.paused(this.paused);
        },
        stopCurrentVideo() {
            // Get the reference to the current video element
            const currentVideo = this.$refs[`video-${this.currentVideoIndex}`][0];
            if (currentVideo) {
                currentVideo.pause(); // Pause the current video
            }
        }
    },
    mounted() {
        // Start playing the first video when mounted
        this.start()
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
        /* width: 160px; */
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-inline: 1.8rem;

        .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: var(--apple-gray-200);
            margin: 0 .5rem;
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
