import { Row, TableHeader } from "./tableTypes";
export interface HttpResponse<T> {
  ok: boolean,
  statusCode: number,
  body?: T
}

export type IHttpClient = {
  get<R>(url: string): Promise<HttpResponse<R>>;
  put<T, R>(url: string, body: T): Promise<HttpResponse<R>>;
  post<T, R>(url: string, body: T): Promise<HttpResponse<R>>;
  delete<R extends boolean>(url: string): Promise<HttpResponse<R>>;
}

export type QueryParams = {
  page?: string;
  limit?: string;
}

export type Product = {
  id: string,
  product: string,
  price: number,
  category: string,
  stock: number
}

export type ResponseType = {
  headers: TableHeader[],
  data: Row[],
  hasMore: boolean,
}