import { RootState } from "..";
import { ListStudentState } from "./types";

export const selectListStudent = (state: RootState): ListStudentState =>
  state.student.list;
