<script setup lang="ts">
import { IconEnum } from "@/types/enums";
import InputLayout from "./InputLayout.vue";
import { ref } from "vue";
import { v4 } from "uuid";

const model = defineModel<string>({ required: true });
const props = defineProps<{
  dataId: string;
  label?: string;
  helpText?: string;
  placeholder?: string;
  Icon?: IconEnum;
}>();

const inputId = v4();
const helpText = ref(props.helpText);

const onSpecialKeyboardEvent = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
  } else if (e.key === "Escape") {
  }
};
</script>
<template>
  <InputLayout :id="inputId" :label="props.label" :help-text="helpText">
    <template v-slot:input>
      <input
        :name="dataId"
        :id="inputId"
        :data-id="dataId"
        class="input"
        v-model="model"
        :placeholder="props.placeholder"
        :onkeydown="onSpecialKeyboardEvent"
      />
    </template>
  </InputLayout>
</template>

<style scoped lang="scss">
.input {
  background-color: transparent;
  color: var(--n-600);
  height: 100%;
  padding: 0 0.75rem;
  width: 100%;
  box-sizing: border-box;
  border: none;
  box-shadow: none;
}
</style>
