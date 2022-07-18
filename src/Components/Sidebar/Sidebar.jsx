import "./sidebar.css";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "../../asset";

const Sidebar = ({ classtemplate, clickHandler, hideMobileNav, mobileNav }) => {
  const encodedToken = localStorage.getItem("encodedToken");

  return (
    <>
      <ul
        className={`lst-container stacked-lst ${classtemplate}`}
        onClick={clickHandler}
      >
        {mobileNav && (
          <Link to={encodedToken ? "/home" : "/"} onClick={hideMobileNav}>
            <div className="sidebar-logo">
              <img className="nav-img" src={Logo} alt="app-logo" />
              <span className="brandname padding-sm">My Notes</span>
            </div>
          </Link>
        )}
        <NavLink
          className="lst"
          to="/home"
          onClick={mobileNav && hideMobileNav}
        >
          Notes
        </NavLink>
        <NavLink
          className="lst"
          to="/archive"
          onClick={mobileNav && hideMobileNav}
        >
          Archive
        </NavLink>
        <NavLink
          className="lst"
          to="/trash"
          onClick={mobileNav && hideMobileNav}
        >
          Trash
        </NavLink>
        <NavLink
          className="lst"
          to="/logout"
          onClick={mobileNav && hideMobileNav}
        >
          Logout
        </NavLink>
      </ul>
    </>
  );
};

export { Sidebar };
