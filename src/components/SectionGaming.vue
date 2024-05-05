<script>
import { animateImages, animateTitle, animateInfos } from '../assets/js/animations.js';

export default {
    name: 'SectionGaming',
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
    <section id="gaming">
        <div class="top container">
            <div class="title" ref="title">Explore the full story.</div>
        </div>
        <div class="phone container">

            wfe
        </div>
        <div class="bottom container">

            fwef
        </div>
    </section>
</template>

<style scoped>
#gaming {
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
