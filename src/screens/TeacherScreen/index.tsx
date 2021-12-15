import { ListTeachers, Navbar } from "containers";
import { FormAddTeacher } from "containers/FormAddTeacher";
import React from "react";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";
import { Container } from "template/Container";
import { useFetchListTeacher } from "./../../hooks/useFetchListTeacher";

export default function TeacherScreen() {
  const [searchValueState, setSearchActiveState] = React.useState("");
  const [isOpenFormAdd, setIsOpenForm] = React.useState(false);
  const [isSortState, setIsSortState] = React.useState(true);
  const [dispatchFetch] = useFetchListTeacher();
  const closeForm = () => {
    setIsOpenForm(false);
  };
  const handleReset = () => {
    dispatchFetch();
  };
  return (
    <React.Fragment>
      <Navbar title="Teacher" handleSearch={setSearchActiveState} />
      <Container>
        <div className="td-listing__functions d-flex justify-content-end">
          <button
            className="td-listing__functions__add"
            onClick={() => {
              setIsOpenForm(true);
            }}
          >
            + Add
          </button>
          <div
            className="td-listing__functions__sort d-flex justify-content-center align-items-center"
            onClick={() => setIsSortState(!isSortState)}
          >
            {isSortState ? (
              <BsSortAlphaDown
                style={{
                  fontSize: "1.5rem",
                }}
              />
            ) : (
              <BsSortAlphaUpAlt
                style={{
                  fontSize: "1.5rem",
                }}
              />
            )}
            <span>Sort</span>
          </div>
          <button
            className="td-listing__functions__reset"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <ListTeachers isSort={isSortState} />
        {isOpenFormAdd && <FormAddTeacher closeForm={closeForm} />}
      </Container>
    </React.Fragment>
  );
}
