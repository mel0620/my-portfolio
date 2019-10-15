<template>
	<q-page>
		<SplashV2/>
		<AboutMe/>
		<Technologies/>
	</q-page>
</template>

<script>
import SplashV2 from "./Home/Splash/SplashV2.vue";
import AboutMe from "./Home/AboutMe/AboutMe.vue";
import Technologies from "./Home/Technologies/Technologies.vue";

export default {
	name: 'PageIndex',
	components: {
		SplashV2, 
		AboutMe,
		Technologies
	},
	data () {
		return {

		}
	},
}
</script>