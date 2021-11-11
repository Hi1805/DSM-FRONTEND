import React from "react";
import "../listingStyle.scss";
import Style from "./style";
import { Loading, ItemListing } from "../../components";
import { Teacher } from "types";
import { teacherApi } from "apis";
const PAGE = 1;
const MAX_SIZE = 10;
export const ListTeachers = () => {
  const [teacherState, setTeacher] = React.useState<{
    loading: boolean;
    list: Teacher[];
  }>({
    loading: true,
    list: [],
  });
  const [totalState, setTotalState] = React.useState<{
    loading: boolean;
    total: number;
  }>({
    loading: true,
    total: 0,
  });
  const [panigation, setPanigation] = React.useState<{
    page: number;
    size: number;
  }>({
    page: PAGE,
    size: MAX_SIZE,
  });
  React.useEffect(() => {
    (async () => {
      const { total } = await teacherApi.getTotal().then((res) => res.data);
      setTotalState({
        total,
        loading: false,
      });
    })();
  }, []);
  React.useEffect(() => {
    (async () => {
      const data = await teacherApi.getAll(panigation).then((res) => res.data);

      setTeacher({
        list: data,
        loading: false,
      });
    })();
  }, []);

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
            <ItemListing info={teacher} index={index} key={index} />
          ))}
        </tbody>
      </table>
      {teacherState.loading || totalState.loading ? <Loading /> : null}
      <div className="panigation">
        <div className="panigation__row-per d-flex flex-wrap">
          <div className="panigation__detail">Rows per page:</div>
          <div className="panigation__select">
            <select
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              {(() => {
                const options: JSX.Element[] = [];
                for (let i = 0; i < MAX_SIZE; i++) {
                  options.push(<option value={i + 1}>{i + 1}</option>);
                }
                return options;
              })()}
            </select>
          </div>
        </div>
        <div className=""></div>
      </div>
    </Style>
  );
};
