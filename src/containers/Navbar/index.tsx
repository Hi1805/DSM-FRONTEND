import clsx from "clsx";
import { useOnClickOutside } from "hooks";
import { startCase } from "lodash";
import React, { useRef } from "react";
import { FaKey } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import logoAdmin from "./img/admin.jpg";
import { useFetchListStudent } from "./../../hooks/useFetchListStudent";
import { useFetchListTeacher } from "hooks/useFetchListTeacher";
import { SIZE } from "constants/constants";
import { toUpperString } from "helpers/toUpperString";
interface NavBarProps {
  handleSearch?: (value: string) => void;
  title: string;
}
export const Navbar = (props: NavBarProps) => {
  const { handleSearch, title } = props;
  const [valueSearch, setValueSearch] = React.useState("");
  const [searchActiveState, setSearchActiveState] = React.useState(false);
  const history = useHistory();
  const refSearch = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refMenu = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [fetchListStudent] = useFetchListStudent();
  const [fetchListTeacher] = useFetchListTeacher();
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  useOnClickOutside(refSearch, (e) => {
    if (refSearch.current.contains(e.target as Node)) return;
    setSearchActiveState(false);
  });

  useOnClickOutside(refMenu, (e) => {
    if (refMenu.current.contains(e.target as Node)) return;
    setOpenMenu(false);
  });
  const openMenuClassName = clsx({
    ["d-none"]: !isOpenMenu,
  });
  const handleSubmitSearch = () => {
    if (history.location.state === "student") {
      fetchListStudent({
        searchValue: valueSearch,
        page: 1,
        size: SIZE,
        isSort: true,
      });
    } else {
      fetchListTeacher({
        searchValue: valueSearch,
        page: 1,
        size: SIZE,
        isSort: true,
      });
    }
    setValueSearch("");
  };
  return (
    <div className="layout__content__navbar">
      <div className="layout__content__navbar__title">{startCase(title)}</div>
      <div className="layout__content__navbar__tools d-flex flex-wrap">
        {handleSearch ? (
          <div
            className="layout__content__navbar__tools__search d-flex flex-wrap"
            ref={refSearch}
          >
            {searchActiveState ? (
              <input
                autoFocus={true}
                value={valueSearch}
                onChange={(e) => {
                  setValueSearch(toUpperString(e.target.value));
                }}
                type="text"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSubmitSearch();
                  }
                }}
                className="layout__content__navbar__tools__search__input form-success"
                placeholder="Search by last name......"
              />
            ) : null}
            <div
              className="d-flex justify-content-center align-items-center"
              onClick={() => {
                setSearchActiveState(!searchActiveState);
              }}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.5"
                  cy="6.5"
                  r="5.75"
                  stroke="#C5C7CD"
                  strokeWidth="1.5"
                />
                <path
                  d="M11 11L15 15"
                  stroke="#C5C7CD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        ) : null}

        <div
          className="layout__content__navbar__tools__info d-flex flex-wrap"
          onClick={() => setOpenMenu(!isOpenMenu)}
        >
          <div className="layout__content__navbar__tools__info__name d-flex justify-content-center align-items-center">
            <span>ADMIN</span>
          </div>
          <div className="layout__content__navbar__tools__info__avt">
            <img src={logoAdmin} alt="logo-admin"></img>
          </div>
          <div
            className={`layout__content__navbar__tools__menu ${openMenuClassName}`}
            ref={refMenu}
          >
            <div
              className="menu__change-password"
              onClick={() => {
                const location = {
                  pathname: "/manage/change-password",
                };
                history.push(location);
              }}
            >
              <FaKey />
              <span> Change Password</span>
            </div>
            <hr style={{ margin: "0.25rem" }} />
            <div
              className="menu__logout"
              onClick={() => {
                localStorage.clear();
                const location = {
                  pathname: "/login",
                };
                history.push(location);
              }}
            >
              <RiLogoutCircleRLine />
              <span> Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
