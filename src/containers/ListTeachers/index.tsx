import React from "react";
import "../listingStyle.scss";
import { toString } from "lodash";
import { Loading, ItemListing } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchListTeacher, selectListTeacher } from "../../modules";
// import reactPaginate from "react-paginate";
interface ListingTeacherProps {
  valueSeacrch: string;
  mode: boolean;
}
const PAGE = 1;
const PAGE_SIZE = 10;

export const ListTeachers = (props: ListingTeacherProps) => {
  const { valueSeacrch, mode } = props;

  const { loading, teachers } = useSelector(selectListTeacher).payload;
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(
      fetchListTeacher({
        page: PAGE,
        size: PAGE_SIZE,
      })
    );
  }, []);
  return (
    <div className="td-listing__container table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Date Of Birth</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Class Leader</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <ItemListing info={teacher} index={index} key={teacher.id} />
          ))}
        </tbody>
      </table>
      {loading ? <Loading /> : null}
      {/* <reactPaginate  pageCount={}>

      </reactPaginate> */}
    </div>
  );
};
