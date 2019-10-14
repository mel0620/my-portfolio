<template>
    <q-page class="splash-v2">
        <div class="container">
            <div ref="hero" class="hero-v2">
                <div ref="slide" class="slide-overlay"></div>
                <div ref="name" class="name">ROMMEL CUNETA</div>
                <div ref="underline" class="underline"></div>
                <div ref="title" class="titles">Web Designer | Frontend Developer</div>
            </div>
        </div>
        <!-- <img width="500" class="me" src="statics/me.png" alt=""> -->
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

        const { slide }     = this.$refs;
        const { name }      = this.$refs;
        const { underline }      = this.$refs;
        const { title }     = this.$refs;
        const timeline 		= new TimelineLite()

        timeline.to(slide, .8, {width: '100%'})
                .to(slide, .6, {width: 0, right: 0, ease: Circ.easeOut})
                .to(underline, .6, {width: '100%'})
                .fromTo(name, .6, {y: -10, opacity: 0}, {y: 0, opacity: 1})
                .fromTo(title, .3, {y: 10, opacity: 0}, {y: 0, opacity: 1})

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

        .slide-overlay {
            position: absolute;
            top: 0;
            bottom: 0;
            // right: 0;
            // left: 0;
            background-color: #1c1c1c;
        }

        .name {
            font-size: 8rem;
            font-family: $ff1;
            font-weight: 600;
            color: #1a1a1a;
            letter-spacing: 4px;
            white-space: nowrap;
        }
        
        .underline {
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -80%);
            height: 1px;
            background-color: rgba(#000, .12);
            // width: 100%;
            margin-bottom: 10px;
        }

        .titles {
            font-family: $ff1;
            letter-spacing: 4px;
            font-size: 1.5rem;
            color: #505050;
        }

        @media screen and (max-width: 800px){
            .name {
                font-size: 6rem;
                line-height: 6rem;
            }

            .underline {
                top: 75%;
                left: 50%;
                transform: translate(-50%, -75%);
            }

            .titles {
                margin-top: 1rem;
                font-size: 1.5rem;
            }
        }

        @media screen and (max-width: 500px){
            .name {
                font-size: 3rem;
                line-height: 3rem;
            }
            .underline {
                margin-top: 10px;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -55%);
            }
            .titles {
                margin-top: 1rem;
                font-size: 1rem;
            }
        }

        @media screen and (max-width: 321px){
            .name {
                font-size: 2rem;
                line-height: 2rem;
            }
            .underline {
                margin-top: 10px;
                top: 45%;
                left: 50%;
                transform: translate(-50%, -45%);
            }
            .titles {
                margin-top: 0.875rem;
                font-size: 0.875rem;
            }
        }
    }
}
</style>