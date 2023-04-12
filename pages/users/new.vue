<script setup>
import { reactive } from 'vue'

const form = reactive({
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  phone: '',
  role: 'user',
  status: 'active',
  password: ''
})

const createUser = async () => {
  await useFetch('/api/users/store', {
    method: 'POST',
    body: form
  })
  location.assign('/users')
}
</script>

<template>
  <form @submit.prevent="createUser">
    <h3>Edit User</h3>
    <div class="row mb-2">
      <div class="col-md-6">
        <label>First name</label>
        <input type="text" v-model="form.firstname" class="form-control" required>
      </div>
      <div class="col-md-6">
        <label>Last name</label>
        <input type="text" v-model="form.lastname" class="form-control" required>
      </div>
    </div>
    <div class="mb-2">
      <label>Username</label>
      <input type="text" v-model="form.username" class="form-control" required>
    </div>
    <div class="mb-2">
      <label>Email address</label>
      <input type="email" v-model="form.email" class="form-control" required>
    </div>
    <div class="mb-2">
      <label>Phone number</label>
      <input type="text" v-model="form.phone" class="form-control" required>
    </div>
    <div class="row mb-2">
      <div class="col-md-6">
        <label>Role</label>
        <select v-model="form.role" class="form-select">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="col-md-6">
        <label>Status</label>
        <select v-model="form.status" class="form-select">
          <option value="active">Active</option>
          <option value="banned">Banned</option>
        </select>
      </div>
    </div>
    <div class="mb-2">
      <label>Password</label>
      <input type="password" v-model="form.password" class="form-control" required>
    </div>
    <div>
      <button type="submit" class="btn btn-primary me-1">Save</button>
      <NuxtLink to="/users" class="btn btn-link me-1">Go Back</NuxtLink>
    </div>
  </form>
</template>