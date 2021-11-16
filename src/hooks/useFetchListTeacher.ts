import { PAGE, SIZE } from "constants/constants";
import { fetchListTeacher } from "modules";
import { useDispatch } from "react-redux";
import { Pagination } from "types";

export const useFetchListTeacher = () => {
  const dispatch = useDispatch();
  console.log("fetchListTeacher");

  const dispatchFetch = (props?: Pagination) => {
    return dispatch(
      fetchListTeacher({
        size: props ? props.size : SIZE,
        page: props ? props.page : PAGE,
        isSort: props ? props.isSort : true,
      })
    );
  };
  return [dispatchFetch];
};
