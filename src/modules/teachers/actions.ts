import { Pagination } from "types";
import { TEACHER_FETCH_LIST, TEACHER_LIST_DATA } from "./constants";
import { ListTeacherState } from "./types";

export interface TeacherListFetch {
  type: typeof TEACHER_FETCH_LIST;
  payload: Pagination;
}
export interface TeacherListData extends ListTeacherState {
  type: typeof TEACHER_LIST_DATA;
}

export type TeacherListActions = TeacherListFetch | TeacherListData;

export const fetchListTeacher = (
  payload: TeacherListFetch["payload"]
): TeacherListFetch => ({
  type: TEACHER_FETCH_LIST,
  payload,
});

export const getTeachers = (
  payload: TeacherListData["payload"]
): TeacherListData => ({
  type: TEACHER_LIST_DATA,
  payload,
  loading: false,
});
