<template>
  <v-app>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ error.message }}
    </h1>
    <NuxtLink to="/">Home Page</NuxtLink>
  </v-app>
</template>

<script setup>
definePageMeta({
  layou: null,
});

export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
    };
  },
  head() {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.error.message;
    return {
      title,
    };
  },
};
</script>
<style scoped>
h1 {
  font-size: 20px;
}
</style>
