import { call, put } from "redux-saga/effects";
import { getTeachers, TeacherListFetch } from "..";
import { teacherApi } from "apis";
import { ResponseList, Teacher } from "types";
export function* getListTeacherSaga(action: TeacherListFetch) {
  try {
    console.log("run saga teacherApi");

    const res: ResponseList<Teacher> = yield call(
      teacherApi.getAll,
      action.payload
    );
    yield put(getTeachers(res));
  } catch (error) {
    yield put(
      getTeachers({
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
