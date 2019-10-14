<template>
	<q-page>
		<splash-v2></splash-v2>
		<AboutMe></AboutMe>
		<technologies></technologies>
	</q-page>
</template>

<script>
const Splash = () => import(/*webpackChunkname: "splash"*/ "./Splash/Splash.vue");
import SplashV2 from "./Splash/SplashV2.vue";
import AboutMe from "./AboutMe/AboutMe.vue";
import Technologies from "./Technologies/Technologies.vue";

export default {
	name: 'PageIndex',
	components: {
		Splash, SplashV2, AboutMe ,Technologies
	},
	data () {
		return {

		}
	},
}
</script>