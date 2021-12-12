export type TypeTab = "teacher" | "student" | "email" | "history";

export interface Teacher {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  email: string;
  Class?: string;
  address: string;
  grade?: number;
  province?: string;
  district?: string;
  commune?: string;
}
export interface Student {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  email: string;
  Class: string;
  address: string;
  grade: number;
  province?: string;
  district?: string;
  commune?: string;
}

export interface Pagination {
  size: number;
  page: number;
  isSort: boolean;
}
export interface ResponseList<T> {
  list: T[];
  total: number;
  pagination: Pagination;
}

export interface ResponseMessage {
  message: string;
}

export interface BodyLogin {
  email: string;
  password: string;
}
