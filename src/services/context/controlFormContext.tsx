import React, { useState } from "react";
import { getAllClass } from "..";
import { ClassAttributes } from "../firestore/classes/index";

type typeForm = "edit" | "add";
export interface controlFormState {
  openForm: boolean;
  setOpenForm: (status: boolean) => void;
  classes: ClassAttributes[];
}
export const controlFormContext = React.createContext<controlFormState>({
  openForm: false,
  setOpenForm: (status: boolean) => {},
  classes: [],
});

export const ControlFormProvider: React.FC = ({ children }) => {
  const [openFormstate, setOpenFormstate] = useState(false);
  const [classesSate, setClassesState] = React.useState<ClassAttributes[]>([]);

  React.useEffect(() => {
    async function fetchClasses() {
      const classes = await getAllClass();
      setClassesState(classes);
    }
    fetchClasses();
  }, []);

  const setOpenForm = (status: boolean) => {
    setOpenFormstate(status);
  };
  const data = {
    openForm: openFormstate,
    classes: classesSate,
    setOpenForm: setOpenForm,
  };
  return (
    <controlFormContext.Provider value={{ ...data }}>
      {children}
    </controlFormContext.Provider>
  );
};
