<script>
import { gsap } from 'gsap';
import VideoCarousel from './VideoCarousel.vue';


export default {
    name: 'AppHighlights',
    components: {
        VideoCarousel
    },
    mounted() {
        gsap.to(this.$refs.title, { opacity: 1, y: 0 });

        const links = document.querySelectorAll('.link');

        gsap.to(links, { opacity: 1, y: 0, duration: .5, stagger: 0.25, ease: 'power1.inOut' });


    },
};
</script>

<template>
    <section id="highlights">
        <div class="top container">
            <div class="title" ref="title">Get The Highlights.</div>
            <div class="links">
                <a class="link" href="#">Watch film</a>
                <a class="link" href="#">Watch the event</a>
            </div>
        </div>

        <VideoCarousel />
    </section>
</template>

<style scoped>
#highlights {
    width: 100vw;
    overflow: hidden;
    height: 100%;
    background-color: #101010;
    padding: 5rem 0;

    .top {
        display: flex;
        justify-content: space-between;
        align-items: end;

        .title {
            opacity: 0;
            transform: translateY(20px);
            color: var(--apple-gray-500);
            font-size: 3.75rem;
            font-weight: 500;
        }

        .links {
            .link {
                opacity: 0;
                display: inline-block;
                transform: translateY(20px);
                color: var(--apple-primary-light);
                font-size: 1.5rem;
            }
        }
    }

}
</style>
