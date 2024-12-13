<script setup lang="ts">
import { CategoryColor, StorageIconState } from "@/types/enums";
import { computed } from "vue";

const props = defineProps<{
  state: StorageIconState;
}>();
const color = computed(() =>
  props.state === StorageIconState.Full
    ? CategoryColor.Green
    : props.state === StorageIconState.Ok
    ? CategoryColor.Blue
    : props.state === StorageIconState.Low
    ? CategoryColor.Orange
    : CategoryColor.Red
);
</script>

<template>
  <svg view-box="0 0 24 24">
    <rect
      v-for="(_, i) in new Array(props.state).fill(null)"
      x="2"
      :y="22 - 4 * (i + 1)"
      width="20"
      height="2"
      rx="2"
    />
    <rect x="2" y="22" width="20" height="1" rx="2" />
  </svg>
</template>

<style scoped lang="scss">
svg {
  fill: v-bind(color);
  width: 1.5rem;
  height: 1.5rem;
}
</style>
