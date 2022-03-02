<template>
  <q-layout view="lHh Lpr lFf">
	<!-- <q-header reveal class="main-header text-black">
	  <q-toolbar style="min-height: 60px">
		<div class="container">
		  <div class="row items-center full-width">
			<div class="row items-center" style="cursor: pointer" @click="$router.push('/')">
			  <img width="30" src="statics/rc.svg" alt class="brand-mobile img-fluid" />
			</div>
			<q-space></q-space>
			<q-btn
			  flat
			  dense
			  round
			  @click="leftDrawerOpen = !leftDrawerOpen"
			  icon="mdi-text"
			  class="flip"
			  aria-label="Menu"
			/>
		  </div>
		</div>
	  </q-toolbar>
	</!-->

	<!-- <q-drawer v-model="leftDrawerOpen" content-class="bg-grey-2" side="right">
	  <q-list class="sourcesans">
		<q-item-label header>Navigation</q-item-label>
		<q-item clickable @click="$router.push('/')">
		  <q-item-section avatar>
			<q-icon name="mdi-home-variant" />
		  </q-item-section>
		  <q-item-section>
			<q-item-label>Home</q-item-label>
		  </q-item-section>
		</q-item>
		<q-item clickable tag="a" href="javascript:">
		  <q-item-section avatar>
			<q-icon name="school" />
		  </q-item-section>
		  <q-item-section>
			<q-item-label>Education</q-item-label>
		  </q-item-section>
		</q-item>
		<q-separator></q-separator>
		<q-item-label header>Social Links</q-item-label>
		<q-item clickable tag="a" target="_blank" href="https://www.facebook.com/rommel.cuneta">
		  <q-item-section avatar>
			<q-icon name="mdi-facebook" />
		  </q-item-section>
		  <q-item-section>
			<q-item-label>Facebook</q-item-label>
			<q-item-label caption>@RommelCuneta</q-item-label>
		  </q-item-section>
		</q-item>
		<q-item clickable tag="a" target="_blank" href="https://twitter.com/mel_cuneta">
		  <q-item-section avatar>
			<q-icon name="mdi-twitter" />
		  </q-item-section>
		  <q-item-section>
			<q-item-label>Twitter</q-item-label>
			<q-item-label caption>@mel_cuneta</q-item-label>
		  </q-item-section>
		</q-item>
	  </q-list>
	</q-drawer> -->

	<header class="my-header my-header--sticky">
		<div class="container">
			<nav class="my-nav">
				<div class="brand" @click="$router.push('/')">
					<img width="30" src="statics/rc.svg" alt class="brand-mobile img-fluid" />
				</div>
				<q-space></q-space>
				<!-- <q-btn
					flat
					dense
					round
					icon="mdi-text"
					class="flip nav-cta"
					aria-label="Menu"
					@click="navAction"
				/> -->
				<button class="nav-cta nav-cta--open">
					<q-icon name="mdi-text" class="flip"></q-icon>
				</button>
			</nav>
		</div>
	</header>

	<div class="my-drawer">
		<div class="container">
			<div class="close-wrapper">
				<button class="nav-cta nav-cta--close">
					<q-icon name="mdi-close" class="flip"></q-icon>
				</button>
			</div>
			<div class="links-wrapper">
				<div class="links" id="navlink">
					<a class="links__item" title="Home" href="#home" >Home</a>
					<a class="links__item" title="About" href="#aboutme">About Me</a>
					<a class="links__item" title="Skills" href="#skills">My Skills</a>
					<a class="links__item" title="Education" href="#works">Works</a>
				</div>
			</div>
		</div>
	</div>

	<q-page-container>
		<router-view />
	</q-page-container>
  </q-layout>
</template>

<script>
import ScrollOut from "scroll-out"
import FullNav from "../components/FullNav"
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
// import VanillaScrollspy from 'vanillajs-scrollspy'

export default {
	name: "MyLayout",
	components: {
		FullNav
	},
	data() {
		return {
			leftDrawerOpen: false
		};
	},
	methods: {
		navAction() {
			const navButtonOpen = document.querySelector(".nav-cta--open");
			const navButtonClose = document.querySelector(".nav-cta--close");

			const tl = new TimelineLite({paused: true, reversed: true});

			tl.to('.my-header', .3, {
				opacity: 0,
			}).to('.my-drawer', .3, {
				width: '100%',
				zIndex: 101,
			}).from('.nav-cta--close', .3, {
				opacity: 0
			}).staggerFrom('.links__item', .3, {
				opacity: 0,
				y: -5
			}, .1)

			navButtonOpen.addEventListener("click", () => {
				tl.play();
				// this.toggleTween(tl)
			})

			navButtonClose.addEventListener("click", () => {
				tl.reverse();
				// this.toggleTween(tl)
			})
		},
		toggleTween(tween) {
			tween.reversed() ? tween.play() : tween.reverse();
		},
	},
	mounted() {
		// const navbar = document.querySelector('#navlink');
		// const scrollspy = new VanillaScrollspy(navbar, 1000, 'easeInOutQuint');
		// scrollspy.init();

		ScrollOut({
			targets: ".my-header--sticky",
			offset: 960
		});

		this.navAction();
		// document.getElementById('cta').addEventListener('click', function() {
		// 	TweenMax.to('.panel', 1.5, {scaleY: 1, height:'100vh', ease: Circ.easeOut });
		// 	TweenMax.to('#light', 1, {opacity: 1, y: 0, delay: 1, ease: Back.easeOut.config(1.7)});
		// 	TweenMax.to('p', 1, {opacity: 1, y: 20, delay: 1.4});
		// 	TweenMax.to('.box', 3, {opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3)});
		// })
	}
};
</script>

<style lang="scss">
.my-header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 98;
	transition: .3s all ease-in-out;

	.my-nav {
		transition: .3s all ease-in-out;
		display: flex;
		align-items: center;
		padding: 1.2rem 0;
		position: relative;
	}
}

.my-header--sticky[data-scroll="in"] {
	position: fixed;
	// z-index: 101;
	background-color: $grey-2;

	.my-nav {
		display: flex;
		padding: 8px 0;
	}
}

.nav-cta {
	cursor: pointer;
	outline: none;
	border: 0;
	background-color: transparent;
	border-radius: 100%;
	font-size: 24px;
	display: flex;
}

.nav-cta--close {
	@extend .nav-cta;
	position: fixed;
	right: 0;
	color: #fff;
	opacity: 1;
	margin: 1rem;
}

.my-drawer {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 0;
	left: 0;
	background-color: rgba(#000, .8);
	z-index: 0;

	.links-wrapper {
		text-align: center;
		position: fixed;
		left: 0;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		
		.links {
			display: grid;
			grid-gap: 1rem;
			width: max-content;
			margin: auto;

			&__item {
				font-family: $ff4;
				text-decoration: none;
				color: rgba(#fff, .8);
				font-size: 1.5rem;
				transition: .3s all ease-in-out;

				&:hover, &.active {
					color: orange;
				}
			}
		}
	}
}

.main-header {
	// border-bottom: 1px solid #eaeaea;
	// box-shadow: 0 2px 16px rgba(#000, .12);
	transition: 0.3s all ease-in-out;
	background-color: $grey-2;
	&:hover {
		filter: invert(1);
	}
	.brand-desktop {
		position: absolute;
		bottom: -35px;
		z-index: 5;
		border-radius: 100%;
		box-shadow: 0 0 8px rgba(#000, 0.3);
	}
}
</style>