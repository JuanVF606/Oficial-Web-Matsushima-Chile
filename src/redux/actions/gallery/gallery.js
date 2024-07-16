import axios from "axios";
import {
  GET_GALLERY_LIST_SUCCESS,
  GET_GALLERY_LIST_FAIL,
  GET_GALLERY_SUCCESS,
  GET_GALLERY_FAIL,
  GET_GALLERY_LIST_CATEGORIES_SUCCESS,
  GET_GALLERY_LIST_CATEGORIES_FAIL,
  GET_AUTHOR_GALLERY_LIST_SUCCESS,
  GET_AUTHOR_GALLERY_LIST_FAIL,
  START_LOADING,
  STOP_LOADING,
} from "./types";

export const get_author_gallery_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/gallery/author_list`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHOR_GALLERY_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_AUTHOR_GALLERY_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHOR_GALLERY_LIST_FAIL,
    });
  }
};

export const get_author_gallery_list_page = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/gallery/author_list?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHOR_GALLERY_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_AUTHOR_GALLERY_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHOR_GALLERY_LIST_FAIL,
    });
  }
};

// Ejemplo de manejo de carga y errores en una acción asincrónica
export const get_gallery_list = (limit = null) =>
  async (dispatch) => {
    dispatch({ type: START_LOADING });

    try {
      // Añadir el parámetro 'limit' a la URL si se proporciona
      const apiUrl = limit
        ? `http://localhost:8000/api/gallery/list?limit=${limit}`
        : `http://localhost:8000/api/gallery/list`;

      const res = await axios.get(apiUrl);

      dispatch({
        type: GET_GALLERY_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error fetching blog list:", error.message);
      dispatch({
        type: GET_GALLERY_LIST_FAIL,
        error: "Failed to fetch blog list. Please try again later.",
      });
    } finally {
      dispatch({ type: STOP_LOADING });
    }
};


export const get_GALLERY_list_page = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/gallery/list?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_GALLERY_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_GALLERY_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_GALLERY_LIST_FAIL,
    });
  }
};

export const get_GALLERY_list_category = (slug) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/gallery/by_category?slug=${slug}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_GALLERY_LIST_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_GALLERY_LIST_CATEGORIES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_GALLERY_LIST_CATEGORIES_FAIL,
    });
  }
};

export const get_GALLERY_list_category_page = (slug, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/gallery/by_category?slug=${slug}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_GALLERY_LIST_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_GALLERY_LIST_CATEGORIES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_GALLERY_LIST_CATEGORIES_FAIL,
    });
  }
};

export const get_gallery = (slug) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/gallery/detail/${slug}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_GALLERY_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_GALLERY_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_GALLERY_FAIL,
    });
  }
};
