import React from "react";
import moment from "moment";
import "moment/locale/es";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ImageDef from "../../assets/img/Hero_notice.jpg";

const Noticia = ({ posts }) => {
  // Verificar si 'posts' es un array y no está vacío
  if (!Array.isArray(posts) || posts.length === 0) {
    return <div className="noticia-placeholder">Noticia no disponible</div>;
  }

  // Usar el primer elemento del array 'posts'
  const post = posts[0];

  const {
    title = "Título no disponible",
    thumbnail = ImageDef,
    category = { name: "Categoría no disponible" },
    published = "Fecha no disponible",
    description = "Descripción no disponible",
    slug = "",
  } = post;

  const formattedDate = moment(published).isValid()
    ? moment(published).format("DD [de] MMMM [del] YYYY")
    : "Fecha no disponible";
  const shortDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <div className="noticia">
      <img
        src={thumbnail}
        alt={title}
        className="noticia-image"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = ImageDef;
        }}
      />
      <div className="noticia-content">
        <h3 className="noticia-title">{title}</h3>
        <p className="noticia-category">
          <strong>Categoría:</strong> {category.name}
        </p>
        <p className="noticia-date">
          <strong>Publicado el:</strong> {formattedDate}
        </p>
        <p className="noticia-description">{shortDescription}</p>
        <Link to={`/noticias/${slug}`} className="noticia-link">
          Leer más
        </Link>
      </div>
    </div>
  );
};

Noticia.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      category: PropTypes.shape({
        name: PropTypes.string,
      }),
      published: PropTypes.string,
      description: PropTypes.string,
      slug: PropTypes.string,
    })
  ).isRequired,
};

export default Noticia;
