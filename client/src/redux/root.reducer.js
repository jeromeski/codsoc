import { combineReducers } from "redux";
import errorReducer from './error/error.reducer';
import authReducer from "./auth/auth.reducer";
import asyncReducer from "./async/asyncReducer";
import profileReducer from "./profile/profile.reducer";


export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  isLoading: asyncReducer,
  profile: profileReducer

})