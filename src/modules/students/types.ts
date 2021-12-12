import { ResponseList, Student } from "types";

export interface ListStudentState {
  payload: ResponseList<Student>;
  loading: boolean;
}
