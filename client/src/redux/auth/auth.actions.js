import axios from "axios";
import { GET_ERRORS } from "../error/error.types";
import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from "../async/async.types";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from 'jwt-decode'
import { SET_CURRENT_USER } from "./auth.types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  dispatch({
    type: ASYNC_ACTION_START
  });
  axios
    .post("/api/users/register", userData)
    .then(res => {
      dispatch({
        type: ASYNC_ACTION_FINISH
      });
      history.push("./login");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
      dispatch({
        type: ASYNC_ACTION_FINISH
      });
    });
};

// Login - Get User Token

export const loginUser = (userData) => dispatch => {
  dispatch({
    type: ASYNC_ACTION_START
  });
  axios
    .post("/api/users/login", userData)
    .then(res => {
      dispatch({
        type: ASYNC_ACTION_FINISH
      });
      // Setup the Save to localStorage
      const { token } = res.data;
      // Set token to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
      dispatch({
        type: ASYNC_ACTION_FINISH
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
