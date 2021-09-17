import React from 'react'
import { ProfileTemplate, ClassAttributes, addTeacher } from "../../services";
import "./FormAdd.scss";
import { startCase, toNumber, toString } from "lodash";
import { getAllClass } from '../../services/classes/index';
import { createID } from '../../helpers';
import { useForm } from 'react-hook-form';
import { Loading } from '..';
import { ToastContainer, toast } from 'react-toastify';
interface FormAddProps {
    info?: ProfileTemplate;
    type: "teacher" | "student" | "email";
    status: "edit" | "add";
    turnOffForm: () => void;
}
// grade là khối, class là lớp
const regexNumber = /[0-9]/;
const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regexOnlyLetter = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/
export const FormAdd = (props: FormAddProps) => {
    const notify = () => toast("Wow so easy!");

    const { type, status, turnOffForm } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
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

    const infoGarden = (() => {
        return classesState.payload.find(item => item.id === chooseGardenState) || {
            total: 0,
            id: 0,
            values: []
        };
    })();

    const onSubmit = (data: ProfileTemplate) => {
        const { date_of_birth } = data;
        if (new Date(date_of_birth).getFullYear() > 2005 || new Date(date_of_birth).getFullYear() < 1980) {
            alert("date of birth invalid");
        }
        else {
            const id = toString(createID('teacher', toNumber(infoGarden.total + 1), data));
            if (type === "teacher") {
                addTeacher(id, infoGarden, data).then(() => {
                    alert("add sucess");
                }).then(() => {
                    turnOffForm();
                })
            }
        }
    };
    console.log(errors);
    const renderLoading = () => {
        return <div className="title p-4 text-center" style={{
            fontSize: "23px",
            fontWeight: "bold"
        }}>
            LOADING FORM
            <br />
            <span>.....</span>
            <Loading /></div>
    }
    const renderForm = () => {
        return (<React.Fragment>
            <ToastContainer />
            <div className="td-form-add__title">
                <span>{`Add a ${startCase(type)}`}</span>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={turnOffForm}>
                    <path d="M18.125 0.75H1.875C0.820312 0.75 0 1.60938 0 2.625V16.375C0 17.4297 0.820312 18.25 1.875 18.25H18.125C19.1406 18.25 20 17.4297 20 16.375V2.625C20 1.60938 19.1406 0.75 18.125 0.75ZM14.8438 12.1172C15.0391 12.3125 15.0391 12.625 14.8438 12.7812L13.2422 14.3828C13.0859 14.5781 12.7734 14.5781 12.5781 14.3828L10 11.7656L7.38281 14.3828C7.1875 14.5781 6.875 14.5781 6.71875 14.3828L5.11719 12.7812C4.92188 12.625 4.92188 12.3125 5.11719 12.1172L7.73438 9.5L5.11719 6.92188C4.92188 6.72656 4.92188 6.41406 5.11719 6.25781L6.71875 4.65625C6.875 4.46094 7.1875 4.46094 7.38281 4.65625L10 7.27344L12.5781 4.65625C12.7734 4.46094 13.0859 4.46094 13.2422 4.65625L14.8438 6.25781C15.0391 6.41406 15.0391 6.72656 14.8438 6.92188L12.2266 9.5L14.8438 12.1172Z" fill="#FF0202" />
                </svg>
            </div>
            <div className="td-form-add__body" >
                <div className="container-fluid row  flex-wrap justify-content-between">
                    <div className="td-form-add__body__form-input">
                        <label htmlFor="first_name">First Name:</label>
                        <input {...register('first_name', { pattern: regexOnlyLetter, required: true, maxLength: 50 })} placeholder="example: Truong Thanh" className="form-control"
                        />
                        {errors.first_name && <span>Please enter firstname valid</span>}
                    </div>
                    <div className="td-form-add__body__form-input">
                        <label htmlFor="last_name">Last Name:</label>
                        <input {...register('last_name', { pattern: regexOnlyLetter, required: true })} placeholder="example: Huy" className="form-control" />
                        {errors.last_name && <span>Please enter lastname valid</span>}
                    </div>
                </div>
                <div className="container-fluid row  flex-wrap justify-content-between mt-4">
                    <div className="td-form-add__body__form-input">
                        <label htmlFor="dob">Gender:</label>
                        <select {...register('gender', { pattern: regexOnlyLetter })} className="form-select form-control" >
                            <option selected >Select gender</option>
                            <option value={"male"}>Male</option>
                            <option value={"female"}>Female</option>
                        </select>
                        {errors.gender && <span>Please choose gender</span>}
                    </div>
                    <div className="td-form-add__body__form-input">
                        <label htmlFor="date_of_birth">Date Of Birth:</label>
                        <input {...register('date_of_birth', { pattern: regexNumber })} id="date_of_birth" placeholder="example: Huy" type="date" className="form-control"></input>
                        {errors.date_of_birth && <span>Please Choose Date OF Birth</span>}
                    </div>
                </div>
                <div className="container-fluid row  flex-wrap justify-content-between mt-4">
                    <div className="td-form-add__body__form-input">
                        <label htmlFor="dob">Grade:</label>
                        <select {...register('grade', { pattern: regexNumber })} className="form-select form-control"
                            onChange={(e) => {
                                setChooseGardenSate(toNumber(e.target.value))
                            }}
                        >
                            <option selected>Select grade</option>
                            {classesState.payload.map((Class) => <option key={Class.id} value={toString(Class.id)}>{Class.id}</option>)}
                        </select>
                        {errors.grade && <span>Please Choose Grade</span>}
                    </div>
                    <div className="td-form-add__body__form-input">
                        <label htmlFor="dob">Classes:</label>
                        <select {...register('class')} className="form-select form-control" aria-label="">
                            <option selected>Select classes</option>
                            {infoGarden.values.map((Class) => <option key={Class} value={Class}>{Class}</option>)}
                        </select>
                        {errors.class && <span>Please choose Classes</span>}
                    </div>
                </div>
                <div className="container-fluid row mt-4">
                    <div className="form-input w-100">
                        <label htmlFor="dob">Email:</label>
                        <input {...register('email', { pattern: regexEmail })} id="dob" placeholder="example: Huy@gmail.com" type="email" className="form-control"></input>
                        {errors.email && <span>Please enter email valid</span>}
                    </div>

                </div>
                <div className="container-fluid row mt-4">
                    <div className="form-input w-100">
                        <label htmlFor="dob">Address:</label>
                        <input {...register('address', { pattern: regexOnlyLetter, required: true })} id="address" placeholder="example: Da Nang , Viet Nam" type="text" className="form-control"></input>
                        {errors.address && <span>Please Enter Address</span>}
                    </div>
                </div>
            </div>
            <div className="td-form-add__control d-flex justify-content-between mt-5">
                <input type="button" className="td-form-add__control__btn-back btn" onClick={turnOffForm} value="back" />
                <input type="submit" className="td-form-add__control__btn-save btn" value="save" />
            </div></React.Fragment>)
    }
    return (
        <form className="td-form-add" onSubmit={handleSubmit(onSubmit)}>
            {classesState.loading ? renderLoading() : renderForm()}
        </form >
    )
}
