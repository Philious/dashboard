<script setup lang="ts">
import InputLayout from "./InputLayout.vue";
import { ref } from "vue";
import ArrowIcon from "../icons/ArrowIcon.vue";
import { MenuOption } from "@/types/tableTypes";
import ContextMenu from "./ContextMenu.vue";
import { v4 } from "uuid";

const props = defineProps<{
  options: MenuOption[];
  dataId: string;
  label?: string;
  helpText?: string;
  placeholder?: string;
}>();

const emit = defineEmits<{ (e: "setSelect", value: string | null): void }>();

const inputId = v4();
const visibleOptions = ref(props.options);
const menuActive = ref(false);
const selectedLabel = ref();

const onSpecialKeyboardEvent = (ev: KeyboardEvent) => {
  if (ev.key === "Enter" || ev.key === "Escape") {
    menuActive.value = false;
  }
};

const toggleActive = (_: FocusEvent) => {
  menuActive.value = !menuActive.value;
};

const updateOptions = (ev: Event) => {
  const text = (ev.target as HTMLInputElement).value;
  visibleOptions.value = props.options.filter(
    (o) => o.label.toUpperCase().indexOf(text.toUpperCase()) > -1
  );
};

const setSelected = (ev: string) => {
  menuActive.value = false;
  const selectedOption = props.options.find((o) => o.id === ev);
  selectedLabel.value = selectedOption?.label;
  emit("setSelect", selectedOption!.value);
};
</script>
<template>
  <InputLayout :id="inputId" :label="props.label" :help-text="helpText">
    <template v-slot:input>
      <input
        :id="inputId"
        :data-id="dataId"
        @focus="toggleActive"
        @input="updateOptions"
        class="input select"
        v-model="selectedLabel"
        :placeholder="props.placeholder"
        :onkeydown="onSpecialKeyboardEvent"
      />
      <div class="arrow-icon">
        <ArrowIcon />
      </div>
      <Transition name="fade-in-up">
        <ContextMenu
          v-if="menuActive"
          :options="visibleOptions"
          @set-select="setSelected"
          @close="() => (menuActive = false)"
        />
      </Transition>
    </template>
  </InputLayout>
</template>

<style scoped lang="scss">
@include fadeInUp;
.input {
  background-color: transparent;
  color: var(--n-500);
  height: 100%;
  padding: 0 0.75rem;
  width: 100%;
  box-sizing: border-box;
  border: none;
  box-shadow: none;
}
.arrow-icon {
  display: grid;
  place-items: center;
  width: 2.25rem;
  height: 2.25rem;
  transform: rotate(90deg);
  right: 0;
  top: -0.0625rem;
  position: absolute;
}
</style>
