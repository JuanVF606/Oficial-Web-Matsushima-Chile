import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import Dojos from "../../containers/OurDojos/Dojos";
import HeroImage from "../../assets/img/Hero_Dojos.jpg";
import DynamicHelmetProvider from "../../provider/HelmetProvider";
const OurDojos = () => {
  return (
    <Layout>
      <DynamicHelmetProvider
        title="Nuestros Dojos - Únete a IKO Matsushima Chile"
        description="Encuentra tu dojo local en IKO Matsushima Chile y comienza a entrenar con nosotros. Participa en nuestras clases de Karate Kyokushin."
        keywords="Dojos, IKO Matsushima Chile, Karate Kyokushin, Entrenamiento, Clases"
      />

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
