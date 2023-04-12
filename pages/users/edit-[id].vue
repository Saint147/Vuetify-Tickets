<script setup>
import { reactive } from 'vue'

const route = useRoute()

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

const setEntry = async () => {
  const response = await fetch('/api/users/show?id='+route.params.id)
  const data = await response.json()
  if('entry' in data) {
    form.firstname = data.entry.firstname
    form.lastname = data.entry.lastname
    form.username = data.entry.username
    form.email = data.entry.email
    form.phone = data.entry.phone
    form.role = data.entry.role
    form.status = data.entry.status
  }
}

onMounted(setEntry)

const updateUser = async () => {
  await useFetch('/api/users/update?id='+route.params.id, {
    method: 'POST',
    body: form
  })
  location.assign('/users')
}
</script>

<template>
  <form @submit.prevent="updateUser">
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
      <button type="submit" class="btn btn-warning me-1">Update</button>
      <NuxtLink to="/users" class="btn btn-link me-1">Go Back</NuxtLink>
    </div>
  </form>
</template>