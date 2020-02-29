import { combineReducers } from "redux";
import errorReducer from './error/error.reducer';
import authReducer from "./auth/auth.reducer";
import asyncReducer from "./async/asyncReducer";


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  isLoading: asyncReducer
})