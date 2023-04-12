<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 align="center" class="my-m4">Create Product</h1>
              <form action="" id="w-100">
                <v-text-field v-model="name" label="Enter Name Of Product" type="text">
                </v-text-field>
                <v-text-field v-model="title" label="Enter Your Title" type="text">
                </v-text-field>
                <v-text-field v-model="content" label="Enter Your Content" type="text">
                </v-text-field>
                <v-text-field v-model="price" label="Enter Your Price" type="number">
                </v-text-field>
                <v-btn color="primary" type="submit" @click="addProduct">Save</v-btn>
              </form>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "Vuex";
definePageMeta({
  layout: "technician",
});
export default {
  data() {
    return {
      name: "",
      title: "",
      content: "",
      price: "",
    };
  },
  methods: {
    addProduct() {
      if (!$this.name || $this.title || $this.content || $this.Price) {
        alert("please fill in fields");
      } else {
        products.push($this.name, $this.title, $this.content);
      }
    },
  },
};
</script>

<style>
#w-100 {
  width: 100%;
}
</style>
