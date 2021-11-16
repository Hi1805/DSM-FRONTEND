import { TeacherListActions } from "./actions";
import { TEACHER_FETCH_LIST, TEACHER_LIST_DATA } from "./constants";
import { ListTeacherState } from "./types";

export const initListTeacher: ListTeacherState = {
  payload: {
    list: [],
    pagination: {
      size: 0,
      page: 0,
      isSort: true,
    },
    total: 0,
  },
  loading: true,
};

export const listTeacherReducer = (
  state = initListTeacher,
  action: TeacherListActions
): ListTeacherState => {
  switch (action.type) {
    case TEACHER_FETCH_LIST:
      return {
        ...state,
        loading: true,
      };
    case TEACHER_LIST_DATA:
      return {
        ...state,
        ...action,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
};
