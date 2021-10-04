import { TEACHER_TOTAL_DATA, TotalTeacherState } from ".";
import {
  TEACHER_FETCH_LIST,
  TEACHER_FETCH_TOTAL,
  TEACHER_LIST_DATA,
} from "./constants";
import { ListTeacherState } from "./types";

export interface TeacherListFetch {
  type: typeof TEACHER_FETCH_LIST;
  payload: {
    page: number;
    size: number;
  };
}
export interface TeacherListData extends ListTeacherState {
  type: typeof TEACHER_LIST_DATA;
}
export interface TeacherTotalFetch {
  type: typeof TEACHER_FETCH_TOTAL;
}
export interface TeacherTotalData extends TotalTeacherState {
  type: typeof TEACHER_TOTAL_DATA;
}
export type TeacherListActions = TeacherListFetch | TeacherListData;
export type TeacherTotalActions = TeacherTotalFetch | TeacherTotalData;
export type TeacherActions =
  | TeacherListFetch
  | TeacherListData
  | TeacherTotalFetch
  | TeacherTotalData;

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
});

export const fetchTotalTeacher = (): TeacherTotalFetch => ({
  type: TEACHER_FETCH_TOTAL,
});

export const getTotalTeacher = (
  payload: TeacherTotalData["payload"]
): TeacherTotalData => ({
  type: TEACHER_TOTAL_DATA,
  payload,
});
