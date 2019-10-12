<template>
    <q-page padding class="technologies">
        <div class="container">
            <div data-text="section-text-header" :style="`--text-bg: 'TECHNOLOGY'`">{{ section_text }}</div>

            <div class="gallery-type-wrapper">
                <div class="gallery-type">
                    <div class="gallery-type__item" v-for="(item, i) in techs" :key="i" :style="`--bg-image: url(${ item.logo })`">
                        <div class="gallery-type__item-name">{{ item.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    data () {
        return {
            section_text: 'Technology I use',
            techs: [
                {
                    name: 'Bootstrap',
                    logo: 'statics/tech/bootstrap.svg'
                },
                {
                    name: 'Laravel',
                    logo: 'statics/tech/laravel.svg'
                },
                {
                    name: 'Vue',
                    logo: 'statics/tech/vue.svg'
                },
                {
                    name: 'HTML5',
                    logo: 'statics/tech/html.svg'
                },
                {
                    name: 'CSS3',
                    logo: 'statics/tech/css.svg'
                },
                {
                    name: 'Javascript',
                    logo: 'statics/tech/javascript.svg'
                },
                {
                    name: 'Photoshop',
                    logo: 'statics/tech/photoshop.svg'
                },
                {
                    name: 'Illustrator',
                    logo: 'statics/tech/illustrator.svg'
                },
                {
                    name: 'XD',
                    logo: 'statics/tech/xd.svg'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
.technologies {
    --text-bg: 'SECTION TEXT';

    [data-text="section-text-header"] {
        position: relative;
        text-align: center;
        font-size: 3rem;
        color: $text-dark;
        font-family: $ff1;
        margin: 3rem 0;
        color: $grey-10;

        &::before {
            content: var(--text-bg);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 6rem;
            font-weight: 700;
            opacity: .04;
            color: #1c1c1c;
        }
    }

    .gallery-type-wrapper {
        margin-top: 5rem;
        .gallery-type {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            grid-gap: 3rem;
            position: relative;

            &__item {
                --bg-image: #000;

                padding: 3rem;
                box-shadow: 0 3px 25px 10px rgba(#000, .08);
                border-radius: 5px;
                position: relative;
                min-height: 150px;
                overflow: hidden;

                &::before {
                    content: ' ';
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-image: var(--bg-image);
                    background-size: 100px;
                    background-position: center;
                    background-repeat: no-repeat;
                    transition: .3s all ease-in-out;
                }

                &::after {
                    content: ' ';
                    background-color: rgba(#000, .3);
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
                    background-color: $amber-8;
                    width: 100%;
                    color: #fff;
                    padding: 4px 0;
                    transition: .3s all ease-in-out;
                    transform: translateY(50px);
                    z-index: 5;
                }

                &:hover {

                    &::before {
                        transform: scale(1.1);
                    }

                    &::after {
                        opacity: 1;
                        transform: translateY(0px);
                    }

                    .gallery-type__item-name {
                        transform: translateY(0);
                    }
                }
            }
        }
    }
}
</style>