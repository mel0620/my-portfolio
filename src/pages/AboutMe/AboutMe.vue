<template>
    <section class="about-me-wrapper">
        <div class="container">
            <div class="section-title" data-text="section-text-header" :style="`--text-bg: 'ABOUT ME'`">{{ section_text }}</div>
            <div class="about-me">
                <div class="box"></div>
                <div class="portrait" :style="`background-image: url(${portrait})`">
                    <!-- <img class="img-fluid" src="statics/me.png" alt="Rommel Cuneta's Photo"> -->
                </div>
                <div class="paragraph">
                    <p class="paragraph__item">Hi, I am Rommel Cuneta, I'm a Web Designer and a Frontend Developer. I'm a graduate of Bachelor of Science in Information Technology. Designing and coding is my passion. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, totam!</p>
                </div>
                <!-- <div class="paragraph">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, eius dolorum? Dolorem, dignissimos deserunt. Et quam quas magnam, at cupiditate saepe dicta, atque minima tempore inventore dolore ut quaerat corporis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias ipsam ullam illum architecto sit culpa quia. Consequatur, aliquam illo.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quae totam accusamus deserunt tenetur soluta, ipsam, esse, repudiandae temporibus beatae harum exercitationem? Magnam a facilis quibusdam molestiae recusandae dolorum sapiente.</p>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>
import ScrollOut from "scroll-out";
import {TweenMax, Power2, TimelineMax} from "gsap/TweenMax";
export default {
    data () {
        return {
            section_text: 'About Me',
            portrait: 'statics/me.png'
        }
    },
    mounted () {
        ScrollOut();

        var tl = new TimelineMax({onUpdate:updatePercentage});
        var tl2 = new TimelineMax();
        const controller = new ScrollMagic.Controller();

        tl.from(".section-title", .5, {y: 50, opacity: 0});
        tl.from(".portrait", 1, {x: 50, opacity: 0});
        tl.from(".paragraph", 1, {x: -50, opacity: 0})

        tl2.from(".box", 1, {opacity: 0, scale: 0})
        tl2.to(".box", 1, {left: '-62%', bottom: '-7%', scale: 4})

        const scene = new ScrollMagic.Scene({
            triggerElement: '.about-me-wrapper',
            triggerHook: "onLeave",
            duration: "50%"
        })
        .setPin(".about-me-wrapper")
        .setTween(tl)
        .addTo(controller);

        const scene2 = new ScrollMagic.Scene({
            triggerElement: '.section-title'
        })
        .setTween(tl2)
        .addTo(controller)

        function updatePercentage() {
            tl.progress();
        }
    }
}
</script>

<style lang="scss">
.about-me-wrapper {
    padding: 24px 0;
    padding-bottom: 5rem;
    position: relative;

    .box {
        position: absolute;
        width: 100px;
        height: 100px;
        margin: auto;
        border: 3px solid #555555;
        top: 0; right: 0; bottom: 0; left: 0;
        z-index: 0;

        @media screen and (max-width: 500px) {
            opacity: 0 !important;
        }
    }

    .about-me {
        padding-top: 3rem;
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 2.5rem;
        position: relative;
        z-index: 1;

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
                font-family: $ff4;
                letter-spacing: 1px;
                font-weight: 400;
                padding: 1rem;
                position: relative;
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