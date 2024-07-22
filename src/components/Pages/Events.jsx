import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { connect } from "react-redux";
import Hero from "../common/Hero/Hero.jsx";
import Categories from "./../../containers/events/Categories";
import Activities from "../../containers/events/Activities.jsx";
import { get_categories } from "../../redux/actions/categories/categories";
import {
  get_actividades_list,
  get_actividades_list_page,
} from "../../redux/actions/actividades/actividades";
import HeroImage from "../../assets/img/Hero_Actividades.jpg";

const Events = ({
  get_categories,
  get_actividades_list_page,
  get_actividades_list,
  actividades,
  categories,
  posts,
  count,
  next,
  previous,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await get_categories();
        await get_actividades_list();
      } catch (error) {
        <div>Info: {"No existen Actividades"}</div>;
      }
    };
    fetchData();
  }, [get_categories, get_actividades_list]);

  return (
    <Layout>
      <Hero
        title={"Revisa nuestras actividades"}
        subtitle="y enterate sobre nuestros examenes de grado, seminarios, torneos y mucho más..."
        heroImage={HeroImage}
      />

      <div className="mt-5 bg-light">
        <Categories categories={categories && categories} />
        <Activities
          categories={categories && categories}
          get_actividades_list_page={
            get_actividades_list_page && get_actividades_list_page
          }
          post={posts && posts}
          count={count && count}
        />
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.actividades.activity_list,
  count: state.actividades.count,
  next: state.actividades.next,
  previous: state.actividades.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_actividades_list,
  get_actividades_list_page,
})(Events);
