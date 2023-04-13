<template>
  <div>
    <TableComp
      :tableColumns="productColumns"
      :tableData="products"
      :actions="tableActions"
    >
      <template v-slot:header>
        <h1>Manage Products</h1>
      </template>
    </TableComp>
    <div>
      <NuxtLink to="/products/create-product"
        ><v-btn color="blue">Add Product</v-btn></NuxtLink
      >
    </div>
  </div>
</template>

<script>
import TableComp from "@/components/TableComp.vue";
import { products } from "@/utils/products";
definePageMeta({
  layout: "technician",
});
export default {
  components: TableComp,
  data() {
    return {
      products,
      dialog: false,
      dialogDelete: false,
      /** for emit workflow
      tableActions: [
        { id: 0, icon: "mdi-pencil", emitCall: "ticketEdit", emitTarget: "id" },
        { id: 1, icon: "mdi-message", emitCall: "ticketRespond", emitTarget: "id" },
      ],*/

      tableActions: [
        { id: 0, icon: "mdi-pencil", callback: this.editProduct },
        {
          id: 1,
          icon: "mdi-delete",
          callback: this.deleteProduct,
        },
        { id: 1, icon: "mdi-eye", callback: this.respondToProduct },
      ],
    };
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  methods: {
    editProduct(products) {
      // edit code
      console.log("Ticket: " + JSON.stringify(products) + " updated");
      // pass to modal dialog
      // this.dialogData = JSON.parse(JSON.stringify(ticket)); //<-- this creates a copy of an object
      // this.dialogData = ticket; //<-- this modifies live data object
    },

    deleteProduct(products) {
      // delete code
      // console.log("Ticket: " + JSON.stringify(products) + " deleted");
      this.products = this.products.splice(product);
      this.products = Object.assign({}, products);
      this.dialogDelete = true;
    },

    respondToProduct(products) {
      // ticket response code
      console.log("Ticket: " + products.id + " response added");
    },
    deleteItemConfirm() {
      this.products.splice(this.products);
      this.closeDelete();
    },
  },
};
</script>
