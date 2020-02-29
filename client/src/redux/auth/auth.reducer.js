import { SET_CURRENT_USER } from "./auth.types";
import isEmpty from "../../validation/is-empty";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
