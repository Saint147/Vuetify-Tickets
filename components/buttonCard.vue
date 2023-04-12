<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 align="center" class="my-m4">Buttons</h1>
            </v-card-title>
            <v-card-actions>
              <NuxtLink to="/tickets/view-tickets/">
                <v-btn color="blue">View Tickets</v-btn>
              </NuxtLink>
              <NuxtLink to="/tickets/">
                <v-btn color="blue">Log Ticket</v-btn>
              </NuxtLink>
              <NuxtLink to="/support" class="ml-4">
                <v-btn color="blue">Technician</v-btn>
              </NuxtLink>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
#w-100 {
  width: 100%;
}
</style>
