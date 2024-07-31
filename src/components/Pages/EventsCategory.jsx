import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import Categories from "../../containers/events/Categories";
import HeroImage from "../../assets/img/Hero_Actividades.jpg";
import { connect } from "react-redux";
import { get_categories } from "../../redux/actions/categories/categories";
import {
  get_actividades_list_category,
  get_actividades_list_category_page,
} from "../../redux/actions/actividades/actividades";
import { useParams } from "react-router-dom";
import Activities from "../../containers/events/Activities";
import DynamicHelmetProvider from "../../provider/HelmetProvider";
const EventsCategory = ({
  get_categories,
  categories,
  get_actividades_list_category,
  get_actividades_list_category_page,
  posts,
  count,
  next,
  previous,
}) => {
  const { slug } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        await get_categories();
        if (slug) {
          await get_actividades_list_category(slug);
        } else {
          await get_actividades_list_category();
        }
      } catch (error) {
        <div>Info: {"No existen Actividades"}</div>;
      }
    };
    fetchData();
  }, [get_categories, get_actividades_list_category, slug]);

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
        <Categories categories={categories && categories} />
        <Activities
          categories={categories}
          post={posts && posts}
          count={count}
          get_activities_by_page={
            get_actividades_list_category_page &&
            get_actividades_list_category_page
          }
        />
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories,
    posts: state.actividades.activity_list_category,
    count: state.actividades.count,
    next: state.actividades.next,
    previous: state.actividades.previous,
  };
};

export default connect(mapStateToProps, {
  get_categories,
  get_actividades_list_category,
  get_actividades_list_category_page,
})(EventsCategory);
