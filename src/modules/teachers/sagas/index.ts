import { takeLatest } from "redux-saga/effects";
import { TEACHER_FETCH_LIST } from "..";
import { getListTeacherSaga } from "./teacherSaga";
export function* rootTeacherSaga() {
  yield takeLatest(TEACHER_FETCH_LIST, getListTeacherSaga);
}
