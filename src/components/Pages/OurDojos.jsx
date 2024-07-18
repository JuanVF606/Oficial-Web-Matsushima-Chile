import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero";
import Dojos from "../../containers/OurDojos/Dojos";
import HeroImage from "../../assets/img/Hero_Dojos.jpg";
const OurDojos = () => {
  return (
    <Layout>
      <Hero
        title="Encuentra el dojo más cercano a ti"
        subtitle=" y participa en nuestras clases"
        heroImage={HeroImage}
      />
    
      <Dojos />

    </Layout>
  );
};

export default OurDojos;
