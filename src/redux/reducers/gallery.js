import {
  GET_GALLERY_LIST_SUCCESS,
  GET_GALLERY_LIST_FAIL,
  GET_GALLERY_DETAIL_SUCCESS,
  GET_GALLERY_DETAIL_FAIL
} from '../actions/gallery/types';

const initialState = {
  galleries: [],
  gallery: null,
  loading: true,
  error: null
};

const galleryReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_GALLERY_LIST_SUCCESS:
      return {
        ...state,
        galleries: payload,
        loading: false
      };
    case GET_GALLERY_LIST_FAIL:
      return {
        ...state,
        error: payload.error,
        loading: false
      };
    case GET_GALLERY_DETAIL_SUCCESS:
      return {
        ...state,
        gallery: payload,
        loading: false
      };
    case GET_GALLERY_DETAIL_FAIL:
      return {
        ...state,
        error: payload.error,
        loading: false
      };
    default:
      return state;
  }
};

export default galleryReducer;
