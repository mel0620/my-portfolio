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
		  <q-btn
			flat
			dense
			round
			@click="leftDrawerOpen = !leftDrawerOpen"
			icon="mdi-text"
			class="flip"
			aria-label="Menu"
		  />
		</nav>
	  </div>
	</header>

	<q-page-container>
	  <router-view />
	</q-page-container>
  </q-layout>
</template>

<script>
import ScrollOut from "scroll-out";
import FullNav from "../components/FullNav";

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
  mounted() {
	ScrollOut({
	  targets: ".my-header--sticky",
	  offset: 960
	});
  }
};
</script>

<style lang="scss">
.my-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: .3s all ease-in-out;

  .my-nav {
	transition: .3s all ease-in-out;
	display: flex;
	padding: 1.5rem 0;
  }
}

.my-header--sticky[data-scroll="in"] {
	position: fixed;
	z-index: 99;
	background-color: $grey-2;

	.my-nav {
		display: flex;
		padding: 0.625rem 0;
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