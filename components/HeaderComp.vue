<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title>
        <NuxtLink to="/" tag:="span" style="cursor: pointer">{{ appTitle }}</NuxtLink>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <NuxtLink>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        </NuxtLink>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>
<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  data(){
    return {
      appTitle: 'My Ticketing Application',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home-variant' },
          { title: 'Sign Up', path: '/register', icon: 'mdi-account-key' },
          { title: 'Sign In', path: '/login', icon: 'mdi-key' }
     ]
    }
  },
};

</script>

<style scoped>

</style>