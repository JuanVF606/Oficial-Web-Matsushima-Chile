import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import HeroImage from "../../assets/img/Hero_Nosotros.jpg";
import Leaders from "../../containers/about/Leaders";
import Team from "../../containers/Home/Home_team";
import BranchDojo from "../../containers/about/BranchDojo.jsx";
import DynamicHelmetProvider from "../../provider/HelmetProvider.jsx";

const About = () => {
  return (
    <Layout>
      <DynamicHelmetProvider
        title="Descubre Quiénes Somos - IKO Matsushima Chile"
        description="Explora la historia y el equipo de liderazgo de IKO Matsushima Chile y conoce más sobre nuestra pasión por el Karate Kyokushin."
        keywords="IKO Matsushima Chile, Historia, Líderes, Karate Kyokushin"
      />

      <Hero
        title="Acerca de Nosotros"
        subtitle="Descubre nuestra historia y nuestros líderes"
        heroImage={HeroImage}
      />
      <Leaders />

      <Team title={"Nuestros Directores"} />

      <BranchDojo />
    </Layout>
  );
};

export default About;
