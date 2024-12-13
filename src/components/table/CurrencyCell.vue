<script setup lang="ts">
import { CurrencyCellProps } from "@/types/cellTypes";

defineProps<CurrencyCellProps>();
</script>

<template>
  <td class="td currency">{{ value }} EUR</td>
</template>

<style scoped lang="scss">
.td {
  @include cell(flex-end);
}
</style>
