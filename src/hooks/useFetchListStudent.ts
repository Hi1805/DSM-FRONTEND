import { fetchListStudent } from "modules/students";
import React from "react";
import { useDispatch } from "react-redux";
interface useFetchParams {
  size: number;
  page: number;
}
export const useFetchListStudent = () => {
  const dispatch = useDispatch();
  const dispatchFetch = (props?: useFetchParams) => {
    return dispatch(
      fetchListStudent({
        size: props ? props.size : 8,
        page: props ? props.page : 1,
      })
    );
  };
  return [dispatchFetch];
};
