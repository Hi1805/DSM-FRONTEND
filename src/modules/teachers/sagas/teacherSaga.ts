import { call, put } from "redux-saga/effects";
import { getTeachers, TeacherListFetch } from "..";
import { teacherApi } from "apis";
import { ResponseList, Teacher } from "types";
import { toast } from "react-toastify";
export function* getListTeacherSaga(action: TeacherListFetch) {
  try {
    const res: ResponseList<Teacher> = yield call(
      teacherApi.getAll,
      action.payload
    );
    yield put(getTeachers(res));
  } catch (error) {
    toast.warning("Teacher: Some things went wrong");

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
