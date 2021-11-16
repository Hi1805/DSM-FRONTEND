import React from "react";
import "../listingStyle.scss";
import Style from "./style";
import { Loading, ItemTeacher } from "../../components";
import { toNumber } from "lodash";
import { FormEditStudent } from "containers/FormEditStudent";
import { useSelector } from "react-redux";
import { PAGE, SIZE } from "constants/constants";
import { useFetchListTeacher } from "hooks/useFetchListTeacher";
import { selectListTeacher } from "modules/teachers";

export const ListTeachers = ({ isSort }: { isSort: boolean }) => {
  const { loading, payload } = useSelector(selectListTeacher);
  const [fetchListTeacher] = useFetchListTeacher();
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);
  const closeFormEdit = () => {
    setIsOpenEdit(false);
  };
  const openFormEdit = () => {
    setIsOpenEdit(true);
  };
  const pageCount = Math.ceil(payload.total / SIZE);
  const [pagination, setPagination] = React.useState<{
    page: number;
    size: number;
  }>({
    page: PAGE,
    size: SIZE,
  });

  // Fetch List Teacher
  React.useEffect(() => {
    fetchListTeacher({
      ...pagination,
      isSort,
    });
  }, [pagination, isSort, fetchListTeacher]);
  //when click select
  const handlePagination = (page: string) => {
    setPagination({
      page: toNumber(page),
      size: SIZE,
    });
  };
  const handlePreviousPage = () => {
    if (pagination.page === 1) {
      setPagination({
        page: pageCount,
        size: SIZE,
      });
      return;
    }
    setPagination({
      page: pagination.page - 1,
      size: SIZE,
    });
  };
  const handleNextPage = () => {
    if (pagination.page === pageCount) {
      setPagination({
        page: 1,
        size: SIZE,
      });
      return;
    }
    setPagination({
      page: pagination.page + 1,
      size: SIZE,
    });
  };
  return (
    <Style className="td-listing__container table-responsive">
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
          {!loading
            ? payload.list.map((teacher, index) => (
                <ItemTeacher
                  openFormEdit={openFormEdit}
                  info={teacher}
                  index={index}
                  key={index}
                />
              ))
            : null}
        </tbody>
      </table>
      {loading ? <Loading /> : null}
      <div className="pagination d-flex flex-wrap">
        <div className="pagination__row-per d-flex flex-wrap">
          <div className="pagination__row">Rows per page:</div>
          <div className="pagination__select">
            <select
              onChange={(e) => {
                handlePagination(e.target.value);
              }}
            >
              {(() => {
                const options: JSX.Element[] = [];
                for (let i = 0; i < pageCount; i++) {
                  options.push(
                    <option
                      key={i}
                      selected={i + 1 === pagination.page}
                      value={i + 1}
                    >
                      {i + 1}
                    </option>
                  );
                }
                return options;
              })()}
            </select>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {`1 - ${pageCount} of ${payload.total}`}
          <div className="pagination__prev" onClick={handlePreviousPage}>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1.07071 7.07071C1.03166 7.03166 1.03166 6.96834 1.07071 6.92929L7 1"
                stroke="#9FA2B4"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="pagination__next" onClick={handleNextPage}>
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L6.92929 7.07071C6.96834 7.03166 6.96834 6.96834 6.92929 6.92929L1 1"
                stroke="#9FA2B4"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <FormEditStudent isOpen={isOpenEdit} closeForm={closeFormEdit} />
    </Style>
  );
};
