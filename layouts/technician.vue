<template>
  <v-app dark fixed>
    <v-app-bar class="fixed-header" fixed app>
      <techNav />
    </v-app-bar>
    <v-main>
      <v-container>
        <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
          <slot />
        </v-parallax>
      </v-container>
    </v-main>
    <footerComp />
  </v-app>
</template>

<script>
import techNav from "@/components/techNav.vue";
import footerComp from "@/components/footerComp.vue";
export default {
  data: () => ({
    components: techNav,
    footerComp,
  }),
};
</script>
<style>
.text--white {
  color: white !important;
}
</style>
