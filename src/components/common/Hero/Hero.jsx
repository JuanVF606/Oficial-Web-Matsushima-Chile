import React from "react";

const Hero = ({ title, subtitle, heroImage }) => {
  return (
    <section
      className="hero d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "10vh",
        color: "black",
        backgroundAttachment: "fixed", // Agrega el efecto parallax
      }}
    >
      <div className="hero-overlay bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center py-5 px-4">
        <div className="text-center mb-5">
          <h2 className="display-3 fw-bold mb-4 text-shadow">{title}</h2>
          <p className="lead mb-4 text-shadow">{subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
