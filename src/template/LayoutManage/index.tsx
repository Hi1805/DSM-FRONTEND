import React from "react";
import { DashBoard } from "../../containers";
import Style from "./style";
const LayoutManage: React.FC = ({ children }) => {
  return (
    <Style>
      <div className="layout d-flex flex-wrap">
        <DashBoard />
        <div className="layout__content">{children}</div>
      </div>
    </Style>
  );
};
export default LayoutManage;
