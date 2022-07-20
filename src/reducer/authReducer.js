import {
  LOGIN,
  AUTH_LOADING,
  AUTH_ERROR,
  SIGNUP,
  LOGOUT,
  RESET,
} from "../helper/constants";

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOADING:
      return { ...state, loading: true, authError: "" };
    case LOGIN:
      localStorage.setItem("encodedToken", action.payload.encodedToken);
      localStorage.setItem("fullname", action.payload.foundUser.fullname);
      return {
        ...state,
        encodedToken: action.payload.encodedToken,
        fullname: action.payload.foundUser.fullname,
        loading: false,
        authError: "",
      };
    case SIGNUP:
      localStorage.setItem("encodedToken", action.payload.encodedToken);
      localStorage.setItem(
        "fullname",
        action.payload.createdUser?.userdetails.fullname
      );
      return {
        ...state,
        encodedToken: action.payload.encodedToken,
        fullname: action.payload.createdUser?.userdetails.fullname,
        loading: false,
        authError: "",
      };
    case LOGOUT:
      localStorage.removeItem("encodedToken");
      localStorage.removeItem("username");
      return { ...state, loading: false, encodedToken: "", fullname: "" };
    case AUTH_ERROR:
      return { ...state, authError: action.payload, loading: false };
    case RESET:
      return {
        ...state,
        authError: "",
        loading: false,
        encodedToken: "",
        fullname: "",
      };
    default:
      return { ...state };
  }
};

export { authReducer };
