<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoCarousel from './VideoCarousel.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
    name: 'AppHighlights',
    components: {
        VideoCarousel
    },
    mounted() {
        ScrollTrigger.create({
            trigger: this.$refs.title,
            start: 'top bottom-=150px',
            // end: 'top bottom-=150px',
            end: '+=100',
            scrub: true,
            onEnter: () => {
                gsap.to(this.$refs.title, {
                    opacity: 1,
                    duration: .5,
                    y: 0,
                    ease: 'power1.inOut'
                });
            },
            onLeaveBack: () => {
                gsap.to(this.$refs.title, {
                    opacity: 0,
                    duration: .5,
                    y: 100,
                    ease: 'power1.inOut'
                });
            },
        });

        const links = document.querySelectorAll('.link');
        ScrollTrigger.batch(links, {
            start: 'top bottom-=250px',
            end: 'top bottom-=250px',
            scrub: true,
            onEnter: batch => {
                gsap.to(batch, {
                    opacity: 1,
                    y: '0',
                    duration: 0.3,
                    stagger: 0.25,
                    ease: 'power2.inOut'
                });
            },
            onLeaveBack: batch => {
                gsap.to(batch, {
                    opacity: 0,
                    y: '20px',
                    duration: 0.3,
                    stagger: 0.25,
                    ease: 'power2.inOut'
                });
            },
        });
    },
};
</script>

<template>
    <section id="highlights">
        <div class="top container">
            <div class="title" ref="title">Get The Highlights.</div>
            <div class="links">
                <div class="link">
                    <a href="#">Watch film</a>
                    <img src="/assets/images/watch.svg" alt="watch">
                </div>
                <div class="link">
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
