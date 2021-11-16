import { call, put } from "redux-saga/effects";
import { ResponseList } from "types";
import { getStudents, Student, StudentListFetch } from "..";
import { studentApi } from "apis";
export function* getListStudentSaga(action: StudentListFetch) {
  try {
    const data: ResponseList<Student> = yield call(
      studentApi.getAll,
      action.payload
    );
    yield put(getStudents(data));
  } catch (error) {
    getStudents({
      list: [],
      total: 0,
      pagination: {
        size: 1,
        page: 0,
        isSort: false,
      },
    });
  }
}
