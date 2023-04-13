<template>
  <div>
    <v-container>
      <div>
        <slot name="header">
          <h1>Header</h1>
        </slot>
      </div>
      <v-table theme="dark" :footer="footerProps" :items-per-page="2" class="elevation-1">
        <thead>
          <tr>
            <!-- For Table headers-->
            <th v-for="col in tableColumns" :key="col.key" :class="[col.class]">
              {{ col.label }}
            </th>
            <!-- action Header on a table if only action being provided-->
            <th v-if="actions" class="col-actions col-action-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- For Table data-->
          <tr v-for="data in tableData" :key="data.id">
            <td v-for="col in tableColumns" :key="col.key" :class="col.class">
              {{ data[col.key] }}
            </td>
            <!--
            <slot name="tableAction">
              <td item.actions:="{ item }" align="left">
                <v-icon size="small" class="me-2" @click="editItem(item.raw)">
                  mdi-pencil
                </v-icon>
                <v-icon size="small" class="me-2" @click="deleteItem(item.raw)">
                  mdi-delete
                </v-icon>
                <v-icon size="small" @click="deleteItem(item.raw)"> mdi-message </v-icon>
              </td>
            </slot>-->
            <!-- action render if provided-->
            <td v-if="actions" class="col-actions">
              <v-icon
                v-for="action in actions"
                :key="action.id"
                size="small"
                class="me-2"
                @click="action.callback(data)"
              >
                <!-- for emit workflow
                  @click="$emit(action.emitCall, data[action.emitTarget])" 
                  -->
                {{ action.icon }}
              </v-icon>
            </td>
          </tr>
        </tbody>
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ props }">
                <v-btn color="primary" dark class="mb-2" v-bind="props"> New Item </v-btn>
              </template>
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
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
    actions: {
      type: Array,
      required: false,
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
