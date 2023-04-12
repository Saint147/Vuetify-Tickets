<script setup>
import { ref, onMounted } from 'vue'

const entries = ref([])

const setEntries = async () => {
  const response = await fetch('/api/users')
  const data = await response.json()
  if('entries' in data) {
    entries.value = data.entries
  }
}

onMounted(setEntries)

const destroyUser = async (id) => {
  await useFetch('/api/users/destroy?id='+id)
  await setEntries()
}
</script>

<template>
  <div>
    <h3>All Users</h3>
    <div class="row">
      <div class="col-sm-8">
        <NuxtLink to="/users/new" class="btn btn-primary">Add New User</NuxtLink>
      </div>
      <div class="col-sm-4"></div>
    </div>
    
    <table class="table table-bordered table-striped mt-3">
      <thead>
        <tr>
          <th>ID</th>
          <th>Fisrt Name</th>
          <th>Last Name</th>
          <th>Email address</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Status</th>
          <th style="width: 130px;">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in entries" :key="entry.id">
          <td>{{ entry.id }}</td>
          <td>{{ entry.firstname }}</td>
          <td>{{ entry.lastname }}</td>
          <td>{{ entry.email }}</td>
          <td>{{ entry.phone }}</td>
          <td>{{ entry.role }}</td>
          <td>{{ entry.status }}</td>
          <td>
            <NuxtLink :to="`/users/edit-${entry.id}`" class="btn btn-warning btn-sm me-1">Edit</NuxtLink>
            <button type="button" class="btn btn-danger btn-sm" @click="destroyUser(entry.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>