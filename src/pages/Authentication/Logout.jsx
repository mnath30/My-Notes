import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { LOGOUT, AUTH_LOADING } from "../../helper/constants";
import { useAuth } from "../../Context";
import { Loader } from "../../components";

const Logout = () => {
  const { authState, authDispatch } = useAuth();
  const { loading } = authState;
  const navigate = useNavigate();

  const clearLoginDetails = () => {
    authDispatch({ type: AUTH_LOADING });
    setTimeout(() => {
      authDispatch({ type: LOGOUT });
      navigate("/");
    }, 1000);
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <div className="form__container">
          <h3 className="form__container-heading">Logout</h3>
          <p>Are you sure you want to leave?</p>
          <div className="flex form__container-footer">
            <button className="modal-btn btn" onClick={clearLoginDetails}>
              Yes
            </button>
            <Link to="/home">
              <button className="note-button btn">No</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export { Logout };
