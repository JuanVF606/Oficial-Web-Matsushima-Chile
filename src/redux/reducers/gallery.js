import {
  GET_GALLERY_LIST_SUCCESS,
  GET_GALLERY_LIST_FAIL,
  GET_GALLERY_SUCCESS,
  GET_GALLERY_FAIL,
  GET_GALLERY_LIST_CATEGORIES_SUCCESS,
  GET_GALLERY_LIST_CATEGORIES_FAIL,
  GET_SEARCH_GALLERY_SUCCESS,
  GET_SEARCH_GALLERY_FAIL,
  GET_RELATED_POSTS_SUCCESS,
  GET_RELATED_POSTS_FAIL,
} from "../actions/gallery/types";

const initialState = {
  gallery_list: null,
  gallery_list_category: null,
  filtered_posts: null,
  post: null,
  count: null,
  next: null,
  previous: null,
};

export default function gallery(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_GALLERY_LIST_CATEGORIES_SUCCESS:
      return {
        ...state,
        gallery_list_category: payload.results.posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_GALLERY_LIST_CATEGORIES_FAIL:
      return {
        ...state,
        gallery_list_category: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_GALLERY_LIST_SUCCESS:
      return {
        ...state,
        gallery_list: payload.results.posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_GALLERY_LIST_FAIL:
      return {
        ...state,
        gallery_list: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_GALLERY_SUCCESS:
      return {
        ...state,
        post: payload.post,
      };
    case GET_GALLERY_FAIL:
      return {
        ...state,
        post: null,
      };
    case GET_SEARCH_GALLERY_SUCCESS:
      return {
        ...state,
        filtered_posts: payload.results.filtered_posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_SEARCH_GALLERY_FAIL:
      return {
        ...state,
        filtered_posts: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_RELATED_POSTS_SUCCESS:
      return {
        ...state,
        relatedPosts: payload, // Aquí se espera que payload sea un array de posts relacionados
      };
    case GET_RELATED_POSTS_FAIL:
      return {
        ...state,
        relatedPosts: [], // En caso de falla, establecer como un array vacío
      };
    default:
      return state;
  }
}
