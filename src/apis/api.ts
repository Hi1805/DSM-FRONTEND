import {
  ResponseMessage,
  ResponseList,
  Student,
  Teacher,
  Pagination,
  BodyLogin,
} from "../types";
import axiosClient from "./config";
export const teacherApi = {
  getAll: (params: Pagination): Promise<ResponseList<Teacher>> => {
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
  create: (payload: Teacher) => {
    const url = "/teacher/create";
    return axiosClient.post(url, payload);
  },
  put: (payload: Teacher) => {
    const url = `/teacher/edit`;
    return axiosClient.put(url, payload);
  },
};
export const studentApi = {
  getAll: (params: Pagination): Promise<ResponseList<Student>> => {
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
  create: (payload: Student): Promise<ResponseMessage> => {
    const url = "/student/create";
    return axiosClient.post(url, payload);
  },
  put: (payload: Student) => {
    const url = `/student/edit`;
    return axiosClient.put(url, payload);
  },
};

export const dsmApi = {
  post: (payload: BodyLogin) => {
    const url = `dsm/login`;
    return axiosClient.post(url, payload);
  },
};
