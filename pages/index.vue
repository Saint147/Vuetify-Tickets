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
  </div>
</template>

<script>
import HomeCaresol from "../components/HomeCaresol.vue";
import buttonCard from "../components/buttonCard.vue";

export default {
  components: {
    HomeCaresol,
    buttonCard,
  },
};
</script>
