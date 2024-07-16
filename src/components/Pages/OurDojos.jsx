import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero";
import HeroImage from "../../assets/img/Hero_Dojos.jpg";
const OurDojos = () => {
  return <Layout>
    <Hero title="Encuentra el dojo más cercano a ti" subtitle=" y participa en nuestras clases"  heroImage={HeroImage}/>
    <section className="container">
      <h1 className="text-center">Nuestros Dojos</h1>
      <p className="text-center">¡Conoce nuestros dojos y participa en nuestras clases!</p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/400" alt="Dojo 1" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Dojo 1</h3>
              <p className="card-text">Dirección: Calle 123, Santiago</p>
              <p className="card-text">Horario: Lunes a Viernes de 19:00 a 21:00 hrs.</p>
              <a href="/contacto" className="btn btn-primary">Contactar</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/400" alt="Dojo 2" className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">Dojo 2</h3>
              <p className="card-text">Dirección: Avenida 456, Santiago</p>
              <p className="card-text">Horario: Lunes a Viernes de 19:00 a 21:00 hrs.</p>
              <a href="/contacto" className="btn btn-primary">Contactar</a>
            </div>
          </div>
          </div>
</div>
 </section>
  </Layout>;
};

export default OurDojos;
