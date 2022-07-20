import "./page-not-found.css";
import { Link } from "react-router-dom";
import { pageNotFound } from "../../asset";

const PageNotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-page-img-container">
        <img
          src={pageNotFound}
          alt="page-not-found"
          className="not-found-img"
        />
      </div>
      <p>
        Oops we coul not find what you were looking for. Go back to{" "}
        <Link to="/">
          <span className="link">home</span>
        </Link>{" "}
        page
      </p>
    </div>
  );
};

export { PageNotFound };
