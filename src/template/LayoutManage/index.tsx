import React from "react";
import "./ManageScreen.scss";
import { DashBoard } from "../../containers";

export const LayoutManage: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <div className="layout d-flex flex-wrap">
        <DashBoard />
        <div className="layout__content">{children}</div>
      </div>
    </React.Fragment>
  );
};
