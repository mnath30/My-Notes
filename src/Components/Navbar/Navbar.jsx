import "./navbar.css";
import { Logo } from "../../asset";
import { useTheme } from "../../context";
import { setTheme } from "../../helper";
import { Link } from "react-router-dom";

const Navbar = ({ navTemplate, toggleMobileNav }) => {
  const { darkTheme, setDarkTheme } = useTheme();
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <nav className="navigation navigation-bar">
      <span className="mobile-nav" onClick={toggleMobileNav}>
        <i className="fas fa-bars"></i>
      </span>
      <Link to={encodedToken ? "/home" : "/"}>
        <div className="nav-brand-logo">
          <img className="nav-img" src={Logo} alt="app-logo" />
        </div>
      </Link>
      <Link to={encodedToken ? "/home" : "/"}>
        <h3 className="brandname">My Notes</h3>
      </Link>
      <div className="nav-sub-options">
        <ul className="nav-ul">
          <li className="nav-li theme-btn">
            {darkTheme === true ? (
              <button
                className="theme-button"
                onClick={() => setTheme("light", setDarkTheme, darkTheme)}
              >
                <i className="fas fa-sun fa-lg"></i>
              </button>
            ) : (
              <button
                className="theme-button"
                onClick={() => setTheme("dark", setDarkTheme, darkTheme)}
              >
                <i className="fas fa-moon fa-lg"></i>
              </button>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };
