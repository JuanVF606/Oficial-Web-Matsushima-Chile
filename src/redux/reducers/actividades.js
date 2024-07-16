import {
  GET_ACTIVIDADES_LIST_SUCCESS,
  GET_ACTIVIDADES_LIST_FAIL,
  GET_ACTIVIDADES_SUCCESS,
  GET_ACTIVIDADES_FAIL,
  GET_ACTIVIDADES_LIST_CATEGORIES_SUCCESS,
  GET_ACTIVIDADES_LIST_CATEGORIES_FAIL,
} from "../actions/actividades/types";

const initialState = {
  activity_list: null,
  activity_list_category: null,
  post: null,
  count: null,
  next: null,
  previous: null,
};

export default function actividades(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ACTIVIDADES_LIST_CATEGORIES_SUCCESS:
      return {
        ...state,
        activity_list_category: payload.results.posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ACTIVIDADES_LIST_CATEGORIES_FAIL:
      return {
        ...state,
        activity_list_category: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ACTIVIDADES_LIST_SUCCESS:
      return {
        ...state,
        activity_list: payload.results.posts,
        count: payload.count,
        next: payload.next,
        previous: payload.previous,
      };
    case GET_ACTIVIDADES_LIST_FAIL:
      return {
        ...state,
        activity_list: null,
        count: null,
        next: null,
        previous: null,
      };
    case GET_ACTIVIDADES_SUCCESS:
      return {
        ...state,
        post: payload.post,
      };
    case GET_ACTIVIDADES_FAIL:
      return {
        ...state,
        post: null,
      };
    default:
      return state;
  }
}
