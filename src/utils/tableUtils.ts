import { CellEnum } from "@/types/enums";
import { Row } from "@/types/tableTypes";
import { Ref } from "vue";

export const search = (row: Row, searchString: string) => {
  return !searchString || row.cells[0].value.toString().toUpperCase().indexOf(searchString.toUpperCase()) > -1;
}

export const categoryFilter = (row: Row, filter: string) => {
  return !filter || row.cells.find(c => c.cellType === CellEnum.Category)?.value.includes(filter);
}

export const thinData = (data: Row[], searchString: string, filter: string) => {
  return data.filter((row) => search(row, searchString) && categoryFilter(row, filter));
}

export const handleScroll = (scrollContainer: Ref<HTMLElement | null, HTMLElement | null>, updateData: () => Promise<void>) => {
  if (!scrollContainer.value) return;
  const { scrollTop, scrollHeight, clientHeight } = scrollContainer.value;

  if (scrollTop + clientHeight >= scrollHeight - 10) {
    updateData();
  }
};