<template>
  <div>
    <TableComp :tableColumns="ticketColumns" :tableData="tickets" />
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
    };
  },
};
</script>
