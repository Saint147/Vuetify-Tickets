<template>
  <div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <v-card>
            <v-card-title>
              <h1 align="center" class="my-m4">Log Ticket</h1>
              <form action="" id="w-100">
                <v-text-field
                  v-model="name.value.value"
                  :counter="10"
                  :error-messages="name.errorMessage.value"
                  label="Enter Your Company/Responsible person name"
                  type="text"
                >
                </v-text-field>
                <v-select
                  v-model="select.value.value"
                  :items="items"
                  :error-messages="select.errorMessage.value"
                  label="Select Product for support"
                >
                </v-select>

                <v-text-field
                  v-show="(select.value = software)"
                  v-model="phone.value.value"
                  :counter="7"
                  :error-messages="phone.errorMessage.value"
                  label="Enter Your Serial Number"
                  type="number"
                >
                </v-text-field>
                <v-select
                  v-model="selects.value.value"
                  :items="machines"
                  :error-messages="selects.errorMessage.value"
                  label="Select Machine"
                >
                </v-select>
                <v-select
                  v-model="selectee.value.value"
                  :items="status"
                  :error-messages="selectee.errorMessage.value"
                  label="Select Status"
                >
                </v-select>
                <v-textarea
                  v-model="textarea.value.value"
                  :error-messages="textarea.errorMessage.value"
                  varient="filled"
                  color="deep-purple"
                  auto-grow
                  label="Enter Your Description"
                  rows="4"
                >
                </v-textarea>
                <v-btn color="primary" type="submit">Save</v-btn>&nbsp;
                <v-btn @click="handleResert">Clear</v-btn>
              </form>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useField, useForm } from "vee-validate";

definePageMeta({
  layout: "custom",
});
export default {
  setup() {
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 2) return true;

          return "Name needs to be at least 2 characters.";
        },
        phone(value) {
          if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

          return "Phone number needs to be at least 9 digits.";
        },
        select(value) {
          if (value) return true;

          return "Select an item.";
        },
        selects(value) {
          if (value) return true;

          return "Select an item.";
        },
        selectee(value) {
          if (value) return true;

          return "Please status of priority .";
        },
        textarea(value) {
          if (value) return true;

          return "Please explain the problem ";
        },
      },
    });
    const name = useField("name");
    const phone = useField("phone");
    const select = useField("select");
    const selects = useField("selects");
    const textarea = useField("textarea");
    const selectee = useField("selectee");

    const items = ref(["Software", "Machine"]);

    const status = ref(["Active", "Urgent", "Re-Request"]);

    const machines = ref(["CNC", "Tru-Cut", "Beam Saw"]);

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return {
      name,
      phone,
      selects,
      textarea,
      selectee,
      select,
      items,
      status,
      machines,
      submit,
      handleReset,
    };
  },
};
</script>

<style>
#w-100 {
  width: 100%;
}
.text-center {
  text-align: center !important;
}
</style>
