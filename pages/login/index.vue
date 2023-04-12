<template>
  <div lazy-load>
    <v-container>
      <v-row class="d-flex justify-center align-center">
        <v-col cols="14" sm="10" md="6" class="mx-auto">
          <v-card class="p-5">
            <v-card-title>
              <v-avatar size="100" color="indigo" align="center">
                <v-icon
                  class="d-flex justify-center align-center"
                  size="40"
                  color="teal-accent-3"
                >
                  mdi-account
                </v-icon>
              </v-avatar>
              <h1 align="center" class="my-m4" @submit.prevent="login">Login Page</h1>
              <form action="" id="w-100" :class="{ error: responseStatus, loading }">
                <div class="mb-3">
                  <error-summary
                    except="userName,password"
                    :responseStatus="responseStatus"
                  />
                </div>
                <v-text-field
                  v-model="email"
                  label="Enter Your Email"
                  type="email"
                  prepend-inner-icon="mdi-account"
                  :responseStatus="responseStatus"
                >
                </v-text-field>
                <v-text-field
                  v-model="password"
                  label="Enter Your Password"
                  type="password"
                  prepend-inner-icon="mdi-key"
                  apend-inner-icon="mdi-eye"
                  :responseStatus="responseStatus"
                >
                </v-text-field>
                <input
                  type="checkbox"
                  id="rememberMe"
                  v-model="rememberMe"
                  :responseStatus="responseStatus"
                />&nbsp; <label>Remember me</label><br />
                <v-btn color="primary" @click.enter="login" type="submit"> Login </v-btn>
                <div class="has-text-centered" style="margin-top: 20px">
                  <p>
                    Don't have an account? <nuxt-link to="/register">Register</nuxt-link>
                  </p>
                  <p>
                    Forgot Password? <nuxt-link to="/register">Resert Password</nuxt-link>
                  </p>
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
      rememberMe: true,
      loading: false,
      responseStatus: null,
    };
  },
  methods: {
    ...mapActions(["loginUser"]),
    login() {
      if (!this.email || !this.password) {
        alert("Please fill in fields");
      } else {
        const data = {
          email: this.email,
          password: this.password,
        };
        this.loginUser(data);
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
