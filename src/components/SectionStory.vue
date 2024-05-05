<script>
import { animateImages, animateTitle, animateInfos } from '../assets/js/animations.js';

export default {
    name: 'SectionStory',
    components: {

    },
    mounted() {
        animateTitle(this.$refs.title);

        const images = document.querySelectorAll('.image');
        const infoText = document.querySelectorAll('.info_text');

        animateImages(images);
        animateInfos(infoText);
    },
};
</script>

<template>
    <section id="story">
        <div class="top container">
            <div class="title" ref="title">Explore the full story.</div>
        </div>
        <div class="bottom container-sm">
            <div class="title">iPhone.<br>Forged in titanium.</div>
            <div class="slides">
                <div class="video">
                    <video autoplay muted playsInline>
                        <source src="/assets/videos/explore.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="images">
                    <div class="img_box">
                        <img class="image" src="/assets/images/explore1.jpg" alt="iPhone closeup">
                    </div>
                    <div class="img_box">
                        <img class="image" src="/assets/images/explore2.jpg" alt="iPhone closeup">
                    </div>
                </div>
                <div class="bottom_text">
                    <div class="text">
                        <p class="info_text">
                            iPhone 15 Pro is <span>the first iPhone to feature an aerospace‑grade titanium design,
                            </span>using the same alloy that spacecraft use for missions to Mars.
                        </p>
                    </div>
                    <div class="text">
                        <p class="info_text">
                            Titanium has one of the best strength‑to‑weight ratios of any metal, making these our
                            <span>lightest Pro models ever</span>. You’ll notice the
                            moment you pick one up.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#story {
    width: 100vw;
    overflow: hidden;
    height: 100%;
    background-color: #101010;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: end;

        .title {
            opacity: 0;
            transform: translateY(100px);
            color: var(--apple-gray-500);
            font-size: 3.75rem;
            font-weight: 500;
        }
    }

    .bottom {
        padding-top: 8rem;

        .title {
            color: var(--apple-light);
            font-size: 4.5rem;
            font-weight: 500;
            margin-bottom: 4rem;
            padding-left: 3rem;
        }

        .video,
        .images {
            width: 100%;
            height: 500px;
        }

        .slides {
            .video {
                overflow: hidden;
                border-radius: 1rem;

                & video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .images {
                display: flex;
                gap: 2rem;
                margin-top: 2rem;

                .img_box {
                    width: calc(50% - 1rem);
                    height: 100%;
                    overflow: hidden;
                    border-radius: 1rem;

                    & img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        object-position: center;
                        scale: 1.3;
                        opacity: 0.5;
                        filter: blur(10px);
                    }
                }
            }
        }

        .bottom_text {
            display: flex;
            gap: 2rem;
            margin-top: 3rem;
            /* align-items: flex-start; */

            .text {
                padding-inline: 3rem;
                width: calc(50% - 1rem);
                overflow: hidden;

                .info_text {
                    color: var(--apple-gray-500);
                    font-size: 1.4rem;
                    line-height: 1.8rem;
                    font-weight: 600;
                    letter-spacing: 0.4px;
                    transform: translateY(120%);
                    opacity: 0;
                }

                & span {
                    color: var(--apple-lighter);

                }
            }
        }
    }
}
</style>
