import { fetchData } from "@/api/api";
import { CategoryColor, CategoryColorNames, CellEnum, StorageIconState } from "@/types/enums";
import { Row, TableHeader } from "@/types/tableTypes";
import { search, thinData } from "@/utils/tableUtils";
import { toggle } from "@/utils/utils";
import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

export type DataStoreType = ReturnType<typeof useDataStore>;


export const useDataStore = defineStore('table', () => {
  const items = ref<Row[]>([]);
  const internalItems = ref<Row[]>([]);
  const currentPage = ref(1);
  const isLoading = ref(false);
  const hasMore = ref(true);
  const headers = ref<TableHeader[]>([]);
  const searchString = ref('');
  const categoryFilter = ref<CategoryColorNames | ''>('');
  const priceFilter = ref('');
  const stockFilter = ref('');

  const updateData = async () => {
    if (isLoading.value || !hasMore.value) return;

    isLoading.value = true;
    try {
      const response = await fetchData(currentPage.value, 20);
      if (!response?.data) return;
      const data = response.data;
      console.log(response);
      headers.value = response.headers;
      if (data.length > 0) {
        internalItems.value = [...items.value, ...data];
        currentPage.value++;
      } else {
        hasMore.value = false;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      isLoading.value = false;
    }
  };

  const priceToggle = toggle(true);
  const sortPrice = (dir?: boolean) => {
    let ascending: boolean = dir ?? priceToggle();
    items.value.sort((a, b) => {
      const first = a.cells.find(c => c.cellType === CellEnum.Currency)?.value ?? 0;
      const second = b.cells.find(c => c.cellType === CellEnum.Currency)?.value ?? 0
      return (ascending ? first > second : first < second) ? 1 : -1
    });
  }

  watch([internalItems, searchString, categoryFilter, priceFilter, stockFilter], ([currItems, currSearch, currCat, currPrice, currStock]) => {
    if (currSearch || currCat) items.value = thinData(currItems, currSearch, currCat);
    else items.value = currItems;
  })

  return { items, currentPage, isLoading, hasMore, headers, searchString, categoryFilter, priceFilter, stockFilter, updateData, sortPrice }
})

