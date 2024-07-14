import axios from "axios";
import {
  GET_ACTIVIDADES_LIST_SUCCESS,
  GET_ACTIVIDADES_LIST_FAIL,
  GET_ACTIVIDADES_LIST_CATEGORIES_SUCCESS,
  GET_ACTIVIDADES_LIST_CATEGORIES_FAIL,
  GET_AUTHOR_ACTIVIDADES_LIST_SUCCESS,
  GET_AUTHOR_ACTIVIDADES_LIST_FAIL,
  START_LOADING,
  STOP_LOADING,
} from "./types.js";

export const get_author_actividades_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/actividades/author_list`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHOR_ACTIVIDADES_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_AUTHOR_ACTIVIDADES_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHOR_ACTIVIDADES_LIST_FAIL,
    });
  }
};

export const get_author_actividades_list_page = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/actividades/author_list?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHOR_ACTIVIDADES_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_AUTHOR_ACTIVIDADES_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHOR_ACTIVIDADES_LIST_FAIL,
    });
  }
};

// Ejemplo de manejo de carga y errores en una acción asincrónica
export const get_actividades_list =
  (limit = null) =>
  async (dispatch) => {
    dispatch({ type: START_LOADING });

    try {
      const apiUrl = limit
        ? `http://localhost:8000/api/actividades/list?limit=${limit}`
        : `http://localhost:8000/api/actividades/list`;

      const res = await axios.get(apiUrl);

      // Ordenar los datos por fecha en orden ascendente (de más antiguo a más reciente)
      const sortedData = res.data.results.posts.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      dispatch({
        type: GET_ACTIVIDADES_LIST_SUCCESS,
        payload: {
          ...res.data,
          results: {
            ...res.data.results,
            posts: sortedData,
          },
        },
      });
    } catch (error) {
      console.error("Error fetching actividades list:", error.message);
      dispatch({
        type: GET_ACTIVIDADES_LIST_FAIL,
        error: "Failed to fetch actividades list. Please try again later.",
      });
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  };

export const get_actividades_list_page = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/actividades/list?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ACTIVIDADES_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ACTIVIDADES_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ACTIVIDADES_LIST_FAIL,
    });
  }
};

export const get_actividades_list_category = (slug) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/actividades/by_category?slug=${slug}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_ACTIVIDADES_LIST_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_ACTIVIDADES_LIST_CATEGORIES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_ACTIVIDADES_LIST_CATEGORIES_FAIL,
    });
  }
};

export const get_actividades_list_category_page =
  (slug, page) => async (dispatch) => {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `http://localhost:8000/api/actividades/by_category?slug=${slug}&p=${page}`,
        config
      );

      if (res.status === 200) {
        dispatch({
          type: GET_ACTIVIDADES_LIST_CATEGORIES_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: GET_ACTIVIDADES_LIST_CATEGORIES_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: GET_ACTIVIDADES_LIST_CATEGORIES_FAIL,
      });
    }
  };
