import { ResponseFormAdd, ResponseList, Student, Teacher } from "../types";
import axiosClient from "./config";
export const teacherApi = {
  getAll: (params: {
    size: number;
    page: number;
  }): Promise<ResponseList<Teacher>> => {
    const url = "/teacher/list";
    return axiosClient.get(url, { params });
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
export const studentApi = {
  getAll: (params: {
    size: number;
    page: number;
  }): Promise<ResponseList<Student>> => {
    const url = "/student/list";

    return axiosClient.get(url, { params });
  },
  getStudent: (params: { id: string }) => {
    const url = "/student";
    return axiosClient.get(url, { params });
  },
  getTotal: () => {
    const url = "/student/total";
    return axiosClient.get(url);
  },
  delete: (id: string) => {
    const url = `/student/delete/${id}`;
    return axiosClient.delete(url);
  },
  create: (payload: Student): Promise<ResponseFormAdd> => {
    const url = "/student/create";
    return axiosClient.post(url, payload);
  },
  put: (payload: Student) => {
    const url = `/student/edit`;
    return axiosClient.put(url, payload);
  },
};
