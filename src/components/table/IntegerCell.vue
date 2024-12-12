<script setup lang="ts">
import { IntegerCellProps } from '@/types/cellTypes';

const props = defineProps<IntegerCellProps>();
  // console.log('integer: ', props.cellType, typeof props.value === 'number');
</script>

<template>
  <td class="cell integer">{{ value }}</td>
</template>

<style scoped lang="scss">
  .cell { @include cell(flex-end) }
</style>