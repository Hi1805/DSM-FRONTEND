import React, { useContext, useRef } from "react";
import { convertFullName } from "../../helpers";
import { format } from "date-fns";
import "./ItemListing.scss";
import { useOnClickOutside } from "../../hooks";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useHistory, useParams } from "react-router-dom";
import { ProfileTemplate } from "../../types";
interface ItemListProps {
  info: ProfileTemplate;
  index: number;
}

export const ItemListing = (props: ItemListProps) => {
  const { info, index } = props;
  const history = useHistory();
  const [openFunctionState, setOpenFunctionState] = React.useState(false);
  const refItem = useRef() as React.MutableRefObject<HTMLInputElement>;
  useOnClickOutside(refItem, (e: MouseEvent) => {
    if (refItem.current.contains(e.target as Node)) return;
    setOpenFunctionState(false);
  });
  const { type } = useParams<{ type: string }>();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "😈😈😈 You won't be able to revert this! 😈😈😈",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
      }
    });
  };
  const handleClickEdit = () => {
    const location = {
      pathname: `/${type}`,
      search: `?id=${info.id}&&status=edit`,
    };
    history.push(location);
  };
  const renderFunctions = () => {
    if (openFunctionState) {
      return (
        <div className="item-listing__functions" ref={refItem}>
          <div className="item-listing__functions__cancel" onClick={handleMore}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="window-close"
              className="svg-inline--fa fa-window-close fa-w-16"
              role="img"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z"
              />
            </svg>
          </div>
          <div className="item-listing__functions__edit">
            <button
              type="button"
              className="item-listing__functions__btn btn--edit"
              onClick={handleClickEdit}
            >
              Edit
            </button>
            <svg
              width={22}
              height={19}
              viewBox="0 0 22 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.366 12.7333L16.5882 11.6315C16.7792 11.4593 17.1115 11.5798 17.1115 11.8277V16.8341C17.1115 17.7465 16.2903 18.4868 15.2781 18.4868H1.83337C0.821198 18.4868 0 17.7465 0 16.8341V4.71415C0 3.80171 0.821198 3.06143 1.83337 3.06143H12.2798C12.551 3.06143 12.6885 3.35754 12.4975 3.53314L11.2752 4.63496C11.218 4.6866 11.1416 4.71415 11.0575 4.71415H1.83337V16.8341H15.2781V12.9261C15.2781 12.8538 15.3087 12.7849 15.366 12.7333ZM21.3473 5.78497L11.3173 14.8267L7.86441 15.171C6.86369 15.2709 6.01194 14.5099 6.1227 13.601L6.50465 10.4883L16.5347 1.44659C17.4094 0.658104 18.8226 0.658104 19.6935 1.44659L21.3435 2.93403C22.2182 3.72252 22.2182 4.99993 21.3473 5.78497ZM17.5736 6.84891L15.3545 4.84843L8.25782 11.2493L7.97899 13.4977L10.4731 13.2463L17.5736 6.84891ZM20.0487 4.10471L18.3987 2.61726C18.2421 2.47609 17.9862 2.47609 17.8334 2.61726L16.6531 3.6812L18.8723 5.68168L20.0525 4.61774C20.2053 4.47313 20.2053 4.24588 20.0487 4.10471Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="item-listing__functions__delete">
            <button
              type="button"
              className="item-listing__functions__btn btn--delete"
              onClick={handleDelete}
            >
              Delete
            </button>
            <svg
              width={18}
              height={21}
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.28571 19.0727C1.28571 19.5768 1.4889 20.0603 1.85058 20.4168C2.21226 20.7733 2.7028 20.9736 3.21429 20.9736H14.7857C15.2972 20.9736 15.7877 20.7733 16.1494 20.4168C16.5111 20.0603 16.7143 19.5768 16.7143 19.0727V5.76635H1.28571V19.0727ZM12.2143 8.93452C12.2143 8.76647 12.282 8.6053 12.4026 8.48647C12.5231 8.36764 12.6866 8.30089 12.8571 8.30089C13.0276 8.30089 13.1912 8.36764 13.3117 8.48647C13.4323 8.6053 13.5 8.76647 13.5 8.93452V17.8054C13.5 17.9734 13.4323 18.1346 13.3117 18.2534C13.1912 18.3723 13.0276 18.439 12.8571 18.439C12.6866 18.439 12.5231 18.3723 12.4026 18.2534C12.282 18.1346 12.2143 17.9734 12.2143 17.8054V8.93452ZM8.35714 8.93452C8.35714 8.76647 8.42487 8.6053 8.54543 8.48647C8.66599 8.36764 8.8295 8.30089 9 8.30089C9.1705 8.30089 9.33401 8.36764 9.45457 8.48647C9.57513 8.6053 9.64286 8.76647 9.64286 8.93452V17.8054C9.64286 17.9734 9.57513 18.1346 9.45457 18.2534C9.33401 18.3723 9.1705 18.439 9 18.439C8.8295 18.439 8.66599 18.3723 8.54543 18.2534C8.42487 18.1346 8.35714 17.9734 8.35714 17.8054V8.93452ZM4.5 8.93452C4.5 8.76647 4.56773 8.6053 4.68829 8.48647C4.80885 8.36764 4.97236 8.30089 5.14286 8.30089C5.31335 8.30089 5.47687 8.36764 5.59743 8.48647C5.71798 8.6053 5.78571 8.76647 5.78571 8.93452V17.8054C5.78571 17.9734 5.71798 18.1346 5.59743 18.2534C5.47687 18.3723 5.31335 18.439 5.14286 18.439C4.97236 18.439 4.80885 18.3723 4.68829 18.2534C4.56773 18.1346 4.5 17.9734 4.5 17.8054V8.93452ZM17.3571 1.96454H12.5357L12.158 1.22398C12.078 1.06566 11.9548 0.932479 11.8022 0.839428C11.6496 0.746377 11.4736 0.697146 11.2942 0.697273H6.70179C6.52274 0.696594 6.34712 0.745642 6.19506 0.838796C6.04299 0.931951 5.92062 1.06544 5.84196 1.22398L5.46429 1.96454H0.642857C0.472361 1.96454 0.308848 2.0313 0.188289 2.15013C0.0677294 2.26896 0 2.43013 0 2.59818L0 3.86544C0 4.03349 0.0677294 4.19466 0.188289 4.31349C0.308848 4.43232 0.472361 4.49908 0.642857 4.49908H17.3571C17.5276 4.49908 17.6912 4.43232 17.8117 4.31349C17.9323 4.19466 18 4.03349 18 3.86544V2.59818C18 2.43013 17.9323 2.26896 17.8117 2.15013C17.6912 2.0313 17.5276 1.96454 17.3571 1.96454Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      );
    }
    return null;
  };

  const handleMore = () => {
    setOpenFunctionState(!openFunctionState);
  };
  const styleGender =
    info.gender === "female" ? "gender--female" : "gender--male";

  return (
    <React.Fragment>
      <tr className="item-listing">
        <th scope="row">{index + 1}</th>
        <td>{info.id}</td>
        <td>{convertFullName(info.first_name, info.last_name)}</td>
        <td>{format(new Date(info.date_of_birth), "PP")}</td>
        <td className={styleGender}>
          <span>{info.gender}</span>
        </td>
        <td>{info.email}</td>
        <td>{info.class}</td>
        <td>{info.address}</td>
        <td
          onClick={handleMore}
          data-toggle="tooltip"
          data-placement="bottom"
          title="edit or delete"
          style={{ padding: "0 12px" }}
        >
          <svg
            width="4"
            height="16"
            viewBox="0 0 4 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
              fill="#C5C7CD"
            />
          </svg>
        </td>
      </tr>
      {renderFunctions()}
    </React.Fragment>
  );
};
