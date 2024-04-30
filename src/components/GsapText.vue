<script>
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

export default {
    name: 'GsapText',
    data() {
        return {

        };
    },
    mounted() {
        gsap.registerPlugin(TextPlugin)


        gsap.to(this.$refs.text, {
            duration: 1,
            opacity: 1,
            text: {
                value: "This is the new text",
                rtl: true
            },
            // delay: 1,
        });


        // gsap.to(this.$refs.text, {
        //     duration: 1,
        //     y: 0,
        //     opacity: 1,
        //     ease: 'expo.inOut',
        //     scrambleText: "THIS IS NEW TEXT"
        // });

        gsap.fromTo(this.$refs.par, {
            y: 20,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: 'expo.inOut',
            delay: 1
        }
        );

    }
}
</script>


<template>
    <div class="wrapper">
        <h1 ref="text">GsapStagger</h1>
        <p ref="par">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta deleniti maxime aperiam quas ea,
            expedita
            molestiae tempora voluptatum perspiciatis nihil sunt labore vitae nulla qui suscipit temporibus. Commodi,
            nesciunt hic enim incidunt tempore odio sunt est consequatur, eius, corporis harum ducimus ad deserunt. Sunt
            ad voluptates modi amet veniam illo.</p>
    </div>
</template>

<style>
.red_box {
    width: 100px;
    height: 100px;
    background-color: rgb(237, 82, 82);
    border-radius: 1rem;
}

h1 {
    /* transform: translateY(100px); */
    /* opacity: 0; */
}
</style>
