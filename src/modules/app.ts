import { combineReducers } from "redux";
import { listStudentReducer } from "./students";
import { listTeacherReducer, totalTeacherReducer } from "./teachers/reducers";
export const teacherReducer = combineReducers({
  listTeacher: listTeacherReducer,
  totalTeacher: totalTeacherReducer,
});
export const studentReducer = combineReducers({
  list: listStudentReducer,
});
