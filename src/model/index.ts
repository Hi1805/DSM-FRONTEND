import { Pagination } from "types";

export interface PrivateApi {
  url: string;
  getAll: (params: Pagination) => Promise<any>;
}
