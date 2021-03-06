import { StudentListActions } from "./actions";
import { STUDENT_FETCH_LIST, STUDENT_LIST_DATA } from "./constants";
import { ListStudentState } from "./types";
import { PAGE, SIZE } from "constants/constants";

export const initListStudent: ListStudentState = {
  payload: {
    list: [],
    total: 0,
    pagination: {
      size: SIZE,
      page: PAGE,
      isSort: true,
    },
  },
  loading: true,
};

export const listStudentReducer = (
  state = initListStudent,
  action: StudentListActions
): ListStudentState => {
  switch (action.type) {
    case STUDENT_FETCH_LIST:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_LIST_DATA:
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
