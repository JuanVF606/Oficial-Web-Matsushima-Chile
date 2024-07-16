import {
  GET_DOJO_SUCCESS,
  GET_DOJO_FAIL,
} from "../actions/dojos/types";

const initialState = {
  dojo_list: null,
  post: null,
  next: null,
  previous: null,
  error: null,
};

export default function dojos(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DOJO_SUCCESS:
      return {
        ...state,
        dojo_list: payload.dojo,
        error: null, // Limpiar el error en caso de éxito
      };
    case GET_DOJO_FAIL:
      return {
        ...state,
        dojo_list: null,
        error: payload.error || 'Error desconocido',
      };
    default:
      return state;
  }
}