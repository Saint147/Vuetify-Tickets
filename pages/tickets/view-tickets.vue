<template>
  <div>
    <TableComp :tableColumns="ticketColumns" :tableData="tickets" :actions="tableActions">
      <!-- for emit workflow
        @ticketEdit="editTicket"
        @ticketRespond="respondToTicket" 
        -->
      <template v-slot:header>
        <h1>Company:{{ tickets.id }} Tickets</h1>
      </template>
      <!--<template v-slot:tableAction>
        <v-icon size="small" class="me-2" @click="editItem(item.raw)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item.raw)"> mdi-message </v-icon>
      </template>
      -->
    </TableComp>
  </div>
</template>

<script>
import TableComp from "@/components/TableComp.vue";
import { tickets } from "@/utils/tickets";

definePageMeta({
  layout: "custom",
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
    },

    respondToTicket(ticket) {
      // ticket response code
      console.log("Ticket: " + ticket.id + " response added");
    },
  },
};
</script>
