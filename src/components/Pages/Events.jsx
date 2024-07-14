import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import { connect } from "react-redux";
import Hero from "../common/Hero";
import Categories from "./../../containers/events/Categories";
import Activities from "../../containers/events/Activities.jsx";
import { get_categories } from "../../redux/actions/categories.js";
import {
  get_actividades_list,
  get_actividades_list_page,
  get_actividades_list_category_page,
} from "../../redux/actions/activities";

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
        title={"Descurbre las Actividades de IKO Matsushima Chile"}
        subtitle="y participa de nuestras actividades de entrenamiento y eventos especiales."
      />

      <div className="container my-5">
        <Categories categories={categories} />
      </div>
      <Activities 
        categories={categories}
        posts={posts}
        count={count}
        get_activities_by_page={get_actividades_list_page && get_actividades_list_page}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  // categories: state.categories.categories,
  // posts: state.actividades.activity_list,
  // count: state.actividades.count,
  // next: state.actividades.next,
  // previous: state.actividades.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_actividades_list,
  get_actividades_list_page,
  get_actividades_list_category_page,
})(Events);
