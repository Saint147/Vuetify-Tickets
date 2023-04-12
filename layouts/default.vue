<template>
  <v-app dark fixed>
    <v-app-bar class="fixed-header" fixed app>
      <HeaderComp />
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
import HeaderComp from "@/components/HeaderComp.vue";
import footerComp from "@/components/footerComp.vue";
export default {
  data: () => ({
    components: HeaderComp,
    footerComp,
  }),

  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },

  data: (vm) => ({
    initialDark: vm.$vuetify ? vm.$vuetify.theme.dark : false,
  }),

  beforeDestroy() {
    if (!this.$vuetify) return;

    this.$vuetify.theme.dark = this.initialDark;
  },
};
</script>
<style>
.text--white {
  color: white !important;
}
</style>
