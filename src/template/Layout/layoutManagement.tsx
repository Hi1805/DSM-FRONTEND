import React from 'react';
import { useHistory } from 'react-router-dom';
import './layoutManagement.css';

export const LayoutManagement: React.FC = ({ children }) => {
  const history = useHistory();
  const handlePathName = (path: string) => {
    const location = {
      pathname: path,
    };
    history.push(location);
  };
  return (
    <div id='homepage'>
      <div id='wrapper'>
        {/* Sidebar */}
        <ul
          className='navbar-nav bg-success sidebar sidebar-dark accordion'
          id='accordionSidebar'
        >
          <a
            className='sidebar-brand d-flex align-items-center justify-content-center'
            href='index.html'
          >
            <div className='sidebar-brand-icon rotate-n-15'>
              <i className='fas fa-laugh-wink' />
            </div>
            <div className='sidebar-brand-text mx-3'>Admin</div>
          </a>
          {/* Divider */}
          <hr className='sidebar-divider my-0' />
          {/* Divider */}
          <hr className='sidebar-divider' />
          {/* Nav Item - Pages Collapse Menu */}
          <li
            className='nav-item active'
            id='firstTimeActive'
            onClick={() => {
              handlePathName('/manage/teacher');
            }}
          >
            <a
              className='nav-link collapsed'
              href='#'
              data-toggle='collapse'
              data-target='#collapseTwo'
              aria-expanded='true'
              aria-controls='collapseTwo'
              id='all-Teachers'
            >
              <i className='fas fa-user-tie' />
              <span>Teacher Management</span>
            </a>
          </li>
          {/* Nav Item - Utilities Collapse Menu */}
          <li
            className='nav-item'
            onClick={() => {
              handlePathName('/manage/student');
            }}
          >
            <a
              className='nav-link collapsed'
              href='#'
              data-toggle='collapse'
              data-target='#collapseUtilities'
              aria-expanded='true'
              aria-controls='collapseUtilities'
              id='all-Students'
            >
              <i className='fas fa-user-graduate' />
              <span>Teacher Management</span>
            </a>
          </li>

          {/* Divider */}
          <hr className='sidebar-divider' />
          {/* Sidebar Toggler (Sidebar) */}
          {/* <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div> */}
        </ul>
        {/* End of Sidebar */}
        {/* Content Wrapper */}
        <div
          id='content-wrapper'
          className='d-flex flex-column'
          style={{ overflow: 'hidden' }}
        >
          {/* Main Content */}
          <div id='content' style={{ overflow: 'hidden' }}>
            <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
              {/* Sidebar Toggle (Topbar) */}
              <button
                id='sidebarToggleTop'
                className='btn btn-link d-md-none rounded-circle mr-3'
              >
                <i className='fa fa-bars' />
              </button>
              {/* Topbar Search */}
              {/* Topbar Navbar */}
              <ul className='navbar-nav ml-auto'>
                {/* Nav Item - Search Dropdown (Visible Only XS) */}
                <li className='nav-item dropdown no-arrow d-sm-none'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='searchDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-search fa-fw' />
                  </a>
                  {/* Dropdown - Messages */}
                  <div
                    className='dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in'
                    aria-labelledby='searchDropdown'
                  >
                    <form className='form-inline mr-auto w-100 navbar-search'>
                      <div className='input-group'>
                        <input
                          type='text'
                          className='form-control bg-light border-0 small'
                          placeholder='Search for...'
                          aria-label='Search'
                          aria-describedby='basic-addon2'
                        />
                        <div className='input-group-append'>
                          <button className='btn btn-primary' type='button'>
                            <i className='fas fa-search fa-sm' />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </li>
                {/* Nav Item - Alerts */}
                <li className='nav-item dropdown no-arrow mx-1'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='alertsDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-bell fa-fw' />
                    {/* Counter - Alerts */}
                    <span className='badge badge-danger badge-counter'>3+</span>
                  </a>
                  {/* Dropdown - Alerts */}
                  <div
                    className='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
                    aria-labelledby='alertsDropdown'
                  ></div>
                </li>
                {/* Nav Item - Messages */}
                <li className='nav-item dropdown no-arrow mx-1'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='messagesDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <i className='fas fa-envelope fa-fw' />
                    {/* Counter - Messages */}
                    <span className='badge badge-danger badge-counter'>7</span>
                  </a>
                  {/* Dropdown - Messages */}
                  <div
                    className='dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in'
                    aria-labelledby='messagesDropdown'
                  ></div>
                </li>
                <div className='topbar-divider d-none d-sm-block' />
                {/* Nav Item - User Information */}
                <li className='nav-item dropdown no-arrow'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='userDropdown'
                    role='button'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    <span
                      className='mr-2 d-none d-lg-inline text-gray-600 small'
                      id='nameOfTeacher'
                    >
                      cin
                    </span>
                    <img
                      className='img-profile rounded-circle'
                      src='https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg'
                    />
                  </a>
                  {/* Dropdown - User Information */}
                  <div
                    className='dropdown-menu dropdown-menu-right shadow animated--grow-in'
                    aria-labelledby='userDropdown'
                  >
                    <a className='dropdown-item' href='#'>
                      <i className='fas fa-user fa-sm fa-fw mr-2 text-gray-400' />
                      Hồ sơ
                    </a>
                    <a className='dropdown-item' href='#'>
                      <i className='fas fa-cogs fa-sm fa-fw mr-2 text-gray-400' />
                      Cài đặt
                    </a>
                    <div className='dropdown-divider' />
                    <a
                      className='dropdown-item'
                      href='#'
                      data-toggle='modal'
                      id='btnLogout'
                    >
                      <i className='fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400' />
                      Đăng xuất
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            {/* iFrames */}
            <div style={{ width: '100%', height: '100%' }}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
