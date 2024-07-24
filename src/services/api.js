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

export const lastPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/last_post`);

    if (response.status === 200) {
      return response.data.results?.posts || [];
    } else {
      throw new Error('No se pudieron cargar los últimos posts.');
    }
  } catch (err) {
    console.error('Error fetching last posts:', err);
    throw err;
  }
}

// Obtener la lista de categorías
export const fetchCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/categories/`);
  if (!response.ok) {
    throw new Error('Error fetching categories');
  }
  return response.json();
};

// Obtener la lista de galerías
export const fetchGalleries = async () => {
  const response = await fetch(`${API_BASE_URL}/gallery/galleries/`);
  if (!response.ok) {
    throw new Error('Error fetching galleries');
  }
  return response.json();
};

// Obtener detalles de una galería específica
export const fetchGalleryDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/galleries/${id}/`);
  if (!response.ok) {
    throw new Error('Error fetching gallery details');
  }
  return response.json();
};

// Obtener ítems de media de una galería específica
export const fetchGalleryMediaItems = async (id) => {
  const response = await fetch(`${API_BASE_URL}/gallery/galleries/${id}/media-items/`);
  if (!response.ok) {
    throw new Error('Error fetching gallery media items');
  }
  return response.json();
};

// Obtener la lista de ítems de media
export const fetchMediaItems = async () => {
  const response = await fetch(`${API_BASE_URL}/media-items/`);
  if (!response.ok) {
    throw new Error('Error fetching media items');
  }
  return response.json();
};

// Obtener detalles de un ítem de media específico
export const fetchMediaItemDetails = async (id) => {
  const response = await fetch(`${API_BASE_URL}/media-items/${id}/`);
  if (!response.ok) {
    throw new Error('Error fetching media item details');
  }
  return response.json();
};

// Obtener comentarios de un ítem de media específico
export const fetchMediaItemComments = async (mediaId) => {
  const response = await fetch(`${API_BASE_URL}/media-items/${mediaId}/comments/`);
  if (!response.ok) {
    throw new Error('Error fetching media item comments');
  }
  return response.json();
};

// Añadir un nuevo comentario a un ítem de media
export const postMediaItemComment = async (mediaId, commentData) => {
  const response = await fetch(`${API_BASE_URL}/media-items/${mediaId}/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commentData),
  });
  if (!response.ok) {
    throw new Error('Error posting comment');
  }
  return response.json();
};

// Obtener la lista de comentarios
export const fetchComments = async () => {
  const response = await fetch(`${API_BASE_URL}/comments/`);
  if (!response.ok) {
    throw new Error('Error fetching comments');
  }
  return response.json();
};

// Obtener la lista de etiquetas (tags)
export const fetchTags = async () => {
  const response = await fetch(`${API_BASE_URL}/tags/`);
  if (!response.ok) {
    throw new Error('Error fetching tags');
  }
  return response.json();
};

export const fetchGalleryById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/galleries/${id}/`);
  if (!response.ok) {
    throw new Error('Error fetching gallery');
  }
  return response.json();
}