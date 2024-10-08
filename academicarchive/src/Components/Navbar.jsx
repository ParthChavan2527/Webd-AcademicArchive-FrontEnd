import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../Public/Css/navbar.css';
import SearchBar from './Searchbar';
import StudentProfile from './StudentProfile';

const Navbar = ({handleDarkMode , mode}) => {


  return (
    <nav className={`navbar-container navbar-${mode} bg-${mode}`}>
      <div className="navbar-content">
        <a href="/home" className="navbar-logo">
          Academic Archive
        </a>

        <div className="navbar-center">
          <ul className="navbar-links">
            <li>
              <a href="/home">Home</a>
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
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ color: mode === 'light' ? 'black' : 'white' }}
            >
              {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
          <StudentProfile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
    