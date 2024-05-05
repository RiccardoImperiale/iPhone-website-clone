<script>
import { animateChip, animateInfos } from '../assets/js/animations.js';
import PhoneGaming from './PhoneGaming.vue'

export default {
    name: 'SectionGaming',
    components: {
        PhoneGaming
    },
    mounted() {
        animateChip(this.$refs.chip)
        const infoText = document.querySelectorAll('.info_text');
        animateInfos(infoText);
    },
};
</script>

<template>
    <section id="gaming">
        <div class="top container">
            <img ref="chip" src="/assets/images/chip.jpeg" alt="chip" width="180" height="180">
            <h2 class="title">A17 Pro chip.<br>A monster win for gaming.</h2>
            <p>It’s here. The biggest redesign in the history of Apple GPUs.</p>
        </div>

        <PhoneGaming />

        <div class="bottom_text container-xs">
            <div class="text">
                <p class="info_text">
                    A17 Pro is an entirely new class of iPhone chip that delivers our <span>best
                        graphics performance by far</span>.
                </p>
                <p class="info_text">
                    Mobile <span>games will look and feel so immersive</span>, with incredibly detailed environments and
                    more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and
                    runs with it.
                </p>
            </div>
            <div class="text">
                <p class="info_text">
                    New <br>
                    <span>Pro-class GPU</span> <br>
                    with 6 cores
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
#gaming {
    height: 100%;
    background-color: var(--apple-darker);

    .top {
        padding-top: 6rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        text-align: center;

        .title {
            color: var(--apple-lighter);
            font-size: 4.25rem;
            font-weight: 600;
            margin-top: 3rem;
        }

        & p {
            color: var(--apple-gray-500);
            font-size: 1.5rem;
            font-weight: 500;
        }
    }

    .bottom_text {
        padding-top: 5rem;
        display: flex;
        gap: 2rem;

        .text {
            width: calc(50% - 1rem);
            overflow: hidden;

            .info_text {
                color: var(--apple-gray-500);
                font-size: 1.3rem;
                line-height: 1.6rem;
                font-weight: 500;
                letter-spacing: 0.4px;
                transform: translateY(120%);
                opacity: 0;
            }

            & span {
                color: var(--apple-lighter);
            }
        }

        .text:first-child {
            padding-left: 1rem;
            padding-right: 2rem;
        }

        .text:nth-child(2) {
            padding-left: 2rem;
            padding-right: 1rem;

            & span {
                font-size: 3rem;
                line-height: 4rem;
                font-weight: 500;
            }
        }



        .text:first-child .info_text:first-child {
            margin-bottom: 2rem;
        }
    }


}
</style>
