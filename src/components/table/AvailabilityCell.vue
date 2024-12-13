<script setup lang="ts">
import { AvailabilityCellProps } from "@/types/cellTypes";
import StoreIcon from "@/components/icons/StoreIcon.vue";
import { computed } from "vue";
import { availability } from "@/utils/cellUtils";

const props = defineProps<AvailabilityCellProps>();
const state = computed(() => availability(props.value));
</script>

<template>
  <td class="cell availability">
    <StoreIcon :state="state" />
  </td>
</template>

<style scoped lang="scss">
.cell {
  @include cell();
}
</style>
