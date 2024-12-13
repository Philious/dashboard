<script setup lang="ts">
const props = defineProps<{
  label?: string;
  helpText?: string;
  id: string;
}>();
</script>

<template>
  <div class="container">
    <label class="label" :for="id">
      {{ props.label }}
    </label>
    <div class="input-wrapper">
      <slot name="input" />
    </div>
    <Transition name="help">
      <div v-if="props.helpText" class="help-text">{{ props.helpText }}</div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  z-index: 2;
  &:not(.disabled) .input-wrapper:hover {
    border-color: var(--n-500);
  }
  &.error {
    .help-text {
      color: var(--error);
    }
    .input-wrapper {
      border-color: var(--error);
    }
  }
}
.input-wrapper {
  background-color: var(--n-100);
  border-radius: 0.125rem;
  border: 0.0625rem solid var(--n-300);
  box-sizing: border-box;
  color: var(--n-500);
  height: 2.25rem;
  position: relative;
  transition: border-color 0.15s;
  width: 100%;
}

.label,
.help-text {
  &:empty {
    display: none;
  }
  color: var(--n-500);
  font-size: $small;
}

.help-enter-active,
.help-enter-active {
}

.help-enter-from,
.help-leave-to {
}
</style>
