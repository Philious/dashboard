<script setup lang="ts">
import { TextCellProps } from "@/types/cellTypes";

defineProps<TextCellProps>();
</script>

<template>
  <td class="td text">{{ value }}</td>
</template>

<style scoped lang="scss">
.td {
  @include cell(flex-start);
}
</style>
