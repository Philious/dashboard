<script setup lang="ts">
import { CategoryCellProps } from "@/types/cellTypes";
import { CategoryColor } from "@/types/enums";

defineProps<CategoryCellProps>();

const colors: Record<string, CategoryColor> = {
  red: CategoryColor.Red,
  orange: CategoryColor.Orange,
  yellow: CategoryColor.Yellow,
  green: CategoryColor.Green,
  blue: CategoryColor.Blue,
};
</script>

<template>
  <td class="cell category">
    <div
      class="chip"
      v-for="(color, i) in value"
      :key="i"
      :style="{ color: colors[color] }"
    >
      <span class="chip-text">{{ color }}</span>
    </div>
  </td>
</template>

<style scoped lang="scss">
.cell {
  @include cell(flex-start);
  gap: 0.5rem;
}
.chip {
  display: flex;
  background-color: currentColor;
  line-height: 1;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}
.chip-text {
  font-size: $small;
  font-weight: 500;
  filter: grayscale(1) contrast(10) invert(1);
  opacity: 0.7;
}
</style>
