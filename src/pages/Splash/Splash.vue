<template>
	<q-page>
		<div class="hero" :style="`background-image: url('${bg_img}')`">
			<div class="container">
				<div class="intro-wrapper">
					<div ref="text" class="f-anton text"><span class="text-h1">I'm a</span>&nbsp;<span class="text-amber-8">WEB<br>DESIGNER</span></div>
					<q-separator class="separator" dark></q-separator>
					<div ref="skills" class="text-h6 text-white text-right">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
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
				.from('.separator', .5, {opacity: 0, x: -100})
				.from(skills, .5, {opacity: 0, x: -100})
				.from(me, .5, {opacity: 0, x: 50})
	}
}
</script>

<style lang="scss">
@import "./style.scss";
</style>