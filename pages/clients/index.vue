<template>
  <div>
    <TableComp :tableColumns="clientColumns" :tableData="clients" :action="tableAction">
      <template v-slot:header>
        <h1>Manage Clients</h1>
      </template>
    </TableComp>
  </div>
</template>

<script>
import TableComp from "@/components/TableComp.vue";
import { clients } from "@/utils/clients.ts";

definePageMeta({
  layout: "technician",
});
export default {
  components: TableComp,
  data() {
    return {
      clients,
      /** for emit workflow
      tableActions: [
        { id: 0, icon: "mdi-pencil", emitCall: "ticketEdit", emitTarget: "id" },
        { id: 1, icon: "mdi-message", emitCall: "ticketRespond", emitTarget: "id" },
      ],*/
      tableActions: [
        { id: 0, icon: "mdi-pencil", callback: this.editClient },
        { id: 1, icon: "mdi-delete", callback: this.deleteClient },
        { id: 1, icon: "mdi-eye", callback: this.viewClient },
        { id: 1, icon: "mdi-message", callback: this.respondToClient },
      ],
    };
  },

  methods: {
    editClient(Clients) {
      // edit code
      console.log("clients: " + JSON.stringify(clients) + " updated");
      // pass to modal dialog
      // this.dialogData = JSON.parse(JSON.stringify(ticket)); //<-- this creates a copy of an object
      // this.dialogData = ticket; //<-- this modifies live data object
    },

    deleteClient(Clients) {
      // delete code
      console.log("clients: " + JSON.stringify(clients) + " deleted");
    },

    respondToClient(client) {
      // ticket response code
      console.log("clients: " + client.id + " response added");
    },
    viewClient(client) {
      // ticket view code
      console.log("clients: " + client.id + "viewed");
    },
  },
};
</script>
