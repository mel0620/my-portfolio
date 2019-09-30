<template>
    <q-page padding class="bg-grey-3">
        <div class="container">
            <div ref="pageTitle">
                <div class="text-h4 q-mt-lg q-mb-md row items-center"> <q-btn @click="$router.go(-1)" class="q-mr-md" icon="mdi-arrow-left" flat round dense></q-btn> {{ page_name }}</div>
                <q-separator></q-separator>
            </div>
            <div class="images-wrapper">
                <div class="grid" ref="elem">
                    <div class="grid-sizer"></div>
                    <div class="grid-item" v-for="n in 7" :key="n">
                        <q-img spinner-color="black" class="img-fluid" :src="`./statics/collection/digima/mockup/0${n}.jpg`"></q-img>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

export default {
    data () {
        return {
            page_name: 'Websites',
            images: [
                {
                    src: ''
                }
            ]
        }
    },
    mounted() {
        // init masonry
        const grid = elem.imagesLoaded( function() {
            // init Masonry after all images have loaded
            const msnry = new Masonry( grid, {
                // options
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                percentPosition: true,
                gutter: 16,
                horizontalOrder: true
            });
        });
    }
}
</script>

<style lang="scss">
.images-wrapper {
    margin-top: 2.5rem;

    .grid {
        /* fluid 5 columns */
        .grid-sizer,
        .grid-item { width: 25%; }
        /* 2 columns */
        .grid-item--width2 { width: 40%; }

        &-item {
            margin-bottom: 16px;
        }
    }
}
</style>