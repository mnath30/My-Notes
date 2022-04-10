import "./navbar.css";
import { Logo } from "../../asset";
import { useTheme } from "../../Context";
import { setTheme } from "../../helper";
import { Link } from "react-router-dom";

const Navbar = ({ navTemplate }) => {
  const { darkTheme, setDarkTheme } = useTheme();
  return (
    <nav className={`navigation  ${navTemplate}`}>
      <Link to="/">
        <div className="nav-brand-logo">
          <img className="nav-img" src={Logo} alt="app-logo" />
        </div>
      </Link>
      <Link to="/">
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
