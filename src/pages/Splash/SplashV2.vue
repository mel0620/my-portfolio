<template>
    <q-page class="splash-v2">
        <div class="container">
            <div ref="hero" class="hero-v2">
                <div ref="slide" class="slide-overlay"></div>
                <div ref="name" class="name">ROMMEL CUNETA</div>
                <div ref="title" class="titles">Web Designer | Frontend Developer</div>
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

        const { slide }     = this.$refs;
        const { name }     = this.$refs;
        const { title }     = this.$refs;
        const timeline 		= new TimelineLite()

        timeline.to(slide, .6, {width: '100%'})
                .to(slide, .6, {width: 0, right: 0})
                .to(name, .6, {opacity: 1})
                .to(title, .3, {opacity: 1})

    }
}
</script>

<style lang="scss">
.splash-v2 {
    background: linear-gradient(22.5deg, rgba(67, 67, 67, 0.02) 0%, rgba(67, 67, 67, 0.02) 29%,rgba(47, 47, 47, 0.02) 29%, rgba(47, 47, 47, 0.02) 37%,rgba(23, 23, 23, 0.02) 37%, rgba(23, 23, 23, 0.02) 55%,rgba(182, 182, 182, 0.02) 55%, rgba(182, 182, 182, 0.02) 69%,rgba(27, 27, 27, 0.02) 69%, rgba(27, 27, 27, 0.02) 71%,rgba(250, 250, 250, 0.02) 71%, rgba(250, 250, 250, 0.02) 100%),linear-gradient(67.5deg, rgba(117, 117, 117, 0.02) 0%, rgba(117, 117, 117, 0.02) 14%,rgba(199, 199, 199, 0.02) 14%, rgba(199, 199, 199, 0.02) 40%,rgba(33, 33, 33, 0.02) 40%, rgba(33, 33, 33, 0.02) 48%,rgba(135, 135, 135, 0.02) 48%, rgba(135, 135, 135, 0.02) 60%,rgba(148, 148, 148, 0.02) 60%, rgba(148, 148, 148, 0.02) 95%,rgba(53, 53, 53, 0.02) 95%, rgba(53, 53, 53, 0.02) 100%),linear-gradient(135deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 6%,rgba(251, 251, 251, 0.02) 6%, rgba(251, 251, 251, 0.02) 18%,rgba(2, 2, 2, 0.02) 18%, rgba(2, 2, 2, 0.02) 27%,rgba(253, 253, 253, 0.02) 27%, rgba(253, 253, 253, 0.02) 49%,rgba(128, 128, 128, 0.02) 49%, rgba(128, 128, 128, 0.02) 76%,rgba(150, 150, 150, 0.02) 76%, rgba(150, 150, 150, 0.02) 100%),linear-gradient(90deg, #FFF,#FFF);
    background-attachment: fixed;
    display: flex;
    align-items: center;
    
    .hero-v2 {
        text-align: center;
        position: relative;

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
            opacity: 0;
        }

        .titles {
            font-family: $ff1;
            letter-spacing: 4px;
            font-size: 1.5rem;
            color: #505050;
            opacity: 0;
        }

        @media screen and (max-width: 500px){
            .name {
                font-size: 6rem;
                line-height: 6rem;
            }
            .titles {
                margin-top: 1rem;
                font-size: 1rem;
            }
        }

        @media screen and (max-width: 321px){
            .name {
                font-size: 4rem;
                line-height: 4rem;
            }
            .titles {
                margin-top: 1rem;
                font-size: 1rem;
            }
        }
    }
}
</style>