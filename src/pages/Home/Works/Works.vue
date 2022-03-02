<template>
    <section class="works" id="works">
        <div class="container">
            <div class="section-title--work" data-text="section-text-header" :style="`--text-bg: ''`">{{ section_text }} <span class="bottom-line--work" data-line="border-bottom"></span></div>

            <div class="work-wrapper">
                <div class="work">
                    <div class="work__item" v-for="(item, i) in works" :key="i" :style="`--bg-image: url(${ item.site }); --bg-name-color: ${ item.color }`">
                        <q-btn type="a" :href="item.site" target="_blank" class="work__item-name">View {{ item.name }}</q-btn>
                    </div>
                </div>
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
            section_text: 'Works',
            works: [
                {
                    name: 'Lala Story',
                    site: '../../statics/works/lala.jpg',
                    color: '#151515'
                },
                {
                    name: 'Lokalize',
                    site: '../../statics/works/lokalize.jpg',
                    color: '#151515'
                },
                {
                    name: 'GRROW',
                    site: '../../statics/works/grrow.jpg',
                    color: '#151515'
                },
                {
                    name: 'Digima',
                    site: '../../statics/works/digima.jpg',
                    color: '#151515'
                },
                {
                    name: 'Ixcircle',
                    site: '../../statics/works/ixcircle.jpg',
                    color: '#151515'
                },
                {
                    name: 'Mabuhay Wellness',
                    site: '../../statics/works/mabuhay.jpg',
                    color: '#151515'
                },
                {
                    name: 'Ultra Proactive',
                    site: '../../statics/works/ultrapro.jpg',
                    color: '#151515'
                },
                {
                    name: '3xcell',
                    site: '../../statics/works/3xcell.jpg',
                    color: '#151515'
                },
                {
                    name: 'Brown',
                    site: '../../statics/works/brown.jpg',
                    color: '#151515'
                },
                // {
                //     name: 'MLM',
                //     site: '../../statics/works/mlm.jpg',
                //     color: '#151515'
                // },
            ]
        }
    },
    mounted () {
        // ScrollOut();

        var tl = new TimelineMax({onUpdate:updatePercentage});
        var tl2 = new TimelineMax();
        const controller = new ScrollMagic.Controller();

        tl.from(".section-title--work", .5, {y: 50, opacity: 0});
        tl.from(".bottom-line--work", .6, {opacity: 0, color: '#151515', width: 0});

        tl2.staggerFrom(".work__item", .2, {opacity: 0, y: -10, delay: 1}, 0.1)

        const scene = new ScrollMagic.Scene({
            triggerElement: '.works',
            triggerHook: "onLeave",
            duration: "100%"
        })
        .setPin(".works")
        .setTween(tl)
        .addTo(controller);

        const scene2 = new ScrollMagic.Scene({
            triggerElement: '.work-wrapper'
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
.works {
    --text-bg: #fff;
    padding: 24px 0;
    padding-bottom: 5rem;
    background-color: #151515;
    position: relative;
    z-index: 50;
    background: linear-gradient(55deg, rgba(208, 208, 208, 0.03) 0%, rgba(208, 208, 208, 0.03) 20%,rgba(55, 55, 55, 0.03) 20%, rgba(55, 55, 55, 0.03) 40%,rgba(81, 81, 81, 0.03) 40%, rgba(81, 81, 81, 0.03) 60%,rgba(208, 208, 208, 0.03) 60%, rgba(208, 208, 208, 0.03) 80%,rgba(191, 191, 191, 0.03) 80%, rgba(191, 191, 191, 0.03) 100%),linear-gradient(291deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 14.286%,rgba(105, 105, 105, 0.02) 14.286%, rgba(105, 105, 105, 0.02) 28.572%,rgba(230, 230, 230, 0.02) 28.572%, rgba(230, 230, 230, 0.02) 42.858%,rgba(216, 216, 216, 0.02) 42.858%, rgba(216, 216, 216, 0.02) 57.144%,rgba(181, 181, 181, 0.02) 57.144%, rgba(181, 181, 181, 0.02) 71.42999999999999%,rgba(129, 129, 129, 0.02) 71.43%, rgba(129, 129, 129, 0.02) 85.71600000000001%,rgba(75, 75, 75, 0.02) 85.716%, rgba(75, 75, 75, 0.02) 100.002%),linear-gradient(32deg, rgba(212, 212, 212, 0.03) 0%, rgba(212, 212, 212, 0.03) 12.5%,rgba(223, 223, 223, 0.03) 12.5%, rgba(223, 223, 223, 0.03) 25%,rgba(11, 11, 11, 0.03) 25%, rgba(11, 11, 11, 0.03) 37.5%,rgba(86, 86, 86, 0.03) 37.5%, rgba(86, 86, 86, 0.03) 50%,rgba(106, 106, 106, 0.03) 50%, rgba(106, 106, 106, 0.03) 62.5%,rgba(220, 220, 220, 0.03) 62.5%, rgba(220, 220, 220, 0.03) 75%,rgba(91, 91, 91, 0.03) 75%, rgba(91, 91, 91, 0.03) 87.5%,rgba(216, 216, 216, 0.03) 87.5%, rgba(216, 216, 216, 0.03) 100%),linear-gradient(312deg, rgba(113, 113, 113, 0.01) 0%, rgba(113, 113, 113, 0.01) 14.286%,rgba(54, 54, 54, 0.01) 14.286%, rgba(54, 54, 54, 0.01) 28.572%,rgba(166, 166, 166, 0.01) 28.572%, rgba(166, 166, 166, 0.01) 42.858%,rgba(226, 226, 226, 0.01) 42.858%, rgba(226, 226, 226, 0.01) 57.144%,rgba(109, 109, 109, 0.01) 57.144%, rgba(109, 109, 109, 0.01) 71.42999999999999%,rgba(239, 239, 239, 0.01) 71.43%, rgba(239, 239, 239, 0.01) 85.71600000000001%,rgba(54, 54, 54, 0.01) 85.716%, rgba(54, 54, 54, 0.01) 100.002%),linear-gradient(22deg, rgba(77, 77, 77, 0.03) 0%, rgba(77, 77, 77, 0.03) 20%,rgba(235, 235, 235, 0.03) 20%, rgba(235, 235, 235, 0.03) 40%,rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%,rgba(181, 181, 181, 0.03) 60%, rgba(181, 181, 181, 0.03) 80%,rgba(193, 193, 193, 0.03) 80%, rgba(193, 193, 193, 0.03) 100%),linear-gradient(80deg, rgba(139, 139, 139, 0.02) 0%, rgba(139, 139, 139, 0.02) 14.286%,rgba(114, 114, 114, 0.02) 14.286%, rgba(114, 114, 114, 0.02) 28.572%,rgba(240, 240, 240, 0.02) 28.572%, rgba(240, 240, 240, 0.02) 42.858%,rgba(221, 221, 221, 0.02) 42.858%, rgba(221, 221, 221, 0.02) 57.144%,rgba(74, 74, 74, 0.02) 57.144%, rgba(74, 74, 74, 0.02) 71.42999999999999%,rgba(201, 201, 201, 0.02) 71.43%, rgba(201, 201, 201, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(257deg, rgba(72, 72, 72, 0.03) 0%, rgba(72, 72, 72, 0.03) 16.667%,rgba(138, 138, 138, 0.03) 16.667%, rgba(138, 138, 138, 0.03) 33.334%,rgba(54, 54, 54, 0.03) 33.334%, rgba(54, 54, 54, 0.03) 50.001000000000005%,rgba(161, 161, 161, 0.03) 50.001%, rgba(161, 161, 161, 0.03) 66.668%,rgba(17, 17, 17, 0.03) 66.668%, rgba(17, 17, 17, 0.03) 83.33500000000001%,rgba(230, 230, 230, 0.03) 83.335%, rgba(230, 230, 230, 0.03) 100.002%),linear-gradient(47deg, rgba(191, 191, 191, 0.01) 0%, rgba(191, 191, 191, 0.01) 16.667%,rgba(27, 27, 27, 0.01) 16.667%, rgba(27, 27, 27, 0.01) 33.334%,rgba(66, 66, 66, 0.01) 33.334%, rgba(66, 66, 66, 0.01) 50.001000000000005%,rgba(36, 36, 36, 0.01) 50.001%, rgba(36, 36, 36, 0.01) 66.668%,rgba(230, 230, 230, 0.01) 66.668%, rgba(230, 230, 230, 0.01) 83.33500000000001%,rgba(93, 93, 93, 0.01) 83.335%, rgba(93, 93, 93, 0.01) 100.002%),linear-gradient(90deg, #FFF,#FFF);

    .work-wrapper {
        margin-top: 5rem;
        .work {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            grid-gap: 3rem;
            position: relative;
            text-align: center;

            &__item {
                --bg-image: #000;
                --bg-name-color: $amber-8;
                // background-color: #fff;

                padding: 3rem;
                box-shadow: 0 3px 20px 5px rgba(#000, .08);
                position: relative;
                min-height: 300px;
                overflow: hidden;
                transition: .3s all ease-in-out;
                font-family: $ff4;
                cursor: pointer;

                &::before {
                    content: ' ';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-image: var(--bg-image);
                    background-size: cover;
                    background-position: top;
                    background-repeat: no-repeat;
                    transition: .3s all ease-in-out;
                }

                &::after {
                    content: ' ';
                    background-color: #fff;
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    opacity: 0;
                    transform: translateY(-250px);
                    transition: .3s all ease-in-out;
                }

                &-name {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    text-align: center;
                    background-color: var(--bg-name-color);
                    width: 100%;
                    color: #fff;
                    padding: 4px 0;
                    transition: .3s all ease-in-out;
                    transform: translateY(50px);
                    z-index: 5;
                }

                &-btn {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) scale(0);
                    z-index: 9;
                    transition: .3s all ease-in-out;
                }

                &:hover {
                    background-color: #fff;
                    // box-shadow: 0 3px 20px 5px rgba(#000, .08);

                    &::before {
                        transform: scale(1.05);
                    }

                    &::after {
                        opacity: .8;
                        transform: translateY(0px);
                    }

                    .work__item-name {
                        transform: translateY(0);
                    }

                    .work__item-show {
                        // transform: translate(-50%, -50%) scale(1)
                    }
                }
            }

            @media screen and (max-width: 500px) {
                grid-template-columns: repeat(3, 1fr);
                grid-gap: 1rem;

                &__item {
                    &::before {
                        background-size: 60px;
                    }
                }
            }

            @media screen and (max-width: 321px) {
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 1rem;
            }
        }
    }
}
</style>