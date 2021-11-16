import { combineReducers } from "redux";
import { listStudentReducer } from "./students";
import { listTeacherReducer } from "./teachers/reducers";
export const teacherReducer = combineReducers({
  list: listTeacherReducer,
});
export const studentReducer = combineReducers({
  list: listStudentReducer,
});
