import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/authContext";
import { Loader } from "../../components";
import { loginService } from "../../services";
import { RESET } from "../../helper/constants";

const Login = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { loading, authError } = authState;
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    errormsg: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const encodedToken = localStorage.getItem("encodedToken");

  useEffect(() => {
    encodedToken && navigate("/home");
  }, [encodedToken, navigate]);

  const testCredentials = (e) => {
    e.preventDefault();
    setUserDetails({
      ...userDetails,
      email: "maitreyee@gmail.com",
      password: "mait1234",
      errormsg: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password) {
      loginService(
        {
          email: userDetails.email,
          password: userDetails.password,
        },
        authDispatch
      );
      navigate("/home", { replace: true });
    } else {
      setUserDetails({ ...userDetails, errormsg: "Enter all details" });
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && !authError && (
        <div className="form__container">
          <h3 className="txt-center txt-lg form__container-heading">Login</h3>
          <form className="form__container-content">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-input padding-sm"
              type="email"
              placeholder="Enter your email"
              id="email"
              required
              value={userDetails.email}
              onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  email: e.target.value,
                  errormsg: "",
                });
              }}
            />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="form-input password-container">
              <input
                className=" padding-sm password-input"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Enter your password"
                id="password"
                required
                value={userDetails.password}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                    errormsg: "",
                  });
                }}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setShowPassword((show) => !show);
                }}
                className="password-btn"
              >
                {showPassword ? (
                  <i className="fas fa-eye"></i>
                ) : (
                  <i className="fas fa-eye-slash"></i>
                )}
              </button>
            </div>
            <button
              className="form-btn note-button padding-sm"
              onClick={handleSubmit}
            >
              Login
            </button>
            <button
              className="form-btn modal-btn padding-sm"
              onClick={testCredentials}
            >
              Login using test credentials
            </button>
            <p>
              <Link className="form-link link" to="/signup">
                Create a new account
              </Link>
            </p>
          </form>
          {userDetails.errormsg && <p>{userDetails.errormsg}</p>}
        </div>
      )}
      {!loading && authError && (
        <div className="error__msg">
          <p>
            {authError}
            <Link
              to="/"
              className="link"
              onClick={() => authDispatch({ type: RESET })}
            >
              Please try again
            </Link>
          </p>
        </div>
      )}
    </>
  );
};

export { Login };
