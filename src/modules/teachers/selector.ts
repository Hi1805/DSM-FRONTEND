import { TotalTeacherState } from ".";
import { RootState } from "..";
import { ListTeacherState } from "./types";

export const selectListTeacher = (state: RootState): ListTeacherState =>
  state.teacher.listTeacher;
export const selectTotalTeacher = (state: RootState): TotalTeacherState =>
  state.teacher.totalTeacher;
