import { Teacher } from "../types";
import axiosClient from "./config";
export const teacherApi = {
  getAll: (params: { size: number; page: number }) => {
    const url = "/teacher/list";
    return axiosClient.get(url, { params }); // {params:parmase}
  },
  getTotal: () => {
    const url = "/teacher/total";
    return axiosClient.get(url);
  },
  delete: (id: string) => {
    const url = `/teacher/delete/${id}`;
    return axiosClient.delete(url);
  },
  post: (payload: Teacher) => {
    const url = "/teacher/create";
    return axiosClient.post(url, payload);
  },
  put: (payload: Teacher) => {
    const url = `/teacher/edit`;
    return axiosClient.put(url, payload);
  },
};
