import React from "react";
import "../listingStyle.scss";
import Style from "./style";
import { Loading, ItemStudent } from "../../components";
import { ResponseList, Teacher } from "types";
import { teacherApi } from "apis";
import { toNumber } from "lodash";
const PAGE = 1;
const MAX_SIZE = 8;

export const ListTeachers = () => {
  const [teacherState, setTeacher] = React.useState<
    ResponseList<Teacher> & { loading: boolean }
  >({
    loading: true,
    list: [],
    total: 0,
  });
  const pageCount = Math.ceil(teacherState.total / MAX_SIZE);
  const [panigation, setPanigation] = React.useState<{
    page: number;
    size: number;
  }>({
    page: PAGE,
    size: MAX_SIZE,
  });
  React.useEffect(() => {
    setTeacher({
      ...teacherState,
      loading: true,
      list: [],
    });
    (async () => {
      try {
        const data = await teacherApi.getAll(panigation);
        setTeacher({
          ...data,
          loading: false,
        });
      } catch (error) {
        setTeacher({
          list: [],
          total: 0,
          loading: false,
        });
      }
    })();
  }, [panigation]);
  const handlePanigation = (page: string) => {
    setPanigation({
      page: toNumber(page),
      size: MAX_SIZE,
    });
  };
  const handlePrevious = () => {
    if (panigation.page === 1) {
      setPanigation({
        page: pageCount,
        size: MAX_SIZE,
      });
      return;
    }
    setPanigation({
      page: panigation.page - 1,
      size: MAX_SIZE,
    });
  };
  const handleNextPage = () => {
    if (panigation.page === pageCount) {
      setPanigation({
        page: 1,
        size: MAX_SIZE,
      });
      return;
    }
    setPanigation({
      page: panigation.page + 1,
      size: MAX_SIZE,
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
          {teacherState.list.map((teacher, index) => (
            <></>
          ))}
        </tbody>
      </table>
      {teacherState.loading ? <Loading /> : null}
      <div className="panigation d-flex flex-wrap">
        <div className="panigation__row-per d-flex flex-wrap">
          <div className="panigation__detail">Rows per page:</div>
          <div className="panigation__select">
            <select
              onChange={(e) => {
                handlePanigation(e.target.value);
              }}
            >
              {(() => {
                const options: JSX.Element[] = [];
                for (let i = 0; i < pageCount; i++) {
                  options.push(
                    <option
                      key={i}
                      selected={i + 1 === panigation.page}
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
          {`1 - ${pageCount} of ${teacherState.total}`}
          <div className="panigation__prev" onClick={handlePrevious}>
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
          <div className="panigation__next" onClick={handleNextPage}>
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
    </Style>
  );
};
