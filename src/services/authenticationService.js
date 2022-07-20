import axios from "axios";
import { LOGIN, AUTH_LOADING, AUTH_ERROR, SIGNUP } from "../helper/constants";

const loginService = async (userdetails, dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING });
    const response = await axios.post("/api/auth/login", userdetails);
    if (response.status === 200) {
      dispatch({ type: LOGIN, payload: response.data });
    }
  } catch (error) {
    if (error.response.status === 404 || error.response.status === 401) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.errors[0],
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: "There was some error in processing your request",
      });
    }
  }
};

const signupService = async (userdetails, dispatch) => {
  try {
    dispatch({ type: AUTH_LOADING });
    const response = await axios.post(`/api/auth/signup`, {
      userdetails,
    });
    if (response.status === 201) {
      dispatch({ type: SIGNUP, payload: response.data });
    }
  } catch (error) {
    if (error.response.status === 422) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.errors[0],
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: "There was some error in processing your request",
      });
    }
  }
};

export { loginService, signupService };
