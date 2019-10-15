<template>
    <q-page class="splash-v2">
        <div class="container">
            <div class="hero-v2">
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
    </q-page>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
export default {
    data (){
        return {
            
        }
    },
    mounted () {
        const timeline 		= new TimelineLite()

        timeline.to(".name-overlay", .6, {width: '100%'})
                .to(".name-overlay", .6, {width: 0, right: 0, ease: Circ.easeOut})
                .fromTo(".name", .2, {opacity: 0}, {opacity: 1})
                .to(".title-overlay", .6, {width: '100%'}, "=-.6")
                .to(".title-overlay", .6, {left: 0, width: 0, ease: Circ.easeOut})
                .fromTo(".titles", .3, {opacity: 0}, {opacity: 1})
    }
}
</script>

<style lang="scss">
.splash-v2 {
    background: var(--splash-bg-light);
    background-attachment: fixed;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    
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

        .name-wrapper {
            position: relative;
            width: max-content;
            margin: 0 auto;

            .name {
                font-size: 8rem;
                font-family: $ff1;
                // text-transform: uppercase;
                font-weight: 500;
                color: #1a1a1a;
                letter-spacing: 4px;
                white-space: nowrap;
                position: relative;
                z-index: 1;
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

            .titles {
                font-family: $ff1;
                letter-spacing: 4px;
                font-size: 1.5rem;
                color: #505050;
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
            .name-wrapper {
                .name {
                    font-size: 6rem;
                }
            }
            
            .titles-wrapper {
                .titles {
                    margin-top: 1rem;
                    font-size: 1.5rem;
                }
            }
        }

        @media screen and (max-width: 500px){
            .name-wrapper {
                .name {
                    font-size: 3rem;
                    // line-height: 3rem;
                }
            }
            .titles-wrapper {
                width: 100%;
                .titles {
                    margin-top: 1rem;
                    font-size: 1rem;
                }
            }
        }

        @media screen and (max-width: 321px){
            .name-wrapper {
                .name {
                    font-size: 2rem;
                    // line-height: 2rem;
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
}
</style>