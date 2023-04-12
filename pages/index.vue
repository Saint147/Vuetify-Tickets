<template>
  <div class="text-center banner">
    <div class="container p-5">
      <div class="p-5">
        <h1>Welcome to Ticketing System</h1>
        <p>
          Find your best online ticketing support online 24/7 accessibility, register for
          viewing, logging tickets, and tracking. Our online ticketing Sytem for hardware
          and software support @ your service.
        </p>
      </div>
    </div>
    <div class="container pb-5">
      <HomeCaresol />
      <slot name="actions">
        <NuxtLink to="/tickets/view-tickets/">
          <v-btn color="blue">View Tickets</v-btn>
        </NuxtLink>
        <NuxtLink to="/tickets/">
          <v-btn color="blue">Log Ticket</v-btn>
        </NuxtLink>
        <NuxtLink to="/support" class="ml-4">
          <v-btn color="blue">Technician</v-btn>
        </NuxtLink>
      </slot>
    </div>
    <div class="mt-5">
      <TableComp :tableColumns="ticketColumns" :tableData="tickets"></TableComp>
    </div>
    <div class="mt-5">
      <div v-if="userSession">
        <p class="pt-3">Hi {{ userSession.displayName }}!</p>
        <link-button @click="$store.dispatch('signout')" sm primary>
          Sign Out
        </link-button>
      </div>
      <div v-else>
        <p class="pt-3">You are not authenticated.</p>
        <v-btn href="/login" sm primary>Sign In</v-btn>
        <v-btn href="/register" sm outline-secondary class="ml-2">
          Register New User
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import HomeCaresol from "../components/HomeCaresol.vue";
import buttonCard from "../components/buttonCard.vue";
import NavBar from "../components/NavBar.vue";
import TableComp from "../components/TableComp.vue";
import { tickets } from "@/utils/tickets";

export default {
  components: {
    HomeCaresol,
    buttonCard,
    NavBar,
    TableComp,
  },
  data() {
    return {
      customerColumns: [
        { key: "name", label: "Name of person", class: "text-center" },
        { key: "email", label: "Email", class: "text-center" },
        { key: "address", label: "Address", class: "text-center" },
        { key: "tel", label: "Telephone", class: "text-center" },
      ],
      clientData: [
        {
          id: 1,
          name: "John",
          email: "john@example.com",
          tel: "0123456789",
          address: "jnkkajfkabvs",
        },
        {
          id: 2,
          name: "Jane",
          email: "jane@example.com",
          tel: "0123456789",
          address: "oiansoinaca",
        },
        {
          id: 3,
          name: "Steve",
          email: "steve@example.com",
          tel: "0123456789",
          address: "onaonvanlnasc",
        },
        {
          id: 4,
          name: "Mary",
          email: "mary@example.com",
          tel: "0123456789",
          address: "ascjacbkbkb",
        },
        {
          id: 5,
          name: "Someleze",
          email: "saint@example.com",
          tel: "0123456789",
          address: "onvonainoahee",
        },
      ],
      tickets,
    };
  },
};
</script>
