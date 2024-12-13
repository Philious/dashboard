import { CellEnum } from "@/types/enums";
import { Row } from "@/types/tableTypes";

export const search = (row: Row, searchString: string) => !searchString || row.cells[0].value.toString().toUpperCase().indexOf(searchString.toUpperCase()) > -1;

export const categoryFilter = (row: Row, filter: string) => !filter || row.cells.find(c => c.cellType === CellEnum.Category)?.value.includes(filter);

export const thinData = (data: Row[], searchString: string, filter: string) => data.filter((row) => search(row, searchString) && categoryFilter(row, filter));