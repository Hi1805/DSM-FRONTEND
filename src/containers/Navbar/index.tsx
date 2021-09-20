import React, { useContext, useRef } from 'react'
import { GlobalContext } from '../../services/context/globalContext';
import logoAdmin from "./img/admin.jpg"
import useOnClickOutside from '../../hooks/useOnclickoutside';
import { tabs } from '../../types';
interface NavBarProps {
    handleSearch: (value: string) => void;
    valueSearch: string;
}
export const Navbar = (props: NavBarProps) => {
    const { handleSearch, valueSearch } = props;
    const [searchActiveState, setSearchActiveState] = React.useState(false);
    const { typeTab } = useContext(GlobalContext);
    const refSearch = useRef() as React.MutableRefObject<HTMLInputElement>;
    useOnClickOutside(refSearch, (e) => {
        if (refSearch.current.contains(e.target as Node)) return;
        setSearchActiveState(false);
    })
    return (
        <div className="layout__content__navbar">
            <div className="layout__content__navbar__title">
                {tabs.find((tab) => tab.type === typeTab)?.render}
            </div>
            <div className="layout__content__navbar__tools d-flex flex-wrap" >
                <div className="layout__content__navbar__tools__search d-flex flex-wrap" ref={refSearch}>
                    {searchActiveState ? <input
                        autoFocus={true}
                        value={valueSearch}
                        onChange={(e) => {
                            handleSearch(e.target.value)
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
    )
}
