<template>
  <div>
    <TableComp :tableColumns="ticketColumns" :tableData="tickets" :actions="tableActions">
      <template v-slot:header>
        <h1>Manage Tickets</h1>
      </template>
    </TableComp>
  </div>
</template>

<script>
import TableComp from "@/components/TableComp.vue";
import { tickets } from "@/utils/tickets";

definePageMeta({
  layout: "technician",
});
export default {
  components: TableComp,
  data() {
    return {
      tickets,
      /** for emit workflow
      tableActions: [
        { id: 0, icon: "mdi-pencil", emitCall: "ticketEdit", emitTarget: "id" },
        { id: 1, icon: "mdi-message", emitCall: "ticketRespond", emitTarget: "id" },
      ],*/
      tableActions: [
        { id: 0, icon: "mdi-pencil", callback: this.editTicket },
        { id: 1, icon: "mdi-delete", callback: this.deleteTicket },
        { id: 1, icon: "mdi-eye", callback: this.viewTicket },
        { id: 1, icon: "mdi-message", callback: this.respondToTicket },
      ],
    };
  },

  methods: {
    editTicket(ticket) {
      // edit code
      console.log("Ticket: " + JSON.stringify(ticket) + " updated");
      // pass to modal dialog
      // this.dialogData = JSON.parse(JSON.stringify(ticket)); //<-- this creates a copy of an object
      // this.dialogData = ticket; //<-- this modifies live data object
    },

    deleteTicket(ticket) {
      // delete code
      console.log("Ticket: " + JSON.stringify(ticket) + " deleted");
    },

    respondToTicket(ticket) {
      // ticket response code
      console.log("Ticket: " + ticket.id + " response added");
    },
    viewTicket(ticket) {
      // ticket view code
      console.log("Ticket: " + ticket.id + "viewed");
    },
  },
};
</script>
