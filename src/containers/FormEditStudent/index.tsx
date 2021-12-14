import { regexEmail, regexOnlyLetter } from "helpers";
import React from "react";
import { useForm } from "react-hook-form";
import Popup from "reactjs-popup";
import { FormAddStyle } from "styles/GlobalStyle";
import { ResponseMessage, Student } from "types";
import { toast } from "react-toastify";

import { studentApi } from "apis";
import { useQuery } from "hooks";
import { selectListStudent } from "modules/students";
import { useSelector } from "react-redux";
import { useFetchListStudent } from "hooks/useFetchListStudent";
import { getListClasses } from "helpers/getListCLasses";
import { toNumber, toString } from "lodash";
import {
  getAllProvinces,
  getAllDistricts,
  getAllCommunes,
  getCommune,
  getDistrict,
  getProvince,
} from "helpers/country";
import { watch } from "fs";

interface FormEditStudentProps {
  closeForm: () => void;
}
export const FormEditStudent = ({ closeForm }: FormEditStudentProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { payload } = useSelector(selectListStudent);
  const query = useQuery();
  const uid = query.get("id") || "";
  const [dispatchFetchStudent] = useFetchListStudent();
  const infoStudent = payload.list.find((item) => item.id === uid);
  const [gradeChoose, setGradeChoose] = React.useState(infoStudent?.grade || 0);
  const [provinceChoose, setProvinceChoose] = React.useState(
    infoStudent?.province || ""
  );
  const [districtChoose, setDistrictChoose] = React.useState(
    infoStudent?.district || ""
  );

  React.useEffect(() => {
    setGradeChoose(infoStudent?.grade || 0);
    setProvinceChoose(infoStudent?.province || "");
    setDistrictChoose(infoStudent?.district || "");
  }, [infoStudent]);
  const onSubmit = async (data: Student) => {
    const province = getProvince(toString(data.province));
    const district = getDistrict(toString(data.district));
    const commune = getCommune(toString(data.commune));
    const address = `${province} - ${district} - ${commune}`;

    await toast.promise(studentApi.put({ ...data, id: uid, address }), {
      pending: `Editing student ${uid}`,
      success: {
        render: ({ data }: { data: ResponseMessage }) => {
          const { message } = data;
          dispatchFetchStudent();
          closeForm();

          return message;
        },
      },
      error: {
        render: ({ data }: { data: ResponseMessage }) => {
          const { message } = data;
          return message;
        },
      },
    });
  };
  const renderOptionsClasses = () => {
    const list = getListClasses(gradeChoose);
    return list.map((item) => <option value={item}>{item}</option>);
  };

  const renderOptionsProvince = () => {
    return getAllProvinces().map((province) => (
      <option key={province.idProvince} value={province.idProvince}>
        {province.name}
      </option>
    ));
  };
  const renderOptionsDistrict = () => {
    return getAllDistricts(provinceChoose).map((district) => (
      <option key={district.idDistrict} value={district.idDistrict}>
        {district.name}
      </option>
    ));
  };
  const renderOptionCommune = () => {
    return getAllCommunes(districtChoose).map((commune) => (
      <option key={commune.idCommune} value={commune.idCommune}>
        {commune.name}
      </option>
    ));
  };
  return (
    <Popup
      modal
      nested
      open={true}
      closeOnDocumentClick
      onClose={() => {
        closeForm();
        reset();
      }}
    >
      <FormAddStyle>
        <form className="td-form-add" onSubmit={handleSubmit(onSubmit)}>
          <div className="td-form-add__title">
            <span>Form Edit Student</span>
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                closeForm();
              }}
            >
              <path
                d="M18.125 0.75H1.875C0.820312 0.75 0 1.60938 0 2.625V16.375C0 17.4297 0.820312 18.25 1.875 18.25H18.125C19.1406 18.25 20 17.4297 20 16.375V2.625C20 1.60938 19.1406 0.75 18.125 0.75ZM14.8438 12.1172C15.0391 12.3125 15.0391 12.625 14.8438 12.7812L13.2422 14.3828C13.0859 14.5781 12.7734 14.5781 12.5781 14.3828L10 11.7656L7.38281 14.3828C7.1875 14.5781 6.875 14.5781 6.71875 14.3828L5.11719 12.7812C4.92188 12.625 4.92188 12.3125 5.11719 12.1172L7.73438 9.5L5.11719 6.92188C4.92188 6.72656 4.92188 6.41406 5.11719 6.25781L6.71875 4.65625C6.875 4.46094 7.1875 4.46094 7.38281 4.65625L10 7.27344L12.5781 4.65625C12.7734 4.46094 13.0859 4.46094 13.2422 4.65625L14.8438 6.25781C15.0391 6.41406 15.0391 6.72656 14.8438 6.92188L12.2266 9.5L14.8438 12.1172Z"
                fill="#FF0202"
              />
            </svg>
          </div>
          <div className="td-form-add__body">
            <div className="container-fluid row  flex-wrap justify-content-between">
              <div className="td-form-add__body__form-input">
                <label htmlFor="first_name">First Name:</label>
                <input
                  placeholder="example: Truong Thanh"
                  defaultValue={infoStudent?.first_name}
                  className="form-control"
                  {...register("first_name", {
                    pattern: regexOnlyLetter,
                    required: true,
                    maxLength: 50,
                  })}
                  onBlur={(e) => (e.target.value = e.target.value.trim())}
                />
                {errors.first_name && (
                  <span>Please enter valid first name </span>
                )}
              </div>
              <div className="td-form-add__body__form-input">
                <label htmlFor="last_name">Last Name:</label>
                <input
                  placeholder="example: Huy"
                  className="form-control"
                  defaultValue={infoStudent?.last_name}
                  {...register("last_name", {
                    pattern: regexOnlyLetter,
                    required: true,
                  })}
                  onBlur={(e) => (e.target.value = e.target.value.trim())}
                />
                {errors.last_name && <span>Please enter valid last name </span>}
              </div>
            </div>
            <div className="container-fluid row  flex-wrap justify-content-between mt-4">
              <div className="td-form-add__body__form-input">
                <label htmlFor="dob">Gender:</label>
                <select
                  className="form-select form-control"
                  defaultValue={infoStudent?.gender}
                  {...register("gender", {
                    pattern: regexOnlyLetter,
                    required: true,
                  })}
                >
                  <option value="" selected>
                    Select gender
                  </option>
                  <option value={"male"}>Male</option>
                  <option value={"female"}>Female</option>
                </select>
                {errors.gender && <span>Please choose gender</span>}
              </div>
              <div className="td-form-add__body__form-input">
                <label htmlFor="date_of_birth">Date Of Birth:</label>
                <input
                  {...register("date_of_birth", { required: true })}
                  id="date_of_birth"
                  placeholder="example: Huy"
                  type="date"
                  defaultValue={infoStudent?.date_of_birth}
                  className="form-control"
                ></input>
                {errors.date_of_birth && (
                  <span>Please Choose Date Of Birth</span>
                )}
              </div>
            </div>
            <div className="container-fluid row  flex-wrap justify-content-between mt-4">
              <div className="td-form-add__body__form-input">
                <label htmlFor="grade">Grade:</label>
                <select
                  className="form-select form-control"
                  defaultValue={infoStudent?.grade}
                  {...register("grade", {
                    required: true,
                  })}
                  onChange={(e) => setGradeChoose(toNumber(e.target.value))}
                >
                  <option value="" selected>
                    Select Grade
                  </option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </select>
                {errors.grade && <span>Please Choose Grade</span>}
              </div>
              <div className="td-form-add__body__form-input">
                <label htmlFor="class">Classes:</label>
                <select
                  className="form-select form-control"
                  {...register("Class", {
                    required: true,
                  })}
                  defaultValue={infoStudent?.Class}
                >
                  <option value="" selected>
                    Select Class
                  </option>
                  {renderOptionsClasses()}
                </select>
                {errors.class && <span>Please choose Classes</span>}
              </div>
            </div>
            <div className="container-fluid row  flex-wrap justify-content-between mt-3">
              <div className="td-form-add__body__form-input col-4">
                <label htmlFor="grade">Province:</label>
                <select
                  className="form-select form-control"
                  {...register("province", {
                    required: true,
                  })}
                  value={provinceChoose}
                  onChange={(e) => setProvinceChoose(e.target.value)}
                >
                  <option value="" selected>
                    Select Province
                  </option>
                  {renderOptionsProvince()}
                </select>
                {errors.province && <span>Please Choose Province</span>}
              </div>
              <div className="td-form-add__body__form-input ">
                <label htmlFor="grade">District:</label>
                <select
                  className="form-select form-control"
                  {...register("district", {
                    required: true,
                  })}
                  value={districtChoose}
                  onChange={(e) => setDistrictChoose(e.target.value)}
                >
                  <option value={""} selected>
                    Select District
                  </option>
                  {renderOptionsDistrict()}
                </select>
                {errors.district && <span>Please Choose District</span>}
              </div>
            </div>
            <div className="container-fluid row  flex-wrap justify-content-between mt-3">
              <div className="td-form-add__body__form-input">
                <label htmlFor="grade">Commune:</label>
                <select
                  className="form-select form-control"
                  {...register("commune", {
                    required: true,
                  })}
                  defaultValue={infoStudent?.commune}
                >
                  <option value="" selected>
                    Select Commune:
                  </option>
                  {renderOptionCommune()}
                </select>
                {errors.commune && <span>Please Choose Commune</span>}
              </div>
              <div className="td-form-add__body__form-input">
                <label htmlFor="first_name">Email:</label>
                <input
                  placeholder="example@example.com"
                  className="form-control"
                  defaultValue={infoStudent?.email}
                  {...register("email", {
                    pattern: regexEmail,
                    required: true,
                  })}
                />
                {errors.email && <span>Email is not valid</span>}
              </div>
            </div>
          </div>
          <div className="td-form-add__control d-flex justify-content-between mt-5">
            <input
              type="button"
              className="td-form-add__control__btn-back btn"
              value="Back"
              onClick={() => {
                closeForm();
              }}
            />
            <input
              type="submit"
              className="td-form-add__control__btn-save btn"
              value="Save"
            />
          </div>
        </form>
      </FormAddStyle>
    </Popup>
  );
};
