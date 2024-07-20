import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NoticiasCat = ({ categories }) => {
  const { pathname } = useLocation();
  const currentCategory = pathname.split("/").pop();

  const isActiveCategory = (slug) => currentCategory === slug;
  const isAllCategoriesActive = pathname === "/noticias";

  return (
    <div className="noticias-cat-container">
      <nav className="noticias-cat-nav" aria-label="Categorías de noticias">
        <Link
          to="/noticias"
          className={`noticias-cat-link ${
            isAllCategoriesActive ? "active" : ""
          }`}
          aria-current={isAllCategoriesActive ? "page" : undefined}
          aria-label="Todas las categorías"
        >
          Todas
        </Link>

        {categories &&
          categories.map((category) => (
            <Link
              key={category.id}
              to={`/noticias/categoria/${category.slug}`}
              className={`noticias-cat-link ${
                isActiveCategory(category.slug) ? "active" : ""
              }`}
              aria-current={
                isActiveCategory(category.slug) ? "page" : undefined
              }
              aria-label={`Categoría ${category.name}`}
            >
              {category.name}
            </Link>
          ))}
      </nav>
    </div>
  );
};

NoticiasCat.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NoticiasCat;
