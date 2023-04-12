<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Schedule Meeting </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Schedule Meeting</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Company Name*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="['007', '445', '5899', '14758']"
                  label="Ticket No"
                  hint="Ticket id for the clint"
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select
                  :items="['Agent', 'High', 'Medium', 'Scheduled']"
                  label="Priority*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Meeting Details*"
                  required
                  auto-grow
                  rows="3"
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-select
                  :items="[
                    'woodtech.biz',
                    'woodmiller.ac.za',
                    'RobetsonCane.yahoo.co.za',
                    'pepliners@gmail.co.za',
                  ]"
                  label="Email*"
                  type="email"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field type="Date" label="Date" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field type="Time" label="Time" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small color="red">*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Schedule
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
