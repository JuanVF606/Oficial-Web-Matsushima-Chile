import axios from "axios";
import {
  GET_BLOG_LIST_SUCCESS,
  GET_BLOG_LIST_FAIL,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAIL,
  GET_BLOG_LIST_CATEGORIES_SUCCESS,
  GET_BLOG_LIST_CATEGORIES_FAIL,
  GET_SEARCH_BLOG_SUCCESS,
  GET_SEARCH_BLOG_FAIL,
  GET_AUTHOR_BLOG_LIST_SUCCESS,
  GET_AUTHOR_BLOG_LIST_FAIL,
  START_LOADING,
  STOP_LOADING,
  GET_RELATED_POSTS_SUCCESS,
  GET_RELATED_POSTS_FAIL,
} from "./types";

export const get_author_blog_list = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/author_list`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHOR_BLOG_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_AUTHOR_BLOG_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHOR_BLOG_LIST_FAIL,
    });
  }
};

export const get_author_blog_list_page = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `JWT ${localStorage.getItem("access")}`,
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/author_list?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_AUTHOR_BLOG_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_AUTHOR_BLOG_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_AUTHOR_BLOG_LIST_FAIL,
    });
  }
};

// Ejemplo de manejo de carga y errores en una acción asincrónica
export const get_blog_list = (limit = null) =>
  async (dispatch) => {
    dispatch({ type: START_LOADING });

    try {
      // Añadir el parámetro 'limit' a la URL si se proporciona
      const apiUrl = limit
        ? `http://localhost:8000/api/blog/list?limit=${limit}`
        : `http://localhost:8000/api/blog/list`;

      const res = await axios.get(apiUrl);

      dispatch({
        type: GET_BLOG_LIST_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.error("Error fetching blog list:", error.message);
      dispatch({
        type: GET_BLOG_LIST_FAIL,
        error: "Failed to fetch blog list. Please try again later.",
      });
    } finally {
      dispatch({ type: STOP_LOADING });
    }
};


export const get_blog_list_page = (page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/list?p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BLOG_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_LIST_FAIL,
    });
  }
};

export const get_blog_list_category = (slug) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/by_category?slug=${slug}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BLOG_LIST_CATEGORIES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_LIST_CATEGORIES_FAIL,
    });
  }
};

export const get_blog_list_category_page = (slug, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/by_category?slug=${slug}&p=${page}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_LIST_CATEGORIES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BLOG_LIST_CATEGORIES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_LIST_CATEGORIES_FAIL,
    });
  }
};

export const get_blog = (slug) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/detail/${slug}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BLOG_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_FAIL,
    });
  }
};

export const search_blog = (search_term) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/search?s=${search_term}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_BLOG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_BLOG_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_BLOG_FAIL,
    });
  }
};

export const search_blog_page = (search_term, page) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/search?p=${page}&s=${search_term}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_SEARCH_BLOG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_SEARCH_BLOG_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_SEARCH_BLOG_FAIL,
    });
  }
};

export const get_popular_blogs = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/popular`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BLOG_LIST_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BLOG_LIST_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BLOG_LIST_FAIL,
    });
  }
}

// Tu acción en Redux (reducer.js)
export const get_related_posts = (postId, limit) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/blog/related/${postId}?limit=${limit}`
    );

    console.log("Related Posts Response:", res.data.relatedPosts);

    dispatch({
      type: GET_RELATED_POSTS_SUCCESS,
      payload: res.data.relatedPosts,
    });
  } catch (err) {
    console.error("Error fetching related posts:", err);

    dispatch({
      type: GET_RELATED_POSTS_FAIL,
    });
  }
};
