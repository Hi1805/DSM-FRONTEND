import { Navbar } from "containers";
import React from "react";
import { LayoutManage } from "template/LayoutManage";

export const TeacherScreen = () => {
  const [searchValueState, setSearchActiveState] = React.useState("");
  return (
    <LayoutManage>
      <Navbar
        title="Teacher"
        valueSearch={searchValueState}
        handleSearch={setSearchActiveState}
      ></Navbar>
    </LayoutManage>
  );
};
