import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage1 from '../../assets/img/Pictures-Home/fondo.webp';  // Imágenes de fondo
import heroImage2 from '../../assets/img/Pictures-Home/fondo1.webp';
import heroImage3 from '../../assets/img/Pictures-Home/fondo2.webp';

const images = [heroImage1, heroImage2, heroImage3]; // Array con imágenes

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(images[0]); // Estado para la imagen actual

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length; // Cambia al siguiente índice
        return images[nextIndex];
      });
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);

  return (
    <section 
      className="hero d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden text-white" 
      style={{ 
        backgroundImage: `url(${currentImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '70vh',
        color: '#fff',
        backgroundAttachment: 'fixed',  // Agrega el efecto parallax
      }}
    >
      <div className="hero-overlay bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center py-5 px-4">
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold mb-4 text-shadow">Bienvenido a IKO Matsushima Chile</h1>
          <p className="lead mb-4 text-shadow">¡Donde el karate se convierte en una forma de vida!</p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5">
            <Link 
              to="/nuestros-dojos" 
              className="btn btn-light btn-lg px-4 py-2 rounded-pill shadow-lg hover-opacity-80 btn-animated btn-about"
            >
              Entrena con Nosotros
            </Link>
          </div>
        </div>
        <div className="container text-center mt-4 mt-md-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-chilean-white text-dark rounded-3 shadow-lg hover-transform">
                <h2 className="display-4 fw-bold mb-2">25+</h2>
                <p className="lead mb-0">Años de Experiencia</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-chilean-blue text-white rounded-3 shadow-lg hover-transform">
                <h2 className="display-4 fw-bold mb-2">500+</h2>
                <p className="lead mb-0">Miembros Activos</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-chilean-red text-white rounded-3 shadow-lg hover-transform">
                <h2 className="display-4 fw-bold mb-2">30+</h2>
                <p className="lead mb-0">Eventos Realizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
