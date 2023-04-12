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
        <router-link to="/" tag:="span" style="cursor: pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <NuxtLink
         flat
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
        <v-btn flat>
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
      appTitle: 'Ticketing Application Technician',
      sidebar: false,
      menuItems: [
          { title: 'Home', path: '/', icon: 'mdi-home-variant' },
          { title: 'Schedule meeting', path: '/meeting/', icon: 'mdi-group' },
          { title: 'Manage Tickets', path: '/tickets/manage-ticket/', icon: 'mdi-ticket' },
          { title: 'Manage Clients', path: '/clients/', icon: 'mdi-handshake' },
          { title: 'Manage Products', path: '/products/', icon: 'mdi-chart-ppf' },
     ]
    }
  },
};
</script>

<style>
 
</style>