import { TeacherListActions } from "./actions";
import { TEACHER_FETCH_LIST, TEACHER_LIST_DATA } from "./constants";
import { ListTeacherState } from "./types";
import { PAGE } from "constants/constants";
import { SIZE } from "constants/constants";

export const initListTeacher: ListTeacherState = {
  payload: {
    list: [],
    pagination: {
      size: PAGE,
      page: SIZE,
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
        loading: false,
      };
  }
};
