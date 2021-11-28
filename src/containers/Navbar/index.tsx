import React, { useRef } from "react";
import logoAdmin from "./img/admin.jpg";
import { useOnClickOutside } from "hooks";
import { startCase } from "lodash";
import { FaKey } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
interface NavBarProps {
  handleSearch?: (value: string) => void;
  valueSearch?: string;
  title: string;
}
export const Navbar = (props: NavBarProps) => {
  const { handleSearch, valueSearch, title } = props;
  const [searchActiveState, setSearchActiveState] = React.useState(false);
  const history = useHistory();
  const refSearch = useRef() as React.MutableRefObject<HTMLInputElement>;
  useOnClickOutside(refSearch, (e) => {
    if (refSearch.current.contains(e.target as Node)) return;
    setSearchActiveState(false);
  });

  const [isOpenMenu, setOpenMenu] = React.useState(false);
  const openMenuClassName = clsx({
    ["d-none"]: !isOpenMenu,
  });

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
                  handleSearch(e.target.value);
                }}
                className="layout__content__navbar__tools__search__input form-success"
                placeholder="Search......"
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
