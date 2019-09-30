<template>
	<q-page>
		<splash></splash>
	</q-page>
</template>

<script>
const Splash = () => import(/*webpackChunkname: "splash"*/ "./Splash/Splash.vue");

export default {
	name: 'PageIndex',
	components: {
		Splash
	},
	data () {
		return {

		}
	},
}
</script>