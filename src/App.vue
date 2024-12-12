<script setup lang="ts">
import { useDataStore } from '@/stores/tableStore'
import DataTable from '@/components/table/DataTable.vue';

const store = useDataStore();
const tableOptions = { columnTemplate: '1fr auto auto auto' };
store.update();
/*
watch(() => store.items, (current) => {
  if (!current.length) store.update();
  else { tableData.value = current }
}, { immediate: true })

*/

</script>

<template>

  <DataTable class="product-table" v-if="store" :store="store" :options="tableOptions"/>

</template>

<style scoped>

</style>
