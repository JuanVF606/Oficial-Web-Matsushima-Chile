import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import HeroImage from "../../assets/img/Hero_Logros.jpg";
import DynamicHelmetProvider from "../../provider/HelmetProvider";
const Achievements = () => {
  return (
    <Layout>
      <DynamicHelmetProvider
        title="Nuestros Logros y Reconocimientos - IKO Matsushima Chile"
        description="Descubre los destacados logros y premios de nuestros estudiantes y profesores en IKO Matsushima Chile. Conoce las historias que nos enorgullecen."
        keywords="Logros, Reconocimientos, IKO Matsushima Chile, Estudiantes, Profesores, Éxitos"
      />

      <Hero
        title="Nuestros logros"
        subtitle="Conoce los logros de nuestros estudiantes y profesores"
        heroImage={HeroImage}
      />

      <section className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <img
                src="https://via.placeholder.com/400"
                alt="Logro 1"
                className="card-img-top"
              />
              <div className="card-body">
                <h3 className="card-title">Logro 1</h3>
                <p className="card-text">Descripción del logro 1</p>
                <a href="/contacto" className="btn btn-primary">
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Achievements;
