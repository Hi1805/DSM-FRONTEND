import { Navbar } from "containers";
import ListStudents from "containers/ListStudents";
import { FormAddStudent } from "containers/FormAddStudent";
import React from "react";
import { Container } from "template/Container";
import { useFetchListStudent } from "./../../hooks/useFetchListStudent";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";
export default function StudentScreen() {
  const [searchValueState, setSearchActiveState] = React.useState("");
  const [isOpenFormAdd, setIsOpenForm] = React.useState(false);
  const [isSortState, setIsSortState] = React.useState(true);
  const [dispatchFetch] = useFetchListStudent();
  const closeForm = () => {
    setIsOpenForm(false);
  };

  const handleReset = () => {
    dispatchFetch();
  };
  return (
    <div className="student-screen">
      <Navbar title="Student" handleSearch={setSearchActiveState} />
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
        <ListStudents isSort={isSortState} />
        {isOpenFormAdd && <FormAddStudent closeForm={closeForm} />}
      </Container>
    </div>
  );
}
