import { ResponseList, Teacher } from "types";

export interface ListTeacherState {
  payload: ResponseList<Teacher>;
  loading: boolean;
}
export interface TotalTeacherState {
  payload: {
    total: number;
    loading: boolean;
  };
}
