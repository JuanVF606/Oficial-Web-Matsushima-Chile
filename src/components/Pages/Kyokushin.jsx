import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import Heroimage from "../../assets/img/Hero_Actividades.jpg";
import DojoInfo from "../../containers/Kyokushin/DojoInfo.jsx";
const Kyokushin = () => {
  return (
    <Layout>
      <Hero
        title="Dojo Kun y Reglas del Dojo" 
        subtitle={"Conoce y aprende las reglas del Dojo Kun, el código de ética y conducta que rige a los practicantes de Kyokushin."}
        heroImage={Heroimage}
      />

      <DojoInfo />
    </Layout>
  );
};

export default Kyokushin;
