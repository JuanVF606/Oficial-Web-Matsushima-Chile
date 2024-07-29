import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import routesAndLinks from '../../Routes/index';
import logo from "../../../assets/img/MatsushimaChile-Logo.png"; // Asegúrate de tener el logo en tu directorio de imágenes

const Navbar = () => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${
        isSticky ? "sticky-top shadow-sm" : ""
      }`}
    >
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
            {routesAndLinks.map((link, index) => (
              link.title && (
                <li key={index} className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === link.path ? "active" : ""
                    }`}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
