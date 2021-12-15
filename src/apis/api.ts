import { FileAttribute } from "containers/PopupSendEmail";
import {
  ResponseMessage,
  ResponseList,
  Student,
  Teacher,
  Pagination,
  BodyLogin,
} from "../types";
import axiosClient from "./config";
interface SendEmailProps {
  type_send: "students" | "teachers";
  subject: string;
  content: string;
  files: FileAttribute[];
}
export const teacherApi = {
  getAll: (params: Pagination): Promise<ResponseList<Teacher>> => {
    const url = "private/teacher/list";
    return axiosClient.get(url, { params });
  },
  getTotal: () => {
    const url = "private/teacher/total";
    return axiosClient.get(url);
  },
  delete: (id: string) => {
    const url = `private/teacher/delete/${id}`;
    return axiosClient.delete(url);
  },
  create: (payload: Teacher) => {
    const url = "private/teacher/create";
    return axiosClient.post(url, payload);
  },
  put: (payload: Teacher) => {
    const url = `private/teacher/edit`;
    return axiosClient.put(url, payload);
  },
};
export const studentApi = {
  getAll: (params: Pagination): Promise<ResponseList<Student>> => {
    const url = "private/student/list";
    return axiosClient.get(url, { params });
  },
  getStudent: (params: { id: string }) => {
    const url = "/student";
    return axiosClient.get(url, { params });
  },
  getTotal: () => {
    const url = "private/student/total";
    return axiosClient.get(url);
  },
  delete: (id: string) => {
    const url = `private/student/delete/${id}`;
    return axiosClient.delete(url);
  },
  create: (payload: Student): Promise<ResponseMessage> => {
    const url = "private/student/create";
    return axiosClient.post(url, payload);
  },
  put: (payload: Student) => {
    const url = `private/student/edit`;
    return axiosClient.put(url, payload);
  },
};

export const dsmApi = {
  login: (payload: BodyLogin): Promise<{ token: string }> => {
    const url = `public/dsm/login`;
    return axiosClient.post(url, payload);
  },
  changePassword: ({
    newPassword,
    oldPassword,
  }: {
    newPassword: string;
    oldPassword: string;
  }): Promise<{ message: string }> => {
    const url = `private/dsm/change-password`;
    return axiosClient.post(url, {
      newPassword: newPassword,
      oldPassword,
    });
  },
  forgotPassword: ({
    email,
  }: {
    email: string;
  }): Promise<{ message: string }> => {
    const url = `public/dsm/forgot-password`;
    return axiosClient.post(url, {
      email,
    });
  },
  checkingOtp: ({ otp = "" }): Promise<{ message: string }> => {
    const url = `private/dsm/otp`;
    return axiosClient.post(url, {
      otp,
    });
  },
  getHistories(params: { page: number; size: number }) {
    const url = `private/dsm/history/list`;
    return axiosClient.get(url, { params });
  },
  sendEmail(body: SendEmailProps) {
    const url = `private/dsm/send-email`;
    return axiosClient.post(url, body);
  },
};
