<template>
  <div>
    <schedule-meeting></schedule-meeting>
    <TableComp :tableColumns="meetingColumns" :tableData="meetings" />
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
    };
  },
};
</script>
