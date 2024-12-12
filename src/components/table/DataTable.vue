<script setup lang="ts">
import HeaderCell from '@/components/table/HeaderCell.vue';
import { DataStoreType, useDataStore } from '@/stores/tableStore';
import { Row, TableHeader, TableOptions } from '@/types/tableTypes';
import { getCell } from '@/utils/cellUtils';

import { onBeforeMount, ref } from 'vue';

const props = defineProps<{
  store: DataStoreType;
  options: TableOptions;
}>();

/*
const limit = ref(20)
onBeforeMount(() => {
  const parent = document.getElementById('app');
  let blockPadding = 0
  if (parent) {
    blockPadding += parseInt(window.getComputedStyle(parent).getPropertyValue('padding-top'))
    blockPadding += parseInt(window.getComputedStyle(parent).getPropertyValue('padding-bottom'))
  }

  limit.value = Math.floor(((parent?.clientHeight ?? 40 * 20) - blockPadding) / 40);
  console.log(limit.value);
})
*/
console.log(props.store)
const scrollContainer = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (!scrollContainer.value) return;

  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;
  if (scrollTop + clientHeight >= scrollHeight - 10) {
    props.store.update();
  }
};

</script>
<template>
  <div @scroll="handleScroll" ref="scrollContainer" class="scroll-container">
  <table v-if="store.items" :style="{'grid-template-columns': options.columnTemplate ?? store.headers.map(_ => 'auto').join(' ') }">
    <thead>
      <tr>
        <HeaderCell v-for="header in store.headers"
          :key="header.id"
          v-bind="header"
        />
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in store.items"
        :key="row.rowId"
        :id="row.rowId"
      >
      <component v-for="cell in row.cells" :key="row.rowId" :is="getCell(cell.cellType)" v-bind="cell" />
      </tr>
    </tbody>
    <tfoot v-if="false">
      <tr>
        <td></td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<style scoped lang="scss">
  .scroll-container {
    height: 80vh;
    overflow-y: scroll;
    border-radius: 0.25rem;
  }
  thead,
  tbody,
  tfoot,
  tr {
    display: contents;
  }

  table {
    display: grid;
    background-color: $background;
    border-radius: 0.25rem;
  }
  th, td {
    height: 2.5rem;
  }
  th, tr:not(:last-child) td { border-bottom: $border };
</style>