import { RootState } from "..";
import { ListTeacherState } from "./types";

export const selectListTeacher = (state: RootState): ListTeacherState =>
  state.teacher.list;
