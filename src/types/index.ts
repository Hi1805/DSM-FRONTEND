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
  isSort?: boolean;
  searchValue?: string;
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

export interface HistoryAttributes {
  id: string;
  client: {
    engine: string;
    engineVersion: string;
    name: string;
    type: string;
    version: string;
  };
  date: Date;
  device: {
    type: string;
  };
  location: {
    country: string;
    area: number;
  };
  os: {
    name: string;
    platform: string;
  };
  status: "failed" | "success";
}
