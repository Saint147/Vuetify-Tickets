<template>
  <div>
    <TableComp
      :tableColumns="meetingColumns"
      :tableData="meetings"
      :actions="tableActions"
    >
      <template v-slot:header>
        <h1>Manage Meeting Details</h1>
      </template>
    </TableComp>
    <schedule-meeting></schedule-meeting>
  </div>
</template>

<script>
import TableComp from "@/components/TableComp.vue";
import { meetings } from "@/utils/meetings";
const meeting = ref(meetings);
definePageMeta({
  layout: "technician",
});
export default {
  components: TableComp,
  data() {
    return {
      meeting,
      /** for emit workflow
      tableActions: [
        { id: 0, icon: "mdi-pencil", emitCall: "ticketEdit", emitTarget: "id" },
        { id: 1, icon: "mdi-message", emitCall: "ticketRespond", emitTarget: "id" },
      ],*/
      tableActions: [
        { id: 0, icon: "mdi-pencil", callback: this.editMeeting },
        { id: 1, icon: "mdi-delete", callback: this.deleteMeeting, class: "color-red" },
        { id: 1, icon: "mdi-eye", callback: this.viewMeeting },
        { id: 1, icon: "mdi-message", callback: this.respondToMeeting },
      ],
    };
  },

  methods: {
    editMeeting(meeting) {
      // edit code
      console.log("clients: " + JSON.stringify(meeting) + " updated");
      // pass to modal dialog
      // this.dialogData = JSON.parse(JSON.stringify(ticket)); //<-- this creates a copy of an object
      // this.dialogData = ticket; //<-- this modifies live data object
    },

    deleteMeeting(meeting) {
      // delete code
      console.log("clients: " + JSON.stringify(meeting) + " deleted");
    },

    respondToMeeting(meeting) {
      // ticket response code
      console.log("clients: " + meeting.id + " response added");
    },
    viewMeeting(meeting) {
      // ticket view code
      console.log("client: " + JSON.stringify(meeting) + "viewed");
    },
  },
};
</script>
