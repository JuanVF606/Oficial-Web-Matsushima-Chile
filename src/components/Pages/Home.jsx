import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../containers/Home/Hero";
import Team from "../../containers/Home/Home_team";
import LatestNews from "../../containers/Home/LatestNews";
import UpcomingEvents from "../../containers/Home/UpcomingEvents";
import Achievements from "../../containers/Home/Achievements";
import Gallery from "../../containers/Home/Gallery";
import ContactAndSocial from "../../containers/Home/ContactAndSocial";
import Banner from "../common/Banners/Banner";

const Home = () => {
  return (
    <Layout>
      <Hero />
 
      <Team title={" Conoce a nuestros  Directores de IKO Matsushima Chile"} />

      <Achievements />


      <UpcomingEvents />





      <LatestNews />
      <Banner 
        title="Entrena con nosotros"
        description="¡Busca tu Dojo más cercano y comienza a entrenar con nosotros!"
        href="/nuestros-dojos"
        action="Encuentra tu Dojo
        "
      />

      <ContactAndSocial />
    </Layout>
  );
};

export default Home;
