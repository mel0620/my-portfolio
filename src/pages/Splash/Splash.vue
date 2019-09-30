<template>
	<q-page>
		<div id="scene" class="hero" :style="`background-image: url('${bg_img}')`">
			<div class="container">
				<div class="intro-wrapper">
					<div ref="text" class="f-anton text">WEB<br>DESIGNER</div>
				</div>
				<div class="me" data-depth="0.2">
					<img width="500" ref="me" :src="me_img" alt="">
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

		const { me } = this.$refs
		const { text } = this.$refs
		const timeline = new TimelineLite()

		timeline.from(text, 1, { opacity: 0, x: -100 })
				.from(me, 1, {opacity: 0, x: 50})
	}
}
</script>

<style lang="scss">
@import "./style.scss";
</style>