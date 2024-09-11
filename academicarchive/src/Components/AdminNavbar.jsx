import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Public/Css/adminNavbar.css';
import SearchBar from './Searchbar';
import AdminProfile from './AdminProfile';

const Navbar = ({handleDarkMode , mode}) => {

  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     handleDarkMode();
  //     document.body.style.backgroundColor = '#23252b';
  //     document.body.style.color = 'white';
  //   } else {
  //     handleDarkMode();
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //   }
  // };

  return (
    <nav className={`navbar-container navbar-${mode} bg-${mode}`}>
      <div className="navbar-content">
        <a href="/home" className="navbar-logo">
          Academic Archive
        </a>

        <div className="navbar-center">
          <ul className="navbar-links">
            <li>
              <a href="/admin">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">ContactUs</a>
            </li>
          </ul>
          <form className="search-form">
            <SearchBar style={{ marginTop: '1rem' }} />
          </form>
        </div>

        <div className="navbar-right">
          <div
            className={`form-check form-switch text-${
              mode === 'light' ? 'dark' : 'light'
            } mx-3`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={handleDarkMode}
              style = {{position : 'absolute' , top : '4vmin' , right : '38vmin'}}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: mode === 'light' ? 'black' : 'white', }}
            >
              {mode === 'light' ? 'Enable Dark Mode' : 'Disable Dark Mode'}
            </label>
          </div>
          <AdminProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    