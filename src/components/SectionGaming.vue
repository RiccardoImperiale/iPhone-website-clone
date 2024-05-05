<script>
import { animateChip } from '../assets/js/animations.js';
import PhoneGaming from './PhoneGaming.vue'

export default {
    name: 'SectionGaming',
    components: {
        PhoneGaming
    },
    mounted() {

        animateChip(this.$refs.chip)
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

        <div class="bottom container">
            fwef
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


    .bottom {
        padding-top: 8rem;


    }
}
</style>
