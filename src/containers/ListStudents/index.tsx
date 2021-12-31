import React from "react";
import Style from "./style";
import { Loading, ItemStudent } from "../../components";
import { toNumber } from "lodash";
import { FormEditStudent } from "containers/FormEditStudent";
import { useSelector } from "react-redux";
import { selectListStudent } from "modules/students";
import { useFetchListStudent } from "hooks/useFetchListStudent";
import { PAGE, SIZE } from "constants/constants";
import { memo } from "react";
const ListStudents = ({ isSort }: { isSort: boolean }) => {
  const { loading, payload } = useSelector(selectListStudent);
  const [fetchListStudent] = useFetchListStudent();
  const [isOpenEdit, setIsOpenEdit] = React.useState(false);
  const closeFormEdit = () => {
    setIsOpenEdit(false);
  };
  const openFormEdit = () => {
    setIsOpenEdit(true);
  };

  const pageCount = Math.ceil(payload.total / SIZE) || 1;
  const [pagination, setPagination] = React.useState<{
    page: number;
    size: number;
  }>({
    page: PAGE,
    size: SIZE,
  });
  // Fetch List Student

  React.useEffect(() => {
    fetchListStudent({
      page: toNumber(pagination.page),
      size: toNumber(pagination.size),
      isSort,
    });
  }, [pagination, isSort, fetchListStudent]);

  React.useEffect(() => {
    if (
      toNumber(payload.pagination.page) != pagination.page ||
      toNumber(payload.pagination.size) != pagination.size
    ) {
      setPagination({
        size: toNumber(payload.pagination.size),
        page: toNumber(payload.pagination.page),
      });
    }
  }, [payload.pagination.page, payload.pagination.size]);
  //when click select
  const handlePagination = (page: string) => {
    setPagination({
      page: toNumber(page),
      size: SIZE,
    });
  };
  const handlePreviousPage = () => {
    if (toNumber(pagination.page) === 1) {
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

  const renderOptionsPagination = React.useCallback(() => {
    const options: JSX.Element[] = [];
    for (let i = 0; i < pageCount; i++) {
      options.push(
        <option
          key={i}
          selected={i + 1 === toNumber(pagination.page)}
          value={i + 1}
        >
          {i + 1}
        </option>
      );
    }
    return options;
  }, [pageCount, pagination.page]);
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
            ? payload.list.map((student, index) => (
                <ItemStudent
                  openFormEdit={openFormEdit}
                  info={student}
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
          <div className="pagination__row">Page:</div>
          <div className="pagination__select">
            <select
              onChange={(e) => {
                handlePagination(e.target.value);
              }}
            >
              {renderOptionsPagination()}
            </select>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {`1 - ${pageCount} of ${payload.total}`}
          <div
            className="pagination__prev"
            onClick={() => handlePreviousPage()}
          >
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
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="pagination__next" onClick={() => handleNextPage()}>
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
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpenEdit && <FormEditStudent closeForm={closeFormEdit} />}
    </Style>
  );
};

export default memo(ListStudents);
