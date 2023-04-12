<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 align="center" class="my-m4">Register Page</h1>
              <form action="" id="w-100" @submit.prevent="signup">
                <v-text-field
                  v-model="name"
                  label="Enter Your Name"
                  type="text"
                  prepend-inner-icon="mdi-account"
                >
                </v-text-field>
                <v-text-field
                  v-model="email"
                  label="Enter Your Email"
                  type="email"
                  prepend-inner-icon="mdi-mail"
                >
                </v-text-field>
                <v-text-field
                  v-model="password"
                  label="Enter Your Password"
                  type="password"
                  prepend-inner-icon="mdi-key"
                  apend-inner-icon="mdi-eye"
                >
                </v-text-field>
                <v-btn color="primary" type="submit">Register</v-btn>
                <div class="has-text-centered" style="margin-top: 20px">
                  <p>Already have an account? <nuxt-link to="/login">Login</nuxt-link></p>
                </div>
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
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    signup() {
      if (!this.name || !this.email || !this.password) {
        alert("Please fill in fields");
      } else {
        const data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.createUser(data);
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
