import React, { useState } from 'react';

type typeForm = "edit" | "add";
export interface controlFormState {
    openForm: boolean;
    typeForm: typeForm,
    setOpenForm: (status: boolean) => void;
    setTypeForm: (type: typeForm) => void;
}
export const controlFormContext = React.createContext<controlFormState>({
    openForm: false,
    typeForm: "add",
    setOpenForm: (status: boolean) => { },
    setTypeForm: (type: typeForm) => { }

});

export const ControlFormProvider: React.FC = ({ children }) => {
    const [openFormstate, setOpenFormstate] = useState(false);
    const [typeFormstate, setTypeFormstate] = useState<typeForm>("add");

    const setTypeForm = (type: typeForm) => {
        setTypeFormstate(type)
    }
    const setOpenForm = (status: boolean) => {
        setOpenFormstate(status)
    }
    const data = {
        openForm: openFormstate,
        typeForm: typeFormstate,
        setTypeForm: setTypeForm,
        setOpenForm: setOpenForm,
    }
    return (
        <controlFormContext.Provider value={{ ...data }}>
            {children}
        </controlFormContext.Provider>
    )
}


