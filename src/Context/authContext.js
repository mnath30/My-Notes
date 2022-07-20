import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initalState = {
  loading: false,
  encodedToken: localStorage.getItem("encodedToken")
    ? localStorage.getItem("encodedToken")
    : "",
  fullname: localStorage.getItem("fullname")
    ? localStorage.getItem("fullname")
    : "",
  authError: "",
};

const AuthContext = createContext(initalState);
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initalState);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
