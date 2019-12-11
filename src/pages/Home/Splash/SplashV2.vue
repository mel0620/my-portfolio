<template>
    <q-page class="splash-v2 rellax" data-rellax-speed="7" id="home">
        <div class="splash-overlay"></div>
        <div class="container">
            <!-- <div class="hero-v2 lax" data-lax-opacity="200 1, 100 1, 0 0" data-lax-anchor="self"> -->
            <div class="hero-v2">
                <div class="my-box"></div>
                <div class="my-box-border"></div>
                <div class="name-wrapper">
                    <div class="name">Rommel Cuneta</div>
                    <div class="name-overlay"></div>
                </div>
                <div class="titles-wrapper">
                    <div class="titles">Web Designer and Frontend Developer</div>
                    <div class="title-overlay"></div>
                </div>
            </div>
        </div>
        <img class="box-outlined lax" style="transform: rotate(90deg)" data-lax-preset="spin" src="../../../statics/splash/box-outlined.svg" alt="">
        <img class="box-filled lax" style="transform: rotate(90deg)" data-lax-preset="spin" src="../../../statics/splash/box-filled.svg" alt="">
        <img class="stagger-line lax" data-lax-preset="leftToRight eager" src="../../../statics/splash/stagger-line.svg" alt="">
        <img class="stagger-line2 lax" data-lax-preset="rightToLeft" src="../../../statics/splash/stagger-line.svg" alt="">
        <img class="dots" data-rellax-speed="-2" src="../../../statics/splash/dots.svg" alt="">
        <img class="stagger-arrow" data-rellax-speed="10" src="../../../statics/splash/stagger-arrow.svg" alt="">
        <img class="backslashes" data-rellax-speed="10" src="../../../statics/splash/backslashes.svg" alt="">
    </q-page>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
import lax from 'lax.js'
import Rellax from "rellax"
// import "particles.js"

export default {
    data (){
        return {
            
        }
    },
    methods: {
        myParallax() {
            // window.onload = function() {}
            lax.setup() // init

            const updateLax = () => {
                lax.update(window.scrollY)
                window.requestAnimationFrame(updateLax)
            }

            window.requestAnimationFrame(updateLax)

            var rellax = new Rellax('.splash-v2');
            var rellax2 = new Rellax('.stagger-arrow');
            var rellax3 = new Rellax('.dots');
            var rellax4 = new Rellax('.backslashes');
        }
    },
    mounted () {
        const timeline = new TimelineLite()

        // window.addEventListener("load", () => {
        // });
        setTimeout(() => {
            timeline.to(".name-overlay", .6, {width: '100%'})
                    .to(".name-overlay", .6, {width: 0, right: 0, ease: Circ.easeOut})
                    .to(".name", .2, {opacity: 1})
                    .to(".title-overlay", .6, {width: '100%'}, "=-.6")
                    .to(".title-overlay", .6, {left: 0, width: 0, ease: Circ.easeOut})
                    .to(".titles", .3, {opacity: 1})
                    .to(".my-box", .6, {scale: 1, opacity: .9, ease: Back.easeOut.config(1.7)})
                    .to(".my-box-border", .6, {opacity: 1})
                    .to(".my-box-border", .3, {x: 20, y: 20, ease: Back.easeOut.config(2)})
                    .to(".my-box", .6, {opacity: .8});
        }, 2000)

        this.myParallax();

        // particlesJS.load('particles-js', '../../../assets/particles.json', function() {
        //     console.log('callback - particles-js config loaded');
        // });
    }
}
</script>

<style lang="scss">
.splash-v2 {
    // background: var(--splash-bg-light);
    background-color: #fff;
    // background: linear-gradient(90deg, rgba(#fff, .8), rgba(orange, .5),), url('../../../statics/splash-bg.jpg');
    // background-image: url('../../../statics/splash-bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;

    .splash-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(#fff, .5);
        z-index: 1;

        @media screen and (max-width: 800px){ 
            background-color: rgba(#fff, .9);
        }
    }
    
    .me {
        position: absolute;
        right: 0;
        top: 0;
        transform: translateY(100px);
        max-width: 100%;
        height: auto;
        z-index: 2;
        filter: grayscale(100%);
        opacity: .5;
    }

    .hero-v2 {
        text-align: center;
        position: relative;
        z-index: 5;
        background-color: transparent;
        width: max-content;
        margin: auto;
        padding: 1rem 2rem;
        z-index: 1;

        .my-box {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #eee;
            opacity: 0;
            z-index: 2;
            transform: scale(0);
        }

        .my-box-border {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            box-shadow: 0 0 0 8px #555555;
            opacity: 0;
            z-index: 1;
        }

        .name-wrapper {
            position: relative;
            width: max-content;
            margin: 0 auto;
            z-index: 5;
            text-align: center;

            .name {
                font-size: 6rem;
                font-family: $ff4;
                text-transform: uppercase;
                font-weight: 700;
                color: #1a1a1a;
                letter-spacing: 4px;
                // white-space: nowrap;
                position: relative;
                z-index: 1;
                opacity: 0;
            }

            .name-overlay {
                position: absolute;
                top: 0;
                bottom: 0;
                background-color: #1c1c1c;
                z-index: 5;
            }
        }

        .titles-wrapper {
            position: relative;
            width: max-content;
            margin: -1rem auto 0;
            z-index: 5;

            .titles {
                font-family: $ff4;
                letter-spacing: 4px;
                font-size: 1.5rem;
                font-weight: 600;
                color: #303030;
                opacity: 0;
            }

            .title-overlay {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                background-color: #1c1c1c;
                z-index: 5;
            }
        }

        @media screen and (max-width: 800px){
            padding: 0;

            .my-box, .my-box-border {
                opacity: 0 !important;
            }

            .titles-wrapper {
                .titles {
                    margin-top: 1rem;
                    font-size: 1.5rem;
                }
            }
        }

        @media screen and (max-width: 500px){
            width: auto;

            .name-wrapper {
                width: 100%;

                .name {
                    font-size: 4rem;
                    line-height: 4rem;
                }
            }
            .titles-wrapper {
                width: 100%;

                .titles {
                    margin-top: 1rem;
                    font-size: 1.2rem;
                }
            }
        }

        @media screen and (max-width: 321px){
            .name-wrapper {
                .name {
                    font-size: 2rem;
                }
            }
            .titles-wrapper {
                .titles {
                    margin-top: 0.875rem;
                    font-size: 0.875rem;
                }
            }
        }
    }

    .box-outlined {
        position: absolute;
        top: -30px;
        left: -30px;
        width: 125px;
        opacity: .5;
    }

    .box-filled {
        position: absolute;
        top: 50px;
        left: 50px;
        width: 80px;
        opacity: .2;
    }

    .stagger-line {
        position: absolute;
        bottom: 25px;
        left: -250px;
        width: 100px;
    }

    .stagger-line2 {
        position: absolute;
        top: 150px;
        right: -500px;
        width: 80px;
    }

    .dots {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 50px;
    }

    .stagger-arrow {
        position: absolute;
        bottom: -10px;
        right: 125px;
        width: 20px;
    }

    .backslashes {
        position: absolute;
        bottom: -10px;
        left: 25px;
        width: 15px;
    }
}
</style>