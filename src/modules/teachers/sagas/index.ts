import { takeLatest } from "redux-saga/effects";
import { TEACHER_FETCH_LIST, TEACHER_FETCH_TOTAL } from "..";
import { getListTeacherSaga, getTotalTeacherSaga } from "./teacherSaga";
export function* rootTeacherSaga() {
  yield takeLatest(TEACHER_FETCH_LIST, getListTeacherSaga);
  yield takeLatest(TEACHER_FETCH_TOTAL, getTotalTeacherSaga);
}
