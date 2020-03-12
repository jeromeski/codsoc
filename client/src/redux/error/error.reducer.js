import { GET_ERRORS } from "../error/error.types";
import { CLEAR_ERRORS } from "../post/post.types";


const INITIAL_STATE = {}

const errorReducer = (state=INITIAL_STATE, actions) => {
  switch(actions.type) {
    case GET_ERRORS: 
      return actions.payload

    case CLEAR_ERRORS:
      return {};

    default: return state
  }
}

export default errorReducer;