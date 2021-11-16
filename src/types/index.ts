export type TypeTab = "teacher" | "student" | "email";

export interface ProfileTemplate {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  gender: string;
  email: string;
  class?: string;
  address: string;
  grade?: number;
}
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
}
export const tabs: Array<{
  type: TypeTab;
  render: string;
}> = [
  {
    type: "teacher",
    render: "Teachers",
  },
  {
    type: "student",
    render: "Students",
  },
  {
    type: "email",
    render: "Send E-email",
  },
];
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
