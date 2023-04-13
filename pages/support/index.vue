<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 align="center" class="my-m4">Technician</h1>
            </v-card-title>
            <v-card-actions>
              <schedule-meeting></schedule-meeting>
            </v-card-actions>
            <tech-buttons>
              <template v-slot:actions
                ><Nuxtlink to="/"><v-btn>Home</v-btn></Nuxtlink>
              </template>
            </tech-buttons>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TechButtons from "~~/components/TechButtons.vue";
definePageMeta({
  layout: "technician",
});
export default {
  components: { TechButtons },
};
</script>

<style>
#w-100 {
  width: 100%;
}
</style>
