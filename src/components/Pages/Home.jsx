import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../../containers/Home/Hero";
import Team from "../../containers/Home/Home_team";
import LatestNews from "../../containers/Home/LatestNews";
import UpcomingEvents from "../../containers/Home/UpcomingEvents";
import Achievements from "../../containers/Home/Achievements";
import Gallery from "../../containers/Home/Gallery";
import ContactAndSocial from "../../containers/Home/ContactAndSocial";
import SuccessStories from "../../containers/Home/SuccessStories";
import Blog from "../../containers/Home/Blog";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <Layout>
      <Hero />

      <Team />

      <div className="container mt-5">
        <LatestNews />
      </div>

        <UpcomingEvents />

      <Achievements />

      <Gallery />

      <Blog />

      <section className="cta-container py-5 text-center">
        <h2 className="mb-4">¡Se parte de la organización!</h2>
        <p className="mb-4">
          Participa en nuestras clases y eventos. ¡Estamos esperando por ti!
        </p>
        <Button href="/signup" variant="primary">
          Unete Ahora
        </Button>
      </section>

      <SuccessStories />


      <ContactAndSocial />
    </Layout>
  );
};

export default Home;
