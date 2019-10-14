<template>
	<q-page>
		<splash-v2></splash-v2>
		<technologies></technologies>
	</q-page>
</template>

<script>
const Splash = () => import(/*webpackChunkname: "splash"*/ "./Splash/Splash.vue");
const SplashV2 = () => import(/*webpackChunkname: "splash"*/ "./Splash/SplashV2.vue");
const Technologies = () => import(/*webpackChunkname: "tech"*/ "./Technologies/Technologies.vue");

export default {
	name: 'PageIndex',
	components: {
		Splash, SplashV2, Technologies
	},
	data () {
		return {

		}
	},
}
</script>