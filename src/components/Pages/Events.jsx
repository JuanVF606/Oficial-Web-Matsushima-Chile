/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero.jsx";
import Categories from "./../../containers/events/Categories";
import Activities from "../../containers/events/Activities.jsx";
import { get_categories } from "../../redux/actions/categories/categories";
import {
  get_actividades_list,
  get_actividades_list_page,
} from "../../redux/actions/actividades/actividades";
import HeroImage from "../../assets/img/Hero_Actividades.jpg";
import DynamicHelmetProvider from "../../provider/HelmetProvider.jsx";

const Events = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);
  const posts = useSelector((state) => state.actividades.activity_list);
  const count = useSelector((state) => state.actividades.count);
  const next = useSelector((state) => state.actividades.next);
  const previous = useSelector((state) => state.actividades.previous);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(get_categories());
        await dispatch(get_actividades_list());
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <Layout>
      <DynamicHelmetProvider
        title="Calendario de Actividades - IKO Matsushima Chile"
        description="Entérate de las últimas actividades y eventos de IKO Matsushima Chile"
        keywords={"Actividades, Eventos, IKO Matsushima Chile"}
      />

      <Hero
        title={"Revisa nuestras actividades"}
        subtitle="y enterate sobre nuestros examenes de grado, seminarios, torneos y mucho más..."
        heroImage={HeroImage}
      />

      <div className="mt-5 bg-light">
        <Categories categories={categories} />
        <Activities
          categories={categories}
          get_actividades_list_page={get_actividades_list_page}
          posts={posts}
          count={count}
        />
      </div>
    </Layout>
  );
};

export default Events;
