import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Categories({ categories }) {
  const location = useLocation();

  return (
    <div className="category-controls text-center mb-5">
      <Link
        to="/actividades"
        className={`category-link ${
          location.pathname === "/actividades"
            ? "active-category selected-category"
            : ""
        }`}
      >
        Todo
      </Link>
      {categories &&
        categories.map((category, index) => (
          <Link
            to={`/actividades/categoria/${category.slug}`}
            className={`category-link ${
              location.pathname === `/actividades/categoria/${category.slug}`
                ? "active-category selected-category"
                : ""
            }`}
            key={index}
            data-filter={category.id}
          >
            {category.name}
          </Link>
        ))}
    </div>
  );
}
