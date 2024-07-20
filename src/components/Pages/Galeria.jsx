import React from 'react'
import Layout from '../Layout/Layout'
import Hero from '../common/Hero'
import HeroGaleria from "../../assets/img/Hero_Galeria.jpg"
import Gallery from '../../containers/gallery/Gallery'
import galleryItems from './../../data/Gallery';
const Galeria = () => {
  return (
    <Layout>

      <Hero title="Revive los mejores momentos" subtitle={"De nuestra participación en las Actividades"} heroImage={HeroGaleria} />

      <Gallery items={galleryItems} />
    </Layout>
  )
}

export default Galeria