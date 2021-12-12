import React from "react";
import { AiOutlineHistory } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { useHistory } from "react-router";
import { TypeTab } from "../../types";
import { TABS } from "constants/constants";

export const DashBoard = () => {
  const history = useHistory();
  const [tabState, setTabState] = React.useState<TypeTab>("teacher");
  React.useEffect(() => {
    if (history.location.state) {
      setTabState(history.location.state as TypeTab);
    }
  }, [history.location.state]);
  const navigationTab = (type: TypeTab) => {
    let pathname = "";
    switch (type) {
      case "student":
        pathname = "/manage/student";
        break;
      case "teacher":
        pathname = "/manage/teacher";
        break;
      case "email":
        pathname = "/manage/email";
        break;
      case "history":
        pathname = "/manage/history";
        break;
      default:
        pathname = "/manage";
    }
    history.push({
      pathname,
      search: "",
      state: type,
    });
  };

  const activeTabClassName = "layout__dashboard__tabs-control__item--active";

  const getIconTab = (type: TypeTab) => {
    switch (type) {
      case "teacher":
        return <FaChalkboardTeacher color="white" />;
      case "student":
        return <MdPeopleAlt color="white" />;
      case "email":
        return <SiMinutemailer color="white" />;
      case "history":
        return <AiOutlineHistory color="white" />;
    }
  };
  const renderNavigation = () => {
    const renderTabControl = (
      icon: JSX.Element,
      name: string,
      type: TypeTab,
      active: boolean = false
    ) => {
      return (
        <div
          className={`layout__dashboard__tabs-control__item d-flex ${
            active ? activeTabClassName : ""
          }`}
          onClick={() => {
            navigationTab(type);
          }}
        >
          <div className="layout__dashboard__tabs-control__item__icon d-flex justify-content-center align-items-center">
            {icon}
          </div>
          <div className="layout__dashboard__tabs-control__item__name">
            {name}
          </div>
        </div>
      );
    };
    return (
      <div className="layout__dashboard__tabs-control">
        {(() => {
          return TABS.map((tab, index) => {
            return (
              <React.Fragment key={index}>
                {renderTabControl(
                  getIconTab(tab.type),
                  tab.render,
                  tab.type,
                  tab.type === tabState
                )}
              </React.Fragment>
            );
          });
        })()}
      </div>
    );
  };
  return (
    <div className="layout__dashboard">
      <div className="layout__dashboard__title d-flex">
        <div className="layout__dashboard__title__logo">
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={16} cy={16} r={16} fill="#3751FF" />
            <path
              d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1={11}
                y1={9}
                x2={23}
                y2={23}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0.7" />
                <stop offset={1} stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="layout__dashboard__title__content">
          School Data Management
        </div>
      </div>
      {renderNavigation()}
    </div>
  );
};
