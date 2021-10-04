import { combineReducers } from "redux";
import { listTeacherReducer, totalTeacherReducer } from "./teachers/reducers";
export const teacherReducer = combineReducers({
  listTeacher: listTeacherReducer,
  totalTeacher: totalTeacherReducer,
});
