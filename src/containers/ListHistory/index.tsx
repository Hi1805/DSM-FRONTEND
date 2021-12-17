import { dsmApi } from "apis";
import { PAGE, SIZE } from "constants/constants";
import React from "react";

const ListHistory = () => {
  React.useEffect(() => {
    dsmApi
      .getHistories({
        page: PAGE,
        size: SIZE,
      });
  }, []);
  return (
    <div className="td-listing__container table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Date</th>
            <th>Device</th>
            <th>Client</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ListHistory;
