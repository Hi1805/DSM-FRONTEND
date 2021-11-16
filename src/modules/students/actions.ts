import { STUDENT_FETCH_LIST, STUDENT_LIST_DATA } from "./constants";
import { ListStudentState } from "./types";

export interface StudentListFetch {
  type: typeof STUDENT_FETCH_LIST;
  payload: {
    page: number;
    size: number;
    isSort: boolean;
  };
}
export interface StudentListData extends ListStudentState {
  type: typeof STUDENT_LIST_DATA;
}
export type StudentListActions = StudentListFetch | StudentListData;
export const fetchListStudent = (
  payload: StudentListFetch["payload"]
): StudentListFetch => ({
  type: STUDENT_FETCH_LIST,
  payload,
});

export const getStudents = (
  payload: StudentListData["payload"]
): StudentListData => ({
  type: STUDENT_LIST_DATA,
  payload,
  loading: false,
});
