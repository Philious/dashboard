<script setup lang="ts">
import HeaderCell from "@/components/table/HeaderCell.vue";
import { DataStoreType } from "@/stores/tableStore";
import { TableOptions } from "@/types/tableTypes";
import { getCell } from "@/utils/cellUtils";
import spinner from "@/assets/spinner.svg";
import { Ref, ref } from "vue";
import Textfield from "@/components/input/TextField.vue";
import SelectField from "../input/SelectField.vue";
import { CategoryColorNames } from "@/types/enums";
import { getCssVar, remToPx } from "@/utils/utils";
import { handleScroll } from "@/utils/tableUtils";

const props = defineProps<{
  store: DataStoreType;
  options: TableOptions;
}>();

const scrollContainer: Ref<HTMLElement | null> = ref(null);
const gridColumns = ref("auto");

const getColumns = () => {
  gridColumns.value =
    remToPx(getCssVar("--mobile-max-width") ?? "0") < window.innerWidth
      ? props.options.columnTemplate ??
        props.store.headers.map((_) => "auto").join(" ")
      : "1fr";
};
window.onresize = getColumns;
getColumns();

const localCategoryFilter = ref(props.store?.categoryFilter ?? "");
const categorySelectItems = [
  { id: "o0", label: "Clear", value: null },
  { id: "o1", label: "Red", value: CategoryColorNames.Red },
  { id: "o2", label: "Orange", value: CategoryColorNames.Orange },
  { id: "o3", label: "Yellow", value: CategoryColorNames.Yellow },
  { id: "o4", label: "Green", value: CategoryColorNames.Green },
  { id: "o5", label: "Blue", value: CategoryColorNames.Blue },
];

const onScroll = () => handleScroll(scrollContainer, props.store.updateData);
</script>
<template>
  <div>
    <div class="filter-row">
      <Textfield
        v-model="store.searchString"
        placeholder="Search"
        data-id="input-text-table-search"
      />
      <div class="filter-group">
        <SelectField
          placeholder="Category"
          v-model="localCategoryFilter"
          :options="categorySelectItems"
          data-id="input-select-table-filter"
          @set-select="(e) => store.categoryFilter = e as CategoryColorNames"
        />
      </div>
    </div>
    <div @scroll="onScroll" ref="scrollContainer" class="scroll-container">
      <table
        :class="['table', !store.items.length ? 'no-items' : '']"
        v-if="store.items"
      >
        <thead class="thead">
          <tr class="thead-row tr">
            <HeaderCell
              v-for="header in store.headers"
              :key="header.id"
              v-bind="header"
              :sort="header.id === 'price' ? store.sortPrice : () => {}"
            />
          </tr>
        </thead>
        <tbody class="tbody">
          <tr
            class="tbody-row tr"
            v-for="row in store.items"
            :key="row.rowId"
            :id="row.rowId"
          >
            <template v-for="(cell, index) in row.cells" :key="row.rowId">
              <Transition name="cell" appear>
                <component
                  :data-header="store.headers[index].title"
                  :is="getCell(cell.cellType)"
                  v-bind="cell"
                />
              </Transition>
            </template>
          </tr>
        </tbody>
        <tfoot class="tfoot">
          <tr class="tfoot-row tr">
            <Transition name="cell">
              <td v-if="store.isLoading" class="tfoot-cell">
                <img class="loading-spinner" :src="spinner" />
              </td>
            </Transition>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter-row {
  display: flex;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
}
.scroll-container {
  height: 80vh;
  overflow-y: scroll;
  border-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06),
    0 4px 16px rgba(0, 0, 0, 0.03);
}

.table {
  display: grid;
  grid-template-columns: v-bind(gridColumns);
  background-color: $background;
  border-radius: 0.25rem;
  min-height: 100%;

  place-content: start;
  &.no-items {
    place-content: center;
  }
}

thead,
tbody,
tfoot,
tr {
  display: contents;
}

th,
td {
  height: 2.5rem;
}
th,
tr:not(:last-child) td {
  border-bottom: $border;
}

.tfoot-cell {
  display: grid;
  place-content: center;
  place-self: center;
  height: 6rem;
  grid-column: 1 / 5;
  position: sticky;
  bottom: 0;
}

.no-items .tfoot-cell {
  height: 100%;
}

.loading-spinner {
  width: 3rem;
  height: 3rem;
  place-self: center;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

@include mobile {
  .table {
    .thead {
      display: none;
    }
    .tr {
      display: grid;
      grid-template-columns: 1fr;
      height: min-content;
    }
    .tbody tr {
      padding: 0.5rem 0;
      &:not(:last-child) {
        border-bottom: $border;
      }
      td {
        display: flex;
        height: 2rem;
        justify-content: space-between;
        border-bottom: 0;
        &:before {
          content: attr(data-header);
          margin-right: auto;
        }
      }
    }
  }
}

.cell-enter-active,
.cell-leave-active {
  transition: 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  transition-property: height transform opacity;
}
.cell-enter-from,
.cell-leave-to {
  opacity: 0;
  height: 0;
  transform: translateY(50%);
  .loading-spinner {
    transform: scale(0);
  }
}
</style>
