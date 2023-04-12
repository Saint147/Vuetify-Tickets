<template>
  <div>
    <TableComp :tableColumns="productColumns" :tableData="products" :action="actions" />
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
const product = ref(products);
definePageMeta({
  layout: "technician",
});
export default {
  components: TableComp,
  data() {
    return {
      products,
    };
  },
};
</script>
