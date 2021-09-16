import React from 'react'
import { profileTemplate, ClassAttributes, addTeacher } from "../../services";
import "./FormAdd.scss";
import { startCase, toNumber, toString } from "lodash"
import { getAllClass } from '../../services/classes/index';
import { createID } from '../../helpers';
interface FormAddProps {
    info?: profileTemplate;
    type: "teacher" | "student" | "email";
    status: "edit" | "add";
    turnOffForm: () => void;

}
export const FormAdd = (props: FormAddProps) => {
    const { type, status, turnOffForm } = props;
    const [infoState, setInfoState] = React.useState<profileTemplate>({
        id: "",
        address: "",
        class: "",
        date_of_birth: "",
        email: "",
        first_name: "",
        last_name: "",
        gender: ""
    });
    const [chooseGardenState, setChooseGardenSate] = React.useState<number>();
    const [classesState, setClassesState] = React.useState<{
        loading: boolean,
        payload: ClassAttributes[]
    }>({
        loading: true,
        payload: []
    });

    React.useEffect(() => {
        async function fetchClasses() {
            const classes = await getAllClass();
            setClassesState({
                loading: false,
                payload: classes
            })
        }
        fetchClasses();
    }, [])

    const infoGarden = classesState.payload.find(item => item.id === chooseGardenState) || {
        total: 0,
        values: []
    };
    const saveForm = () => {
        if (type === "teacher") {
            addTeacher({
                ...infoState,
                id: toString(createID('teacher', infoGarden.total, infoState)),
            }).then(() => {
                console.log("add sucess");

            })
        }
    }
    return (
        <div className="td-form-add">
            <div className="td-form-add__title">
                <span>{`Add a ${startCase(type)}`}</span>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={turnOffForm}>
                    <path d="M18.125 0.75H1.875C0.820312 0.75 0 1.60938 0 2.625V16.375C0 17.4297 0.820312 18.25 1.875 18.25H18.125C19.1406 18.25 20 17.4297 20 16.375V2.625C20 1.60938 19.1406 0.75 18.125 0.75ZM14.8438 12.1172C15.0391 12.3125 15.0391 12.625 14.8438 12.7812L13.2422 14.3828C13.0859 14.5781 12.7734 14.5781 12.5781 14.3828L10 11.7656L7.38281 14.3828C7.1875 14.5781 6.875 14.5781 6.71875 14.3828L5.11719 12.7812C4.92188 12.625 4.92188 12.3125 5.11719 12.1172L7.73438 9.5L5.11719 6.92188C4.92188 6.72656 4.92188 6.41406 5.11719 6.25781L6.71875 4.65625C6.875 4.46094 7.1875 4.46094 7.38281 4.65625L10 7.27344L12.5781 4.65625C12.7734 4.46094 13.0859 4.46094 13.2422 4.65625L14.8438 6.25781C15.0391 6.41406 15.0391 6.72656 14.8438 6.92188L12.2266 9.5L14.8438 12.1172Z" fill="#FF0202" />
                </svg>

            </div>
            <div className="td-form-add__body">
                <div className="form">
                    <div className="container-fluid row  flex-wrap justify-content-between">
                        <div className="td-form-add__body__form-input">
                            <label htmlFor="first_name">First Name:</label>
                            <input id="first_name" placeholder="example: Truong Thanh" name="first_name" type="text" className="form-control"
                                onChange={(e) => {
                                    setInfoState({ ...infoState, first_name: e.target.value })
                                }}
                            ></input>
                        </div>
                        <div className="td-form-add__body__form-input">
                            <label htmlFor="last_name">Last Name:</label>
                            <input onChange={(e) => {
                                setInfoState({ ...infoState, last_name: e.target.value })
                            }} id="last_name" placeholder="example: Huy" name="last_name" type="text" className="form-control"></input>
                        </div>
                    </div>
                    <div className="container-fluid row  flex-wrap justify-content-between mt-4">
                        <div className="td-form-add__body__form-input">
                            <label htmlFor="dob">Gender:</label>
                            <select className="form-select form-control" onChange={(e) => {
                                setInfoState({ ...infoState, gender: e.target.value })
                            }} aria-label="">
                                <option selected>Select gender</option>
                                <option value={"male"}>Male</option>
                                <option value={"female"}>Female</option>
                            </select>

                        </div>
                        <div className="td-form-add__body__form-input"

                        >
                            <label htmlFor="dob">Date Of Birth:</label>
                            <input onChange={(e) => {
                                setInfoState({ ...infoState, date_of_birth: e.target.value })
                            }} id="dob" placeholder="example: Huy" name="dob" type="date" className="form-control"></input>
                        </div>
                    </div>
                    <div className="container-fluid row  flex-wrap justify-content-between mt-4">
                        <div className="td-form-add__body__form-input">
                            <label htmlFor="dob">Garden:</label>
                            <select onChange={(e) => {
                                setChooseGardenSate(toNumber(e.target.value));
                            }} className="form-select form-control" aria-label="">
                                <option selected>Select garden</option>
                                {classesState.payload.map((Class) => <option key={Class.id} value={Class.id}>{Class.id}</option>)}
                            </select>

                        </div>
                        <div className="td-form-add__body__form-input">
                            <label htmlFor="dob">Classes:</label>
                            <select onChange={(e) => {
                                setInfoState({ ...infoState, class: e.target.value })
                            }} className="form-select form-control" aria-label="">
                                <option selected>Select classes</option>
                                {infoGarden?.values.map((Class) => <option key={Class} value={Class}>{Class}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="container-fluid row mt-4">
                        <div className="form-input w-100">
                            <label htmlFor="dob">Email:</label>
                            <input onChange={(e) => {
                                setInfoState({ ...infoState, email: e.target.value })
                            }} id="dob" placeholder="example: Huy@gmail.com" name="dob" type="email" className="form-control"></input>
                        </div>
                    </div>
                    <div className="container-fluid row mt-4">
                        <div className="form-input w-100">
                            <label htmlFor="dob">Address:</label>
                            <input onChange={(e) => {
                                setInfoState({ ...infoState, address: e.target.value })
                            }} id="dob" placeholder="example: Da Nang , Viet Nam" name="dob" type="text" className="form-control"></input>
                        </div>
                    </div>
                </div>
                <div className="td-form-add__control d-flex justify-content-between mt-5">
                    <button type="button" className="td-form-add__control__btn-back btn" onClick={turnOffForm}>Back</button>
                    <button type="button" className="td-form-add__control__btn-save btn" onClick={saveForm}>Save</button>

                </div>
            </div>

        </div>
    )
}
