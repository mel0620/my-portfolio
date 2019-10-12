<template>
    <div class="collection">
        <div ref="collectionItem" class="collection__item" v-ripple v-ripple:blue v-for="(coll, i) in collections" :key="i" @click="$router.push(coll.route)">
            <q-img spinner-color="black" :ratio="1" contain :src="coll.thumb" class="collection__item-thumb"></q-img>
            <div class="collection__item-name">{{ coll.name }}</div>
        </div>
    </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
    data () {
        return {
            collections: [
                {
                    thumb: 'statics/collection/digima/mockup/07.jpg',
                    name: 'Website',
                    route: '/design-gallery/websites'
                },
                {
                    thumb: 'statics/collection/logo/01.jpg',
                    name: 'Logo',
                    route: '/design-gallery/'
                },
                {
                    thumb: 'statics/collection/buttons/p9.jpg',
                    name: 'Pin',
                    route: '/design-gallery/'
                },
                {
                    thumb: 'statics/collection/shirts/06.jpg',
                    name: 'Shirt',
                    route: '/design-gallery/'
                },
                {
                    thumb: 'statics/collection/tarps/03.jpg',
                    name: 'Tarp',
                    route: '/design-gallery/'
                },
                {
                    thumb: 'statics/collection/profile.jpg',
                    name: 'Others',
                    route: '/design-gallery/'
                }
            ]
        }
    },
    mounted() {
        const { pageTitle } = this.$refs
        const { collectionItem } = this.$refs
		const timeline = new TimelineLite()
        
        timeline.staggerFromTo(collectionItem, .3, { opacity: 0}, {opacity: 1}, .3)
    }
}
</script>