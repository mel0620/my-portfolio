<template>
    <section class="about-me-wrapper">
        <div class="container">
            <div data-scroll data-text="section-text-header" :style="`--text-bg: 'ABOUT ME'`">{{ section_text }}</div>
            <div class="about-me" data-scroll>
                <div class="portrait" :style="`background-image: url(${portrait})`">
                    <!-- <img class="img-fluid" src="statics/me.png" alt="Rommel Cuneta's Photo"> -->
                </div>
                <div class="paragraph">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, eius dolorum? Dolorem, dignissimos deserunt. Et quam quas magnam, at cupiditate saepe dicta, atque minima tempore inventore dolore ut quaerat corporis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias ipsam ullam illum architecto sit culpa quia. Consequatur, aliquam illo.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quae totam accusamus deserunt tenetur soluta, ipsam, esse, repudiandae temporibus beatae harum exercitationem? Magnam a facilis quibusdam molestiae recusandae dolorum sapiente.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ScrollOut from "scroll-out";
export default {
    data () {
        return {
            section_text: 'About Me',
            portrait: 'statics/me.png'
        }
    },
    mounted () {
        ScrollOut();
    }
}
</script>

<style lang="scss">
.about-me-wrapper {
    padding: 24px 0;
    padding-bottom: 5rem;

    .about-me {
        padding-top: 3rem;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 2rem;

        .portrait {
            width: 400px;
            height: 400px;
            background-color: #eeeeee;
            position: relative;
            background-size: 350px;
            background-position: 20px 20px;
            background-repeat: no-repeat;
            transition: .3s all ease-in-out;
            z-index: 5;
            clip-path: polygon(0 0, 95% 5%, 93% 93%, 0% 100%);
            margin: auto;
        }

        .paragraph {
            p {
                letter-spacing: 1px;
                font-weight: 400;
            }
        }

        @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;

            .portrait {
                width: 300px;
                height: 300px;
                background-size: 250px;
            }
        }

        @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;

            .portrait {
                width: 250px;
                height: 250px;
                background-size: 200px;
            }
        }
    }
}
</style>