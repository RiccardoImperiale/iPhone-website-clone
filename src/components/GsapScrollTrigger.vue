<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
    name: 'GsapScrollTrigger',
    data() {
        return {

        };
    },
    mounted() {
        gsap.registerPlugin(ScrollTrigger);

        this.$nextTick(() => {
            gsap.to(this.$refs.stagger_box1, {
                rotation: 360,
                x: 550,
                scale: 1.5,
                scrollTrigger: {
                    trigger: this.$refs.stagger_box1,
                    start: 'bottom bottom',
                    end: 'top 50%',
                    scrub: true,
                    markers: true, // For debugging, remove in production
                },
            });
            gsap.to(this.$refs.stagger_box2, {
                rotation: 360,
                x: -500,
                borderRadius: 100,
                scale: 1.5,
                scrollTrigger: {
                    trigger: this.$refs.stagger_box2,
                    start: 'bottom bottom',
                    end: 'top 50%',
                    scrub: true,
                    markers: true, // For debugging, remove in production
                },
            });
        })
    }
}
</script>


<template>
    <div class="wrapper">
        <h1>Scroll Trigger</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quisquam sit consectetur! Similique velit
            dignissimos pariatur, explicabo laboriosam dolore architecto expedita, vel veritatis distinctio vitae.
            Soluta facilis porro velit asperiores!
            Animi tempore eligendi architecto magnam repellendus ut quasi veniam numquam labore vel, est eaque
            consequuntur possimus assumenda aliquam eius voluptas ducimus perspiciatis, soluta, facere quis. Quo aperiam
            ex officiis dicta.
            Saepe temporibus perferendis et cumque eaque ipsam quam, sequi obcaecati doloribus veniam consequatur
            recusandae minima at, praesentium natus amet expedita maiores quas? Quaerat enim repudiandae quam dolor,
            consequatur modi. Ratione!
            Repellendus assumenda exercitationem obcaecati rerum cumque ea natus incidunt, sed quas quo quasi illo,
            accusantium voluptates perferendis molestiae! Deserunt tempora repudiandae ducimus officia, nisi provident
            ribus animi suscipit
            explicabo eum voluptatum voluptatem maxime ab. Sed tempora quo quia porro quibusdam dolorem aliquid? Ex.
            Facere reprehenderit hic animi labore esse, accusantium natus sed dolorem nostrum dignissimos, adipisci
            eius, veritatis itaque minus perspiciatis. Modi doloremque tenetur ipsa deserunt repudiandae quas! Facere
            aliquid pariatur esse nostrum.
            Nulla, nam quisquam quidem dolorum atque est eos qui maxime neque voluptas maiores suscipit quos reiciendis
            exercitationem ipsum? Nemo amet sint quibusdam voluptatem tempore quaerat soluta numquam saepe quia facilis!
            Ab fuga nobis, eum nisi enim consequuntur similique commodi inventore beatae explicabo, aliquam optio, sit
            itaque libero odit ducimus minima veritatis! Repellat aliquid fugit voluptatum culpa. Blanditiis, expedita.
            Maiores, excepturi.
            Vero veritatis placeat quidem dignissimos iste, harum voluptas sapiente nulla quas illum voluptate, amet
            iure assumenda, reprehenderit nostrum ipsam eaque adipisci laboriosam rerum ullam! Est quidem fugiat quo ut
            iste?
            Distinctio omnis quo numquam similique! Labore hic accusantium distinctio, ducimus rerum debitis numquam
            officiis amet possimus quidem voluptas? Maxime deserunt minus consequuntur ab, amet voluptatem iste dolorum
            atque voluptas quasi!
            Eum maxime, aperiam pariatur quia corporis nostrum aliquid adipisci dignissimos. Rerum placeat quo
            blanditiis unde similique officiis dolor odio esse et magnam? Ipsum iusto magni cum officia repellendus
            doloremque dolore.
            Aperiam consequuntur aut omnis, consequatur deleniti iste veritatis ex optio, blanditiis neque soluta
            excepturi modi minus voluptate, mollitia autem error maiores. Aliquam pariatur dolor deleniti! Labore
            debitis dolorem quidem veniam!
            Aut similique repellendus culpa ullam id ex vel numquam nostrum expedita! Hic non exercitationem incidunt
            minima eos quis nisi soluta, quibusdam facilis laborum officiis cumque, nulla ratione facere fugit
            accusamus.
            Officiis ipsa nesciunt omnis? Et quas voluptas recusandae natus corporis possimus officia veritatis
            consequatur, cumque non nemo enim consectetur, explicabo sequi perspiciatis eum assumenda ducimus qui saepe
            impedit dolor fugiat! Eveniet dolor
            perferendis officiis totam corrupti commodi repellendus, exercitationem quos illo non eligendi ipsam, quidem
            nemo a!
            Officia, quaerat! Mollitia sequi quis voluptas accusamus, velit veniam esse dolorum commodi eveniet eius
            nulla reiciendis optio, reprehenderit et inventore numquam facilis dolores consequatur temporibus ducimus
            asperiores! Neque, possimus debitis?
            Quam praesentium corrupti neque officia! Nihil sit fugit eos a provident? Quas vitae, aspernatur sunt
            repellat eum quasi porro autem velit dicta laborum, vero facere expedita eligendi officiis, distinctio
            quidem.
            Ipsa, veritatis nostrum nulla recusandae numquam temporibus iure sed voluptatum reprehenderit architecto, a
            natus quo quae. Culpa vitae deserunt numquam, consectetur nostrum veniam nisi molestias tempora fugit enim
            at libero.
            ecati, repudiandae possimus
            accusantium placeat vel.
            Ratione temporibus commodi, error ducimus hic ipsa ipsam laboriosam quas pariatur aspernatur esse architecto
            odio harum provident? Facilis odit corporis, quidem tenetur expedita aspernatur necessitatibus fugit
            distinctio eaque? Hic, nihil.

        </p>

        <div class="boxes">
            <div ref="stagger_box1" class="box" id="red_box"></div>
            <div ref="stagger_box2" class="box" id="pink_box"></div>
        </div>

        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quisquam sit consectetur! Similique velit
            dignissimos pariatur, explicabo laboriosam dolore architecto expedita, vel veritatis distinctio vitae.
            Soluta facilis porro velit asperiores!
            Animi tempore eligendi architecto magnam repellendus ut quasi veniam numquam labore vel, est eaque
            consequuntur possimus assumenda aliquam eius voluptas ducimus perspiciatis, soluta, facere quis. Quo aperiam
            ex officiis dicta.
            Saepe temporibus perferendis et cumque eaque ipsam quam, sequi obcaecati doloribus veniam consequatur
            recusandae minima at, praesentium natus amet expedita maiores quas? Quaerat enim repudiandae quam dolor,
            consequatur modi. Ratione!
            Repellendus assumenda exercitationem obcaecati rerum cumque ea natus incidunt, sed quas quo quasi illo,
            accusantium voluptates perferendis molestiae! Deserunt tempora repudiandae ducimus officia, nisi provident
            ribus animi suscipit
            explicabo eum voluptatum voluptatem maxime ab. Sed tempora quo quia porro quibusdam dolorem aliquid? Ex.
            Facere reprehenderit hic animi labore esse, accusantium natus sed dolorem nostrum dignissimos, adipisci
            eius, veritatis itaque minus perspiciatis. Modi doloremque tenetur ipsa deserunt repudiandae quas! Facere
            aliquid pariatur esse nostrum.
            Nulla, nam quisquam quidem dolorum atque est eos qui maxime neque voluptas maiores suscipit quos reiciendis
            exercitationem ipsum? Nemo amet sint quibusdam voluptatem tempore quaerat soluta numquam saepe quia facilis!
            Ab fuga nobis, eum nisi enim consequuntur similique commodi inventore beatae explicabo, aliquam optio, sit
            itaque libero odit ducimus minima veritatis! Repellat aliquid fugit voluptatum culpa. Blanditiis, expedita.
            Maiores, excepturi.
            Vero veritatis placeat quidem dignissimos iste, harum voluptas sapiente nulla quas illum voluptate, amet
            iure assumenda, reprehenderit nostrum ipsam eaque adipisci laboriosam rerum ullam! Est quidem fugiat quo ut
            iste?
            Distinctio omnis quo numquam similique! Labore hic accusantium distinctio, ducimus rerum debitis numquam
            officiis amet possimus quidem voluptas? Maxime deserunt minus consequuntur ab, amet voluptatem iste dolorum
            atque voluptas quasi!
            Eum maxime, aperiam pariatur quia corporis nostrum aliquid adipisci dignissimos. Rerum placeat quo
            blanditiis unde similique officiis dolor odio esse et magnam? Ipsum iusto magni cum officia repellendus
            doloremque dolore.
            Aperiam consequuntur aut omnis, consequatur deleniti iste veritatis ex optio, blanditiis neque soluta
            excepturi modi minus voluptate, mollitia autem error maiores. Aliquam pariatur dolor deleniti! Labore
            debitis dolorem quidem veniam!
            Aut similique repellendus culpa ullam id ex vel numquam nostrum expedita! Hic non exercitationem incidunt
            minima eos quis nisi soluta, quibusdam facilis laborum officiis cumque, nulla ratione facere fugit
            accusamus.
            Officiis ipsa nesciunt omnis? Et quas voluptas recusandae natus corporis possimus officia veritatis
            consequatur, cumque non nemo enim consectetur, explicabo sequi perspiciatis eum assumenda ducimus qui saepe
            impedit dolor fugiat! Eveniet dolor
            perferendis officiis totam corrupti commodi repellendus, exercitationem quos illo non eligendi ipsam, quidem
            nemo a!
            Officia, quaerat! Mollitia sequi quis voluptas accusamus, velit veniam esse dolorum commodi eveniet eius
            nulla reiciendis optio, reprehenderit et inventore numquam facilis dolores consequatur temporibus ducimus
            asperiores! Neque, possimus debitis?
            Quam praesentium corrupti neque officia! Nihil sit fugit eos a provident? Quas vitae, aspernatur sunt
            repellat eum quasi porro autem velit dicta laborum, vero facere expedita eligendi officiis, distinctio
            quidem.
            Ipsa, veritatis nostrum nulla recusandae numquam temporibus iure sed voluptatum reprehenderit architecto, a
            natus quo quae. Culpa vitae deserunt numquam, consectetur nostrum veniam nisi molestias tempora fugit enim
            at libero.
            ecati, repudiandae possimus
            accusantium placeat vel.
            Ratione temporibus commodi, error ducimus hic ipsa ipsam laboriosam quas pariatur aspernatur esse architecto
            odio harum provident? Facilis odit corporis, quidem tenetur expedita aspernatur necessitatibus fugit
            distinctio eaque? Hic, nihil.

        </p>

    </div>
</template>

<style>
.boxes {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
}

#red_box {
    width: 100px;
    height: 100px;
    background-color: rgb(237, 82, 82);
    border-radius: 1rem;
}

#pink_box {
    width: 100px;
    height: 100px;
    background-color: rgb(214, 82, 237);
    border-radius: 1rem;
}
</style>
