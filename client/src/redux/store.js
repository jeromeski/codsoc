import { createStore, applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./root.reducer";

const INITIAL_STATE = {};

const middlewares = [thunk];

const composedEnhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
);

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composedEnhancer
);

export default store;
