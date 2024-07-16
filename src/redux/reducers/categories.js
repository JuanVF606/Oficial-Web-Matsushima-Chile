import {
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAIL,
} from "../actions/categories/types";

const initialState = {
  categories: null,
  error: null,
};

export default function categories(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload.categories,
        error: null, // Limpiar el error en caso de éxito
      };
    case GET_CATEGORIES_FAIL:
      return {
        ...state,
        categories: null,
        error: payload.error || 'Error desconocido',
      };
    default:
      return state;
  }
}
