import { fetchData } from "@/api/api";
import { Row, TableHeader } from "@/types/tableTypes";
import { defineStore, Store } from "pinia";
import { ref } from "vue";

export type DataStoreType = Store<'table', {
  items: Row[],
  currentPage: number,
  isLoading: boolean;
  hasMore: boolean;
  headers: TableHeader[],
  update: () => Promise<void>
}>

export const useDataStore = defineStore('table', () => {
  const items = ref<Row[]>([]);
  const currentPage = ref(1);
  const isLoading = ref(false);
  const hasMore = ref(true);
  const headers = ref<TableHeader[]>([]);
  /*
  const update = async (page: number, limit: number) => {
    isLoading.value = true;
    const response = await fetchData(page, limit);
    console.log(response);
    if (response) {
      tableData.value = [...tableData.value, ...response.data];
      headers.value = response.headers;
    }
  };
*/
  const update = async () => {
    if (isLoading.value || !hasMore.value) return;

    isLoading.value = true;
    try {
      const response = await fetchData(currentPage.value, 20);
      if (!response?.data) return;
      const data = response.data;
      headers.value = response.headers;
      if (data.length > 0) {
        items.value = [...items.value, ...data];
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

  return { items, currentPage, isLoading, headers, hasMore, update }
})