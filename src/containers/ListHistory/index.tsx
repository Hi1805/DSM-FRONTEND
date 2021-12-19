import { dsmApi } from "apis";
import format from "date-fns/format";
import { startCase } from "lodash";
import React from "react";
import { HistoryAttributes } from "types";

const ListHistory = () => {
  const [histories, setHistories] = React.useState<{
    data: HistoryAttributes[];
    loading: boolean;
  }>({
    data: [],
    loading: true,
  });
  const [date, setDate] = React.useState(new Date().toISOString());
  React.useEffect(() => {
    async function fetchData() {
      const data = await dsmApi.getHistories(date);
      console.log({ data });
      setHistories({
        data,
        loading: false,
      });
    }
    fetchData();
  }, [date]);
  return (
    <div className="td-listing__container table-responsive">
      <div className="td-listing__functions">
        <label className="">Date: </label>
        <input
          type="date"
          value={date}
          style={{
            marginLeft: "0.5rem",
            borderRadius: "5px",
          }}
          onChange={(event) => setDate(event.target.value)}
        ></input>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Date</th>
            <th>Device</th>
            <th>Client</th>
            <th>Platform</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {histories.data.map((history, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{history.email}</td>
              <td>{format(new Date(history.date), "HH:mm:ss , dd-MM-yyyy")}</td>
              <td>{startCase(history.device.type)}</td>
              <td>{startCase(history.client.name)}</td>
              <td>
                {startCase(history.os.name) +
                  " " +
                  startCase(history.os.platform)}
              </td>
              <td>{history.location?.country || ""}</td>
              <td
                style={{
                  color: `${history.status ? "green" : "red"}`,
                }}
              >
                {startCase(history.status ? "success" : "failed")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListHistory;
