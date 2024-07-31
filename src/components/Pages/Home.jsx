import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../containers/Home/Hero";
import Team from "../../containers/Home/Home_team";
import LatestNews from "../../containers/Home/LatestNews";
import UpcomingEvents from "../../containers/Home/UpcomingEvents";
import Achievements from "../../containers/Home/Achievements";
import ContactAndSocial from "../../containers/Home/ContactAndSocial";
import Banner from "../common/Banners/Banner";
import DynamicHelmetProvider from "../../provider/HelmetProvider";

const Home = () => {
  return (
    <Layout>
      <DynamicHelmetProvider
        title="Bienvenido a IKO Matsushima Chile"
        description="Descubre lo mejor del Karate Kyokushin en IKO Matsushima Chile. Explora nuestro dojo, eventos y más."
        keywords="IKO MATSUSHIMA CHILE, Karate, Kyokushin, IKO Matsushima"
      />

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
