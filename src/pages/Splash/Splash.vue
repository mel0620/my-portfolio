<template>
	<q-page>
		<div class="hero" :style="`background-image: url('${bg_img}')`">
			<div class="container">
				<div class="intro-wrapper">
					<div ref="text" class="f-anton text">
						<div class="text-h1">I'm</div>
						<div class="text-amber-8">ROMMEL</div>
						<div class="text-amber-8">CUNETA</div>
					</div>
					<q-separator class="separator" dark></q-separator>
					<div ref="skills" class="text-h6 text-white text-right q-mt-sm">Web Designer | Frontend Developer</div>
					<!-- <div ref="skills" class="text-h6 text-white text-right">Photoshop | Illustrator | HTML5 | CSS3 | BOOTSTRAP | VUE</div> -->
				</div>
				<div class="me" id="scene">
					<img data-depth="0.1" width="500" ref="me" :src="me_img" alt="">
				</div>
			</div>
		</div>
	</q-page>
</template>

<script>
import Lorem from "../../components/Lorem";
import Parallax from 'parallax-js'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
	name: 'PageIndex',
	components: {
		Lorem
	},
	data () {
		return {
			bg_img: 'statics/bg.png',
			me_img: 'statics/me.png'
		}
	},
	mounted() {
		var scene = document.getElementById('scene')
		var parallaxInstance = new Parallax(scene)

		const { me } 		= this.$refs
		const { text } 		= this.$refs
		const { skills } 	= this.$refs
		const timeline 		= new TimelineLite()

		timeline.from(text, .5, {opacity: 0, x: -100})
				.from('.separator', .5, {opacity: 0, x: -80})
				.from(skills, .5, {opacity: 0, y: 50})
				.from(me, .5, {opacity: 0, x: 50})
	}
}
</script>

<style lang="scss">
.hero {
    height: calc(100vh - 60px);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;

    .container {
        position: relative;
        height: 100%;
    }

    &::before {
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(45deg, #273238, rgba(#273238,.8));
    }

    .intro-wrapper {
        font-weight: normal;
        position: absolute;
        top: 50%;
		transform: translateY(-50%);

        .text {
            color: rgba(#fff, 1);
            font-size: 10rem;
            line-height: 10rem;
			text-align: right;

            .text-amber-8 {
                // @include fluid-type($min-width, $max-width, 5rem, 10rem);
            }
		}
    }

    .me {
        position: absolute;
        right: 0;
        text-align: right;
        padding: 2rem;
        z-index: 5;

        img {
            max-width: 500px;
            height: auto;
        }
	}
	
	@media screen and(max-width: 500px) {
		.intro-wrapper {
			left: 50%;
			transform: translate(-50%, -50%);

			.text {
				font-size: 6rem;
				line-height: 6rem;

				.text-h1 {
					font-size: 4rem;
					margin-bottom: 0;
					padding-bottom: 0;
				}
			}

			.separator {
				margin-top: 1rem;
			}
			
			.text-h6 {
				font-size: 1rem !important;
				line-height: 1.5rem;
			}
		}

		.me {
			display: none;
		}
	}
}
</style>