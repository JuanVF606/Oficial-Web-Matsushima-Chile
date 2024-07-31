import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import Heroimage from "../../assets/img/Hero_Actividades.jpg";
import DojoInfo from "../../containers/Kyokushin/DojoInfo.jsx";
import DynamicHelmetProvider from "../../provider/HelmetProvider.jsx";
const Kyokushin = () => {
  return (
    <Layout>
      <DynamicHelmetProvider
        title="Guía de Kyokushin - Reglas del Dojo y Dojo Kun en IKO Matsushima Chile"
        description="Explora la guía completa sobre las reglas del Dojo y el Dojo Kun en el contexto del Kyokushin en IKO Matsushima Chile."
        keywords="Kyokushin, Reglas del Dojo, Dojo Kun, IKO Matsushima Chile"
      />

      <Hero
        title="Dojo Kun y Reglas del Dojo"
        subtitle={
          "Conoce y aprende las reglas del Dojo y el Dojo Kun que rigen en IKO Matsushima Chile"
        }
        heroImage={Heroimage}
      />

      <DojoInfo />
    </Layout>
  );
};

export default Kyokushin;
