import { fetchListStudent } from "modules/students";
import React from "react";
import { useDispatch } from "react-redux";

export const useFetchListStudent = ({
  size,
  page,
}: {
  size: number;
  page: number;
}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      fetchListStudent({
        size,
        page,
      })
    );
  }, [size, page]);
};
