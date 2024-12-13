<script setup lang="ts">
import { CellEnum } from "@/types/enums";
import { cellAlign } from "@/utils/cellUtils";
import { ref } from "vue";

const props = defineProps<{
  id: string;
  cellType: CellEnum;
  title: string;
  sort: () => void;
}>();

const align = ref(cellAlign(props.cellType));
const sortColumn = () => props.sort();
</script>

<template>
  <th :class="['cell', 'th', cellType]">
    {{ title }}
    <button class="header-btn" @click="sortColumn" />
  </th>
</template>

<style scoped lang="scss">
.cell {
  @include cell(inherit);
  justify-content: v-bind(align);
  font-weight: 600;
  font-size: $small;
  // text-transform: uppercase;
  position: sticky;
  top: 0;
  background-color: $header;
  z-index: 1;
}
.header-btn {
  opacity: 0;
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
}
</style>
