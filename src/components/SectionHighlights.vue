<script>
import { store } from '../store.js'
import { animateLinks, animateTitle } from '../assets/js/animations.js';
import VideoCarousel from './VideoCarousel.vue';

export default {
    name: 'AppHighlights',
    components: {
        VideoCarousel
    },
    mounted() {
        animateTitle(this.$refs.title);

        const links = document.querySelectorAll('.link');
        animateLinks(links)
    },
    methods: {
        setIsHover(isHovered) {
            store.isHovered = isHovered;
        }
    },
};
</script>

<template>
    <section id="highlights">
        <div class="top container">
            <div @mouseover="setIsHover(true)" @mouseleave="setIsHover(false)" class="title no_select" ref="title">Get
                The
                Highlights.</div>
            <div class="links">
                <div class="link" @mouseover="setIsHover(true)" @mouseleave="setIsHover(false)">
                    <a href="#">Watch film</a>
                    <img src="/assets/images/watch.svg" alt="watch">
                </div>
                <div class="link" @mouseover="setIsHover(true)" @mouseleave="setIsHover(false)">
                    <a href="#">Watch the event</a>
                    <img src="/assets/images/right.svg" alt="right arrow">
                </div>
            </div>
        </div>
        <VideoCarousel />
    </section>
</template>

<style scoped>
#highlights {
    width: 100vw;
    overflow: hidden;
    min-height: 100vh;
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

        .links {
            display: flex;
            gap: 1.5rem;
            margin-bottom: .2rem;

            & div {
                display: flex;
                align-items: center;
                gap: .5rem;
            }

            .link {
                opacity: 0;
                transform: translateY(20px);

                & a {
                    color: var(--apple-primary-light);
                    font-size: 1.25rem;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
}
</style>
