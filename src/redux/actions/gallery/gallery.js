import axios  from '../../config';
import { 
  GET_GALLERY_LIST_SUCCESS,
  GET_GALLERY_LIST_FAIL,
  GET_GALLERY_DETAIL_SUCCESS,
  GET_GALLERY_DETAIL_FAIL
} from './types';

// Obtener lista de galerías
export const get_gallery_list = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:8000/api/gallery/galleries/`);
    dispatch({
      type: GET_GALLERY_LIST_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_GALLERY_LIST_FAIL,
      payload: { error: 'Error al obtener la lista de galerías' }
    });
  }
};

// Obtener detalles de una galería
export const get_gallery_detail = (slug) => async dispatch => {
  try {
    const res = await axios.get(`/galleries/${slug}/`);
    dispatch({
      type: GET_GALLERY_DETAIL_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_GALLERY_DETAIL_FAIL,
      payload: { error: 'Error al obtener los detalles de la galería' }
    });
  }
};
