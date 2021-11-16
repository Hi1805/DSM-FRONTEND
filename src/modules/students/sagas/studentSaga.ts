import { call, put } from "redux-saga/effects";
import { ResponseList } from "types";
import { getStudents, Student, StudentListFetch } from "..";
import { studentApi } from "apis";
export function* getListStudentSaga(action: StudentListFetch) {
  try {
    const { list, total }: ResponseList<Student> = yield call(
      studentApi.getAll,
      action.payload
    );
    console.log({ list, total });

    yield put(
      getStudents({
        list,
        total,
      })
    );
  } catch (error) {
    getStudents({
      list: [],
      total: 0,
    });
  }
}
