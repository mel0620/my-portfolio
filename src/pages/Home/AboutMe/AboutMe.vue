<template>
    <section class="about-me-wrapper" id="aboutme">
        <!-- <div class="vertical-text">ABOUT ME</div> -->
        <div class="container">
            <div class="section-title" data-text="section-text-header" :style="`--text-bg: ''`">{{ section_text }} <span class="bottom-line--about" data-line="border-bottom"></span></div>
            <div class="about-me">
                <div class="box"></div>
                <div class="portrait" :style="`background-image: url(${portrait})`">
                    <!-- <img class="img-fluid" src="statics/me.png" alt="Rommel Cuneta's Photo"> -->
                </div>
                <div class="paragraph">
                    <p class="paragraph__item">Hi, I am Rommel Cuneta! I'm a Web Designer and a Frontend Developer focused on modern and latest trend design with a skill in web animation. I'm a graduate of Bachelor of Science in Information Technology. Passionate in design, coding and music.</p>
                    <q-btn @click="downloadResume()" class="text-capitalize" color="orange" outline label="Download Resume"></q-btn>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {TweenMax, Power2, TimelineMax} from "gsap/TweenMax";
import lax from 'lax.js'
export default {
    data () {
        return {
            section_text: 'About Me',
            portrait: 'statics/me.png'
        }
    },
    methods: {
        myParallax2() {
            window.onload = function() {
                lax.setup() // init

                const updateLax = () => {
                    lax.update(window.scrollY)
                    window.requestAnimationFrame(updateLax)
                }

                window.requestAnimationFrame(updateLax)
            }
        },
        downloadResume() {
            window.open("https://1drv.ms/b/s!An6oxnEfxsrxsj_8hp6jcnpa_3gh?e=tfoqOs", "_blank")
        } 
    },
    mounted () {
        var tl = new TimelineMax({onUpdate:updatePercentage});
        var tl2 = new TimelineMax();
        const controller = new ScrollMagic.Controller();

        tl.from(".section-title", 1, {y: 50, opacity: 0});
        tl.from(".bottom-line--about", .6, {opacity: 0, color: '#1c1c1c', width: 0});
        tl.from(".portrait", 1, {x: 50, opacity: 0});
        tl.from(".paragraph", 1, {x: -50, opacity: 0})

        // tl2.from(".vertical-text", .5, {y: '-10%', opacity: 0})
        tl2.from(".box", 1, {opacity: 0, scale: 0})
        tl2.to(".box", 1, {left: '-62%', bottom: '-7%', scale: 4})

        const scene = new ScrollMagic.Scene({
            triggerElement: '.about-me-wrapper',
            triggerHook: "onLeave",
            duration: "70%"
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

        this.myParallax2();
    }
}
</script>

<style lang="scss">
.about-me-wrapper {
    padding: 24px 0;
    padding-bottom: 5rem;
    position: relative;
    background-color: #1c1c1c;
    background: #292929;

    .vertical-text {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%) rotate(-90deg);
        font-family: $ff2;
        font-size: 10rem;
        opacity: .04;
    }

    .section-title {
        color: #fff;
    }

    .box {
        position: absolute;
        width: 100px;
        height: 100px;
        margin: auto;
        border: 3px solid #fff;
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
            background-color: #fff;
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
            padding: 1rem;
            p {
                font-family: $ff4;
                font-size: 1.5rem;
                letter-spacing: 1px;
                font-weight: 400;
                position: relative;
                color: white;
            }
        }

        @media screen and (max-width: 500px) {
            grid-template-columns: 1fr;

            .portrait {
                width: 300px;
                height: 300px;
                background-size: 250px;
                clip-path: none;
            }

            .paragraph {
                text-align: center;
                p {
                    font-size: 1rem;
                }
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