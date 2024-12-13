<script setup lang="ts">
import { DataStoreType, useDataStore } from '@/stores/tableStore'
import DataTable from '@/components/table/DataTable.vue';

const store = useDataStore() as DataStoreType;
const options = { columnTemplate: '1fr auto auto auto' };

store.updateData();
</script>

<template>
  <DataTable class="product-table" v-if="store" v-bind="{ store, options }"/>
</template>

<style scoped>

</style>
