import React from 'react';
import { useHistory } from 'react-router-dom';
import './LayoutManagement.scss';
import logoAdmin from "./img/admin.jpg"
import { ListTeachers } from '../../containers';
import { FormAdd } from '../../components';
type typeTab = "teacher" | "student" | "email";
const tabs: Array<{
  type: typeTab,
  render: string;
}> = [{
  type: "teacher",
  render: "Teachers"
}, {
  type: "student",
  render: "Students"
}, {
  type: "email",
  render: "Send E-email"
}];

export const LayoutManagement: React.FC = () => {
  const history = useHistory();
  const [tabActiveState, setTabActiveState] = React.useState<typeTab>("teacher");
  const [searchActiveState, setSearchActiveState] = React.useState(false);
  const [openFormAddState, setOpenFormAddState] = React.useState(false);

  const [inputSearchState, setInputSearchState] = React.useState("");
  const handlePathName = (path: string) => {
    const location = {
      pathname: path,
    };
    history.push(location);
  };
  const turnOffForm = () => {
    setOpenFormAddState(false)
  }
  const turnOnForm = () => {
    setOpenFormAddState(true);
  }
  const activeTabClassName = "layout__dashboard__tabs-control__item--active";

  const renderTabControl = (icon: JSX.Element, name: string, type: typeTab, active: boolean = false) => {
    return <div className={`layout__dashboard__tabs-control__item d-flex ${active ? activeTabClassName : ""}`} onClick={() => {
      setTabActiveState(type);
    }}>
      <div className="layout__dashboard__tabs-control__item__icon d-flex justify-content-center align-items-center">
        {icon}
      </div>
      <div className="layout__dashboard__tabs-control__item__name">
        {name}
      </div>
    </div>
  }
  const getIconTab = (type: typeTab) => {
    switch (type) {
      case "teacher":
        return <svg width={24} height={21} viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.125 14.25C8.03164 14.25 7.93828 14.2637 7.84922 14.2926C7.34297 14.457 6.81055 14.5625 6.25 14.5625C5.68946 14.5625 5.15703 14.457 4.65039 14.2926C4.56133 14.2637 4.46836 14.25 4.375 14.25C1.95078 14.25 -0.0128886 16.2219 2.06949e-06 18.6492C0.00547082 19.675 0.84883 20.5 1.875 20.5H10.625C11.6512 20.5 12.4945 19.675 12.5 18.6492C12.5129 16.2219 10.5492 14.25 8.125 14.25ZM6.25 13C8.3211 13 10 11.3211 10 9.25C10 7.17891 8.3211 5.5 6.25 5.5C4.17891 5.5 2.5 7.17891 2.5 9.25C2.5 11.3211 4.17891 13 6.25 13ZM23.125 0.5H8.125C7.09102 0.5 6.25 1.36914 6.25 2.43711V4.25C7.16485 4.25 8.01172 4.51484 8.75 4.94531V3H22.5V14.25H20V11.75H15V14.25H12.0219C12.768 14.902 13.3156 15.7629 13.5723 16.75H23.125C24.159 16.75 25 15.8809 25 14.8129V2.43711C25 1.36914 24.159 0.5 23.125 0.5Z" fill="#DDE2FF" />
        </svg>
      case 'student':
        return <svg width={24} height={16} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.4" d="M7 8C9.20938 8 11 6.20937 11 4C11 1.79063 9.20938 0 7 0C4.79063 0 3 1.79063 3 4C3 6.20937 4.79063 8 7 8ZM9.99375 9.01875L8.5 15L7.5 10.75L8.5 9H5.5L6.5 10.75L5.5 15L4.00625 9.01875C1.77812 9.125 0 10.9469 0 13.2V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V13.2C14 10.9469 12.2219 9.125 9.99375 9.01875Z" fill="#9FA2B4" />
        </svg>

      case "email":
        return <svg width={20} height={16} viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path d="M2.7273 0.888916H17.2728C18.2728 0.888916 19.0909 1.68892 19.0909 2.66669V13.3334C19.0909 14.3111 18.2728 15.1111 17.2728 15.1111H2.7273C1.7273 15.1111 0.909119 14.3111 0.909119 13.3334V2.66669C0.909119 1.68892 1.7273 0.888916 2.7273 0.888916Z" stroke="#9FA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.6869 2.66663L9.79801 14.303L0.909119 2.66663" stroke="#9FA2B4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width={20} height={16} fill="white" />
            </clipPath>
          </defs>
        </svg>
    }
  }
  return (
    <React.Fragment>
      {openFormAddState ? <div className='box'>
        <div className='d-flex justify-content-center align-items-center'><FormAdd turnOffForm={turnOffForm} type={tabActiveState} status="add" /></div>
      </div> : null}
      <div className={`layout d-flex flex-wrap ${openFormAddState ? "layout--disabled" : ""}`}>

        <div className='layout__dashboard'>
          <div className='layout__dashboard__title d-flex'>
            <div className='layout__dashboard__title__logo'>
              <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={16} cy={16} r={16} fill="#3751FF" />
                <path d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1={11} y1={9} x2={23} y2={23} gradientUnits="userSpaceOnUse">
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
          <div className="layout__dashboard__tabs-control">
            {(() => {
              return tabs.map((tab, index) => {
                return <React.Fragment key={index}>{renderTabControl(getIconTab(tab.type), tab.render, tab.type, tab.type === tabActiveState)}</React.Fragment>
              });
            })()}

          </div>
        </div>

        <div className="layout__content" >
          <div className="layout__content__navbar">
            <div className="layout__content__navbar__title">
              {tabs.find((tab) => tab.type === tabActiveState)?.render}
            </div>
            <div className="layout__content__navbar__tools d-flex flex-wrap" >
              <div className="layout__content__navbar__tools__search d-flex flex-wrap">
                {searchActiveState ? <input
                  autoFocus={true}
                  onChange={(e) => {
                    setInputSearchState(e.target.value)
                  }}
                  className='layout__content__navbar__tools__search__input form-success' placeholder='Search......' />
                  : null}
                <div className='d-flex justify-content-center align-items-center' onClick={() => {
                  setSearchActiveState(!searchActiveState);
                }}>
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="6.5" r="5.75" stroke="#C5C7CD" strokeWidth="1.5" />
                    <path d="M11 11L15 15" stroke="#C5C7CD" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>

                </div>
              </div>
              <div className="layout__content__navbar__tools__info d-flex flex-wrap">
                <div className="layout__content__navbar__tools__info__name d-flex justify-content-center align-items-center"><span>ADMIN</span></div>
                <div className="layout__content__navbar__tools__info__avt">
                  <img src={logoAdmin} alt="logo-admin"></img>
                </div>
              </div>
            </div>
          </div>
          <div className="layout__content__listing">
            <ListTeachers turnOnForm={turnOnForm} />
          </div>
        </div>
      </div >
    </React.Fragment>
  );
};

//get student , get teacher in here, 