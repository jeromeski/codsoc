import { TEST_DISPATCH } from "./auth.types";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
}

const authReducer = (state=INITIAL_STATE, actions) => {
  switch(actions.type) {
    case TEST_DISPATCH: 
      return {
        ...state,
        user: actions.payload
      }

    default: return state
  }
}

export default authReducer;