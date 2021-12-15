import { PAGE, SIZE } from "constants/constants";
import { fetchListTeacher } from "modules";
import { useDispatch } from "react-redux";
import { Pagination } from "types";
import React from "react";
export const useFetchListTeacher = () => {
  const dispatch = useDispatch();

  const dispatchFetch = React.useCallback(
    (props?: Pagination) => {
      return dispatch(
        fetchListTeacher({
          size: props ? props.size : SIZE,
          page: props ? props.page : PAGE,
          isSort: props ? props.isSort : true,
          searchValue: props ? props.searchValue : "",
        })
      );
    },
    [dispatch]
  );
  return [dispatchFetch];
};
