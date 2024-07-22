// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchRelatedPosts = async (categorySlug, currentPostSlug) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/blog/by_category`,
      {
        params: {
          slug: categorySlug,
          exclude: currentPostSlug,
        }
      }
    );

    if (response.status === 200) {
      return response.data.results?.posts.slice(0, 3) || [];
    } else {
      throw new Error('No se pudieron cargar los posts relacionados.');
    }
  } catch (err) {
    console.error('Error fetching related posts:', err);
    throw err;
  }
};
