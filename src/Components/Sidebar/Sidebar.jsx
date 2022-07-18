import "./sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = ({ classtemplate }) => {
  return (
    <>
      <ul className={`lst-container stacked-lst ${classtemplate}`}>
        <NavLink className="lst" to="/home">
          Notes
        </NavLink>
        <NavLink className="lst" to="/archive">
          Archive
        </NavLink>
        <NavLink className="lst" to="/trash">
          Trash
        </NavLink>
        <NavLink className="lst" to="/logout">
          Logout
        </NavLink>
      </ul>
    </>
  );
};

export { Sidebar };
