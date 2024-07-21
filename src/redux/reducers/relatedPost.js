import {
  FETCH_RELATED_POSTS_REQUEST,
  FETCH_RELATED_POSTS_SUCCESS,
  FETCH_RELATED_POSTS_FAILURE,
} from '../actions/blog/types';

const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const relatedPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RELATED_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RELATED_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_RELATED_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default relatedPostsReducer;
