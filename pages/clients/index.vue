<template>
  <div>
    <TableComp :tableColumns="clientColumns" :tableData="clients" />
  </div>
</template>

<script>
import TableComp from "@/components/TableComp.vue";
import { clients } from "@/utils/clients.ts";

const client = ref(clients);
definePageMeta({
  layout: "technician",
});
export default {
  components: TableComp,
  data() {
    return {
      client,
    };
  },
};
</script>
