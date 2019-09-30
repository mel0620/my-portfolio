<template>
    <q-page padding class="bg-grey-2">
        <div class="container">
            <div ref="pageTitle">
                <div class="text-h4 q-mt-lg q-mb-md">Design Gallery</div>
                <q-separator></q-separator>
            </div>
            <div class="collection-wrapper">
                <div class="collection">
                    <div ref="collectionItem" class="collection__item" v-ripple v-ripple:blue v-for="(coll, i) in collections" :key="i">
                        <q-img spinner-color="black" :ratio="1" contain :src="coll.thumb" class="collection__item-thumb"></q-img>
                        <div class="collection__item-name">{{ coll.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
export default {
    data () {
        return {
            collections: [
                {
                    thumb: 'statics/collection/digima/mockup/website.jpg',
                    name: 'Website'
                },
                {
                    thumb: 'statics/collection/logo/01.jpg',
                    name: 'Logo'
                },
                {
                    thumb: 'statics/collection/buttons/p9.jpg',
                    name: 'Pin'
                },
                {
                    thumb: 'statics/collection/shirts/06.jpg',
                    name: 'Shirt'
                },
                {
                    thumb: 'statics/collection/tarps/03.jpg',
                    name: 'Tarp'
                },
                {
                    thumb: 'statics/collection/profile.jpg',
                    name: 'Others'
                }
            ]
        }
    },
    mounted() {
        const { pageTitle } = this.$refs
        const { collectionItem } = this.$refs
		const timeline = new TimelineLite()
        
        timeline.fromTo(pageTitle, .3, { opacity: 0, y: '-10px'}, {opacity: 1, y: '0px'}, .3)
                .staggerFromTo(collectionItem, .3, { opacity: 0}, {opacity: 1}, .3)
    }
}
</script>

<style lang="scss">
.collection-wrapper {
    margin-top: 2.5rem;
    .collection {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 2rem;

        &__item {
            background-color: #fff;
            border-radius: 4px;
            padding: 1rem;
            height: 250px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .3s all ease-in-out;
            overflow: hidden;
            cursor: pointer;

            &::before {
                content: ' ';
                background-color: rgba(#000, 0);
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                transition: .3s all ease-in-out;
            }
            
            @mixin box-shadow($color) {
                box-shadow: 0px 20px 10px -10px rgba($color, .3);
            }

            &-thumb {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                // padding: 1rem;
            }
            
            &-name {
                text-align: center;
                font-size: 1.5rem;
                font-weight: 600;
                position: relative;
                z-index: 2;
                color: #fff;
                text-transform: uppercase;
                transition: .3s all ease-in-out;
                transform: translateY(120px);
                letter-spacing: 2px;
                opacity: 0;
            }

            &:hover {
                @include box-shadow(#000);
                transform: translateY(-5px);

                &::before {
                    background-color: rgba(#000, .6);
                }

                .collection__item-name {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
        }

        @media screen and (max-width: 500px){
            grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));

            &__item {
                height: 125px;
            }
        }
    }
}
</style>