import { ResponseList } from "types";

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

export interface ListStudentState {
  payload: ResponseList<Student>;
  loading: boolean;
}
