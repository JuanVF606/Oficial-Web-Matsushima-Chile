import React from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import HeroGaleria from "../../assets/img/Hero_Galeria.jpg";
import Gallery from "../../containers/gallery/Gallery";
import galleryItems from "./../../data/Gallery";
import DynamicHelmetProvider from "../../provider/HelmetProvider";
const Galeria = () => {
  return (
    <Layout>
      <DynamicHelmetProvider
        title="Revive Nuestros Momentos - Galería IKO Matsushima Chile"
        description="Disfruta de una selección de imágenes y recuerdos de nuestras participaciones en eventos y actividades."
        keywords="Galería, IKO Matsushima Chile, Actividades, Eventos, Imágenes, Recuerdos"
      />

      <Hero
        title="Revive los mejores momentos"
        subtitle={"De nuestra participación en las Actividades"}
        heroImage={HeroGaleria}
      />

      <Gallery items={galleryItems} />
    </Layout>
  );
};

export default Galeria;
