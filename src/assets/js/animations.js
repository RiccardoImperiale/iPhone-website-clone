import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const animateModels = (models_wrapper) => {
    ScrollTrigger.create({
        trigger: models_wrapper,
        start: 'top bottom+=80%',
        end: 'top bottom+=65%',
        scrub: true,
        onEnter: () => {
            gsap.to(models_wrapper, {
                opacity: 1,
                y: '0%',
                duration: 1,
                ease: 'power2.inOut'
            });
        },
        onLeaveBack: () => {
            gsap.to(models_wrapper, {
                opacity: 0,
                y: '100%',
                duration: 1,
                ease: 'power1.inOut'
            });
        },
    })
};

export const animateSizeCircle = (size, sizeCircle) => {
    const circle = sizeCircle;
    if (size === 'small') {
        gsap.to(circle, {
            x: '-50%',
            duration: 0.5,
            ease: 'power2.inOut'

        });
    } else {
        gsap.to(circle, {
            x: '50%',
            duration: 0.5,
            ease: 'power2.inOut'
        });
    }
};

export const animatePhoneSizes = (size, iPhone_lg, iPhone_sm) => {
    const lg = size === 'small' ? '-100%' : '0%';
    const sm = size === 'small' ? '0%' : '100%';

    gsap.to(iPhone_lg, {
        x: lg,
        duration: 1,
        ease: 'power2.inOut'
    });

    gsap.to(iPhone_sm, {
        x: sm,
        duration: 1,
        ease: 'power2.inOut'
    });
};

export const animateTitle = (title) => {
    ScrollTrigger.create({
        trigger: title,
        start: 'top bottom-=150px',
        end: 'top bottom+=100',
        scrub: true,
        onEnter: () => {
            gsap.to(title, {
                opacity: 1,
                duration: .5,
                y: 0,
                ease: 'power1.inOut'
            });
        },
        onLeaveBack: () => {
            gsap.to(title, {
                opacity: 0,
                duration: .5,
                y: 100,
                ease: 'power1.inOut'
            });
        },
    })
};

export const animateLinks = (links) => {
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
}

export const animateImages = (images) => {
    ScrollTrigger.batch(images, {
        start: 'top 85%',
        scrub: true,
        onEnter: batch => {
            gsap.to(batch, {
                opacity: 1,
                scale: 1,
                stagger: 0.25,
                duration: 1.5,
                filter: "blur(0px)",
                ease: 'power1'
            });
        },
        onLeaveBack: batch => {
            gsap.to(batch, {
                opacity: 0.5,
                scale: 1.3,
                stagger: 0.25,
                duration: 1.5,
                filter: "blur(10px)",
                ease: 'power1'
            });
        },
    });
}

export const animateInfos = (infos) => {
    ScrollTrigger.batch(infos, {
        start: 'top 98%',
        scrub: true,
        onEnter: batch => {
            gsap.to(batch, {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.85,
                ease: 'power2.inOut'
            });
        },
        onLeaveBack: batch => {
            gsap.to(batch, {
                opacity: 0,
                y: '-150px',
                stagger: 0.1,
                duration: 0.85,
                ease: 'power2.inOut'
            });
        },
    });
}

export const animateVideo = (video) => {
    gsap.to(video, {
        scrollTrigger: {
            trigger: video,
            toggleActions: 'play pause reverse restart',
            start: '-10% bottom'
        },
        onComplete: () => {
            video.play()
        }
    })
}

export const animateChip = (chip) => {
    gsap.from(chip, {
        scrollTrigger: {
            trigger: chip,
            start: '20% bottom',
            toggleActions: "restart none none none"
        },
        opacity: 0,
        scale: 2,
        duration: 2,
        ease: 'power2.inOut'
    })
}






