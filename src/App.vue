<template>
  <div id="q-app">
		<div v-if="!loading">
			<router-view />
		</div>
		<div v-else class="my-loader">
			<q-spinner-puff size="4em"></q-spinner-puff>
		</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    loading: true
  }),
  created() {
    window.addEventListener("load", () => {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    });
    // setTimeout(() => {
    //   window.addEventListener("load", () => {
    //       this.loading = false;
    //   });
    // }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.my-loader {
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>