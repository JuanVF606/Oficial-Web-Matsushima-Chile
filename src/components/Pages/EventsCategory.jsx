import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero";
import Categories from "../../containers/events/Categories";
const EventsCategory = () => {
  return (
    <Layout>
      <Hero
        title={"Descurbre las Actividades de IKO Matsushima Chile"}
        subtitle="y participa de nuestras actividades de entrenamiento y eventos especiales."
      />
      <Categories />
    </Layout>
  );
};

export default EventsCategory;
