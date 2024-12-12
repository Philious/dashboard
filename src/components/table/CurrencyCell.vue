<script setup lang="ts">
import { CurrencyCellProps } from '@/types/cellTypes';

const props = defineProps<CurrencyCellProps>();
  // console.log('currency: ', props.cellType, typeof props.value === 'number');
</script>

<template>
  <td class="cell currency">{{ value }} EUR</td>
</template>

<style scoped lang="scss">
  .cell { @include cell(flex-end) }
</style>