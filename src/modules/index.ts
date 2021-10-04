import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";
import { teacherReducer } from "./app";
import { ListTeacherState, TotalTeacherState } from "./teachers";
import { rootTeacherSaga } from "./teachers";
export * from "./teachers";
export interface RootState {
  teacher: {
    listTeacher: ListTeacherState;
    totalTeacher: TotalTeacherState;
  };
}
export const rootReducer = combineReducers({
  teacher: teacherReducer,
});

export function* rootSaga() {
  yield all([call(rootTeacherSaga)]);
}
