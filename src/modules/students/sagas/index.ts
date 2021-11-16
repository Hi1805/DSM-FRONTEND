import { takeLatest } from "redux-saga/effects";
import { STUDENT_FETCH_LIST } from "..";
import { getListStudentSaga } from "./studentSaga";
export function* rootStudentSaga() {
  yield takeLatest(STUDENT_FETCH_LIST, getListStudentSaga);
}
