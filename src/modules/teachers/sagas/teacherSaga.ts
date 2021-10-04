import { call, put } from "redux-saga/effects";
import {
  getTeachers,
  getTotalTeacher,
  Teacher,
  TeacherListFetch,
  TeacherTotalFetch,
} from "..";
import { teacherApi } from "../../../apis";
export function* getListTeacherSaga(action: TeacherListFetch) {
  try {
    const teachers: Teacher[] = yield call(teacherApi.getAll, action.payload);
    yield put(
      getTeachers({
        loading: false,
        teachers: teachers,
      })
    );
  } catch (error) {
    getTeachers({
      loading: false,
      teachers: [],
    });
  }
}

export function* getTotalTeacherSaga(action: TeacherTotalFetch) {
  try {
    const payload: {
      total: number;
    } = yield call(teacherApi.getTotal);
    yield put(getTotalTeacher({ ...payload, loading: false }));
  } catch (error) {
    yield put(
      getTotalTeacher({
        total: 0,
        loading: false,
      })
    );
  }
}
