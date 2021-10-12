import React from "react";
import "./ManageScreen.scss";
import { DashBoard, Navbar } from "../../containers";
import { Route } from "react-router";

export const LayoutManage: React.FC = ({ children }) => {
  //"asc" ->true | "desc"-> false
  return (
    <React.Fragment>
      <div className="layout d-flex flex-wrap">
        <DashBoard />
        <div className="layout__content">{children}</div>
      </div>
    </React.Fragment>
  );
};
