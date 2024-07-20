import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/img/MatsushimaChile-Logo.png"; // Asegúrate de tener el logo en tu directorio de imágenes

const links = [
  { to: "/", title: "Bienvenida" },
  { to: "/quienes-somos", title: "Nosotros" },
  { to: "/nuestros-dojos", title: "Dojos" },
  { to: "/actividades", title: "Actividades" },
  { to: "/galeria", title: "Galeria" },
  { to: "/noticias", title: "Noticias y Novedades" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="IKO Matsushima Chile" className="karate-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {links.map((link, index) => (
              <li key={index} className="nav-item dropdown">
                <Link
                  className={`nav-link ${
                    location.pathname === link.to ? "active" : ""
                  }`}
                  to={link.to}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
