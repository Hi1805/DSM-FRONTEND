import React, { useState } from 'react';
import { getAllClass } from '..';
import { ClassAttributes } from './../classes/index';

type typeForm = "edit" | "add";
export interface controlFormState {
    openForm: boolean;
    typeForm: typeForm,
    setOpenForm: (status: boolean) => void;
    setTypeForm: (type: typeForm) => void;
    classes:ClassAttributes[];

}
export const controlFormContext = React.createContext<controlFormState>({
    openForm: false,
    typeForm: "add",
    setOpenForm: (status: boolean) => { },
    setTypeForm: (type: typeForm) => { },
    classes:[]
});

export const ControlFormProvider: React.FC = ({ children }) => {
    const [openFormstate, setOpenFormstate] = useState(false);
    const [typeFormstate, setTypeFormstate] = useState<typeForm>("add");
    const [classesSate,setClassesState] = React.useState<ClassAttributes[]>([])

    React.useEffect(() => {
        async function fetchClasses() {
          const classes = await getAllClass();
          setClassesState(classes);
        }
        fetchClasses();
      }, []);
    const setTypeForm = (type: typeForm) => {
        setTypeFormstate(type)
    }
    const setOpenForm = (status: boolean) => {
        setOpenFormstate(status)
    }
    const data = {
        openForm: openFormstate,
        typeForm: typeFormstate,
        classes:classesSate,
        setTypeForm: setTypeForm,
        setOpenForm: setOpenForm,
    }
    return (
        <controlFormContext.Provider value={{ ...data }}>
            {children}
        </controlFormContext.Provider>
    )
}


