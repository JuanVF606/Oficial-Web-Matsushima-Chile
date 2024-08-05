import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import qrimage from "../../assets/img/matsushimachile_qr.png";

const PostSidebar = ({ categories, postUrl }) => (
  <div className="sidebar">
    {/* Categorías */}
    <div className="widget card border-light shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title">Categorías</h2>
        <ul className="list-unstyled">
          <li className="mb-1">
            <Link to="/noticias" className="text-decoration-none">
              Todas las Categorías
            </Link>
          </li>
          {categories?.map((category, index) => (
            <li key={index} className="mb-1">
              <Link
                to={`/noticias/categoria/${category.slug}`}
                className="text-decoration-none"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Compartir */}
    <div className="widget card border-light shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title">Compartir</h2>
        <div className="d-flex justify-content-between">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaFacebookF />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${postUrl}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaXTwitter />
          </a>
          <a
            href={`https://wa.me/?text=${postUrl}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-muted mt-3">
          Comparte este post en tus redes sociales.
        </p>
      </div>
    </div>
    <div className="widget card border-light shadow-sm mb-4">
      <div className="card-body">
        <h2 className="card-title">Síguenos en Instagram</h2>
        <p className="text-muted">
          Escanea el código QR para seguirnos o haz clic en el botón
          de abajo
        </p>

        {/* Insertar imagen de qrimage */}
        <img src={qrimage} alt="QR Code" className="img-fluid mb-3" />

        <Button
          href="https://www.instagram.com/ikomatsushimachile"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary w-100"
        >
          Síguenos
        </Button>
      </div>
    </div>
  </div>
);

export default PostSidebar;
