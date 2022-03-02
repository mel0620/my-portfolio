<template>
	<q-page>
		<SplashV2/>
		<AboutMe/>
		<Technologies/>
		<Works/>
	</q-page>
</template>

<script>
import SplashV2 from "./Home/Splash/SplashV2.vue";
import AboutMe from "./Home/AboutMe/AboutMe.vue";
import Technologies from "./Home/Technologies/Technologies.vue";
import Works from "./Home/Works/Works.vue";

export default {
	name: 'PageIndex',
	components: {
		SplashV2, 
		AboutMe,
		Technologies,
		Works
	},
	data () {
		return {

		}
	},
}
</script>