<template>
  <div>
    <v-container>
      <v-table theme="dark" :footer="footerProps" :items-per-page="2" class="elevation-1">
        <thead>
          <tr>
            <th v-for="col in tableColumns" :key="col.key" :class="col.class">
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in tableData" :key="data.id">
            <td v-for="col in tableColumns" :key="col.key" :class="col.class">
              {{ data[col.key] }}
            </td>
            <td
              v-for="action in actions"
              :key="action.id"
              item.actions:="{ }"
              class="col.clas"
            >
              <v-icon size="small" class="me-2">
                {{ action.icon }}
              </v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    tableColumns: {
      type: Array,
      required: true,
    },
    tableData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      footerProps: {
        "items-per-page-options": [3, 5, 10],
      },
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
