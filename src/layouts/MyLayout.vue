<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated reveal class="main-header bg-blue-grey-10">
      <q-toolbar style="min-height: 60px">
        <div class="container">
          <div class="row items-center full-width">
            <div class="row items-center" style="cursor: pointer" @click="$router.push('/')">
              <img width="80" src="statics/SVG/rc.svg" alt="" class="brand-desktop img-fluid">
              <!-- <img v-if="$q.platform.is.mobile" width="45" src="statics/SVG/rc.svg" alt="" class="brand-mobile img-fluid"> -->
              <!-- <q-toolbar-title class="ff">Rommel Cuneta</q-toolbar-title> -->
            </div>
            <q-space></q-space>
            <!-- <full-nav></full-nav> -->
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
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
      side="right"
      bordered
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable @click="$router.push('/')">
          <q-item-section avatar>
            <q-icon name="mdi-home-variant" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="javascript:">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Education</q-item-label>
            <!-- <q-item-label caption>quasar.dev</q-item-label> -->
          </q-item-section>
        </q-item>
        <q-item clickable @click="$router.push('/design-gallery')">
          <q-item-section avatar>
            <q-icon name="mdi-image-multiple" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Design Gallery</q-item-label>
            <q-item-label caption></q-item-label>
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
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import FullNav from "../components/FullNav";
export default {
  name: 'MyLayout',
  components: {
    FullNav
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style lang="scss">
.main-header {
  .brand-desktop {
    position: absolute;
    bottom: -35px;
    z-index: 5;
    border-radius: 100%;
    box-shadow: 0 0 8px rgba(#000, .3);
  }
}
</style>