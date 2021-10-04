import { TeacherTotalActions } from ".";
import { TeacherListActions } from "./actions";
import { TEACHER_FETCH_LIST, TEACHER_LIST_DATA } from "./constants";
import { ListTeacherState, TotalTeacherState } from "./types";

export const initListTeacher: ListTeacherState = {
  payload: {
    loading: true,
    teachers: [],
  },
};
export const initTotalTeacher: TotalTeacherState = {
  payload: {
    total: 0,
    loading: true,
  },
};

export const listTeacherReducer = (
  state = initListTeacher,
  action: TeacherListActions
): ListTeacherState => {
  switch (action.type) {
    case TEACHER_FETCH_LIST:
      return {
        ...state,
      };
    case TEACHER_LIST_DATA:
      return {
        ...state,
        ...action,
      };
    default:
      return {
        ...state,
      };
  }
};
export const totalTeacherReducer = (
  state = initTotalTeacher,
  action: TeacherTotalActions
) => {
  switch (action.type) {
    case "teacher/FETCH_TOTAL":
      return {
        ...state,
      };
    case "teacher/TOTAL_DATA":
      return {
        ...state,
        ...action,
      };
    default:
      return {
        ...state,
      };
  }
};
