<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <NavBar />
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <footerComp />
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import footerComp from "@/components/footerComp.vue";

export default {
  components: NavBar,
  footerComp,
};
</script>
<style>
.text--white {
  color: white !important;
}
</style>
