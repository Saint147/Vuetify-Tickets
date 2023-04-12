<template>
  <div>
    <v-container>
      <v-table theme="dark">
        <thead>
          <tr>
            <th v-for="col in tableColumns" :key="col.key" :class="col.class">
              {{ col.text }}
            </th>
            <!--
            <th class="text-left">ID</th>
            <th class="text-left">Company Name</th>
            <th class="text-left">Ticket No</th>
            <th class="text-left">Priority</th>
            <th class="text-left">Email</th>
            <th class="text-left">Date</th>
            <th class="text-left">Time</th>
            <th class="text-left">Action</th>
            -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in tableData" :key="data.id">
            <td v-for="col in tableColumns" :key="col.key">{{ data[col.key] }}</td>
          </tr>
          <!--
          <tr v-for="meet in meeting" :key="meet.id">
            <td>{{ meet.id }}</td>
            <td>{{ meet.CompanyName }}</td>
            <td>{{ meet.ticketNo }}</td>
            <td>{{ meet.status }}</td>
            <td>{{ meet.email }}</td>
            <td>{{ meet.date }}</td>
            <td>{{ meet.time }}</td>
            <td item.actions:="{ meet }">
              <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                mdi-pencil
              </v-icon>
              <v-icon size="small" @click="deleteItem(item.raw)"> mdi-delete </v-icon>
            </td>
          </tr>
          -->
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    tableColumns,
  },
  data() {
    return {
      tableColumns: [
        { key: "name", text: "Name", class: "text-center" },
        { key: "email", text: "Email", class: "text-center" },
        { key: "tel", text: "Telephone", class: "text-center" },
      ],
      tableData: [
        {
          id: 1,
          name: "John",
          email: "john@example.com",
          tel: "0123456789",
          address: "",
        },
        {
          id: 2,
          name: "Jane",
          email: "jane@example.com",
          tel: "0123456789",
          address: "",
        },
        {
          id: 3,
          name: "Steve",
          email: "steve@example.com",
          tel: "0123456789",
          address: "",
        },
        {
          id: 4,
          name: "Mary",
          email: "mary@example.com",
          tel: "0123456789",
          address: "",
        },
        {
          id: 5,
          name: "Someleze",
          email: "saint@example.com",
          tel: "0123456789",
          address: "",
        },
      ],
    };
  },
};

/**
for (data in tableData) {
  data.name
}

for (let index = 0; index < tableData.length; index++) {
  const data = tableData[index];

}*/
</script>
