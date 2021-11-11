import { Teacher } from "../types";
import axiosClient from "./config";
export const teacherApi = {
  getAll: async (params: { size: number; page: number }) => {
    const url = "/teacher/list";
    return await axiosClient.get<Teacher[]>(url, { params });
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
