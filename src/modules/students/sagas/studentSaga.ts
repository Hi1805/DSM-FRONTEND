import { call, put } from "redux-saga/effects";
import { ResponseList, Student } from "types";
import { getStudents, StudentListFetch } from "..";
import { studentApi } from "apis";
import { toast } from "react-toastify";
export function* getListStudentSaga(action: StudentListFetch) {
  try {
    const data: ResponseList<Student> = yield call(
      studentApi.getAll,
      action.payload
    );
    console.log(data);

    yield put(getStudents(data));
  } catch (error) {
    toast.warning("Student: Some things went wrong");
    yield put(
      getStudents({
        list: [],
        total: 0,
        pagination: {
          size: 1,
          page: 0,
          isSort: false,
        },
      })
    );
  }
}
