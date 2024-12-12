<script setup lang="ts">
import { CellEnum } from '@/types/enums';
import { cellAlign } from '@/utils/cellUtils';
import { ref } from 'vue';


const props = defineProps<{
  id: string;
  cellType: CellEnum;
  title: string;
}>();

const align = ref(cellAlign(props.cellType))
const sort = () => {}
</script>

<template>
  <th :class="['cell', 'header', cellType]" @click="sort">{{ title }}</th>
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
    opacity: .7;
    background-color: $header;
    z-index: 1;
  }
</style>