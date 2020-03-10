// import { ADD_POST } from "./post.types";

import { POST_LOADING, ADD_POST, GET_POSTS } from "./post.types";

const initialState = {
  posts: [],
  post: {},
  loading: false
}

const postReducer = (state=initialState, action) => {
  switch(action.type) {
    case POST_LOADING:
      return {
        ...state,
        loading: true
      };
    
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload,...state]
      };
    
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

    default:
      return state
  }
}

export default postReducer;