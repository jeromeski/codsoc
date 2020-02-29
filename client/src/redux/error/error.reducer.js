import { GET_ERRORS } from "../error/error.types";


const INITIAL_STATE = {}

const errorReducer = (state=INITIAL_STATE, actions) => {
  switch(actions.type) {
    case GET_ERRORS: 
      return actions.payload
    default: return state
  }
}

export default errorReducer;