import { ASYNC_ACTION_START, ASYNC_ACTION_FINISH } from "./async.types";

const INITIAL_STATE = false

const asyncReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ASYNC_ACTION_START:
      return {
        ...state,
        isLoading: true
      };
    case ASYNC_ACTION_FINISH:
      return {
        ...state,
        isLoading: false
      };
    default: 
    return state
  }
};

export default asyncReducer;