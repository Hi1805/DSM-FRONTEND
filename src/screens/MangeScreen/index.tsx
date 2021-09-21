import React, { useContext } from "react";
import "./ManageScreen.scss";
import {
  ListTeachers,
  ListStudents,
  SendEmail,
  DashBoard,
  Navbar,
} from "../../containers";
import { FormTemplate } from "../../components";
import { controlFormContext, TypeTab } from "../../services";
import { useHistory, useParams } from "react-router-dom";
import { LayoutListing } from "../../template/LayoutListing";

export const ManageScreen: React.FC = () => {
  //"asc" ->true | "desc"-> false
  const [modeSortState, setModeSortState] = React.useState<boolean>(true);
  const [searchValueState, setSearchValueState] = React.useState("");
  const { setOpenForm, openForm } = useContext(controlFormContext);
  const { type } = useParams<{ type: TypeTab }>();
  const history = useHistory();
  const turnOffForm = () => {
    setOpenForm(false);
    history.goBack();
  };
  function renderTabActive() {
    switch (type) {
      case "email":
        return <SendEmail />;
      case "student":
        return (
          <LayoutListing modeSort={modeSortState} handleSort={setModeSortState}>
            <ListStudents />
          </LayoutListing>
        );
      case "teacher":
        return (
          <LayoutListing modeSort={modeSortState} handleSort={setModeSortState}>
            <ListTeachers
              mode={modeSortState}
              valueSeacrch={searchValueState.trim()}
            />
          </LayoutListing>
        );
    }
  }
  return (
    <React.Fragment>
      {openForm ? (
        <div className="box">
          <div className="d-flex justify-content-center align-items-center">
            <FormTemplate turnOffForm={turnOffForm} />
          </div>
        </div>
      ) : null}
      <div
        className={`layout d-flex flex-wrap ${
          openForm ? "layout--disabled" : ""
        }`}
      >
        <DashBoard />
        <div className="layout__content">
          <Navbar
            valueSearch={searchValueState}
            handleSearch={setSearchValueState}
          />
          {renderTabActive()}
        </div>
      </div>
    </React.Fragment>
  );
};

//get student , get teacher in here,
