<script setup lang="ts">
import { MenuOption } from "@/types/tableTypes";

defineProps<{
  options: MenuOption[];
}>();
defineEmits<{ (e: "setSelect", value: string): void; (e: "close"): void }>();
</script>

<template>
  <div>
    <ul class="menu" data-id="menu-id">
      <li
        v-for="(o, i) in options"
        :key="o.label"
        class="menu-item"
        :data-id="`menu-item-${i}`"
        @click="$emit('setSelect', o.id)"
      >
        {{ o.label }}
      </li>
    </ul>
    <button class="mask" @click="$emit('close')" />
  </div>
</template>

<style scoped lang="scss">
.mask {
  position: fixed;
  inset: 0;
  opacity: 0;
}
.menu {
  background-color: var(--n-100);
  position: absolute;
  transform: translateY(0.125rem);
  width: fit-content;
  min-width: 100%;
  height: fit-content;
  padding: 0;
  margin: 0;
  list-style: none;
  border-radius: 0 0 0.25rem 0.25rem;
  z-index: 1;
  $shadow-color: hsla(0, 0%, 0%, 0.25);
  box-shadow: 0 0 0 1px var(--n-200), 0 3px 6px $shadow-color,
    0 6px 12px $shadow-color, 0 12px 24px $shadow-color;
}
.menu-item {
  box-sizing: border-box;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 0.875rem;
  height: 2.25rem;
  transition: background-color 0.15s;
  &:hover {
    background-color: var(--n-200);
  }
}
</style>
