import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { signupService } from "../../services";
import { useAuth } from "../../Context";
import { Loader } from "../../Components";
import { RESET } from "../../helper/constants";

const Signup = () => {
  const navigate = useNavigate();
  const { authState, authDispatch } = useAuth();
  const { loading, authError } = authState;
  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
    password: "",
    errormsg: "",
    showPassword: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const encodedToken = localStorage.getItem("encodedToken");

  useEffect(() => {
    encodedToken && navigate("/home");
  }, [encodedToken, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, password } = userDetails;
    if (email && password && fullname) {
      signupService({ email, password, fullname }, authDispatch);
      navigate("/home", { replace: true });
    } else {
      setUserDetails({ ...userDetails, errormsg: "Enter all fields" });
    }
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && !authError && (
        <div className="form__container">
          <h3 className="form__container-heading">Signup</h3>
          <form className="form__container-content">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              className="form-input padding-sm"
              type="text"
              placeholder="Enter your name"
              id="name"
              required
              value={userDetails.fullname}
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  fullname: e.target.value,
                  errormsg: "",
                })
              }
            />

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
              onChange={(e) =>
                setUserDetails({
                  ...userDetails,
                  email: e.target.value,
                  errormsg: "",
                })
              }
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
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                    errormsg: "",
                  })
                }
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
              Signup
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link className="form-link link" to="/login">
                  Login
                </Link>
              </span>
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

export { Signup };
