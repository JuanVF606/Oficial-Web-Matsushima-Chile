/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import Categories from "../../containers/events/Categories";
import HeroImage from "../../assets/img/Hero_Actividades.jpg";
import { get_categories } from "../../redux/actions/categories/categories";
import {
  get_actividades_list_category,
  get_actividades_list_category_page,
} from "../../redux/actions/actividades/actividades";
import { useParams } from "react-router-dom";
import Activities from "../../containers/events/Activities";
import DynamicHelmetProvider from "../../provider/HelmetProvider";

const EventsCategory = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();

  // Access state using useSelector
  const categories = useSelector((state) => state.categories.categories);
  const posts = useSelector((state) => state.actividades.activity_list_category);
  const count = useSelector((state) => state.actividades.count);
  const next = useSelector((state) => state.actividades.next);
  const previous = useSelector((state) => state.actividades.previous);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(get_categories());
        if (slug) {
          await dispatch(get_actividades_list_category(slug));
        } else {
          await dispatch(get_actividades_list_category());
        }
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    fetchData();
  }, [dispatch, slug]);

  return (
    <Layout>
      <DynamicHelmetProvider
        title={`${slug} - Calendario de Actividades - IKO Matsushima Chile`}
        description={`No te pierdas los próximos eventos y actividades sobre ${slug} organizados por IKO Matsushima Chile.`}
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
          post={posts}
          count={count}
          get_activities_by_page={get_actividades_list_category_page}
        />
      </div>
    </Layout>
  );
};

export default EventsCategory;
