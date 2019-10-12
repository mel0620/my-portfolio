<template>
	<q-page>
		<splash></splash>
		<technologies></technologies>
	</q-page>
</template>

<script>
const Splash = () => import(/*webpackChunkname: "splash"*/ "./Splash/Splash.vue");
const Technologies = () => import(/*webpackChunkname: "tech"*/ "./Technologies/Technologies.vue");

export default {
	name: 'PageIndex',
	components: {
		Splash, Technologies
	},
	data () {
		return {

		}
	},
}
</script>