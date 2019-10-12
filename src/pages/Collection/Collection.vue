<template>
    <q-page padding class="bg-grey-3">
        <div class="container">
            <div ref="pageTitle">
                <div class="text-h4 q-mt-lg q-mb-md">Design Gallery</div>
                <q-separator></q-separator>
            </div>
            <div class="collection-wrapper">
                <router-view></router-view>
            </div>
        </div>
    </q-page>
</template>

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