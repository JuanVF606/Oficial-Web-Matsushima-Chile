import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/img/logo.jpg'; // Asegúrate de que el logo sea un círculo

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <div className="not-found-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="not-found-logo" />
      </div>
      <h1 className="not-found-title">404</h1>
      <p className="not-found-subtitle">¡La página que buscas no existe!</p>
      <div className="not-found-buttons">
        <Link to="/" className="not-found-button">Volver al inicio</Link>
        <button onClick={handleGoBack} className="not-found-button">Volver a la página anterior</button>
      </div>
    </div>
  );
};

export default NotFound;
