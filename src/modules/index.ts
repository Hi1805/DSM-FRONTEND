import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";
import { studentReducer, teacherReducer } from "./app";
import { ListStudentState, rootStudentSaga } from "./students";
import { ListTeacherState, TotalTeacherState } from "./teachers";
import { rootTeacherSaga } from "./teachers";
export * from "./teachers";
export interface RootState {
  teacher: {
    listTeacher: ListTeacherState;
    totalTeacher: TotalTeacherState;
  };
  student: {
    list: ListStudentState;
  };
}
export const rootReducer = combineReducers({
  teacher: teacherReducer,
  student: studentReducer,
});

export function* rootSaga() {
  yield all([call(rootStudentSaga)]);
  yield all([call(rootTeacherSaga)]);
}
