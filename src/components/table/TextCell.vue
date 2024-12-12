<script setup lang="ts">
import { TextCellProps } from '@/types/cellTypes';

const props = defineProps<TextCellProps>();
// console.log('text: ', props.cellType, typeof props.value === 'string');
</script>

<template>
  <td class="cell text">{{ value }}</td>
</template>

<style scoped lang="scss">
  .cell { @include cell(flex-start) }
</style>