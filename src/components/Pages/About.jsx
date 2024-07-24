import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import HeroImage from "../../assets/img/Hero_Nosotros.jpg";
import Leaders from "../../containers/about/Leaders";
import Team from "../../containers/Home/Home_team";
import BranchDojo from "../../containers/about/BranchDojo.jsx";

const About = () => {
  return (
    <Layout>
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
