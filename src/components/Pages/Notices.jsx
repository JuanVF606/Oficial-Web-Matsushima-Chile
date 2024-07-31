// src/components/Notices.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../Layout/Layout";
import Hero from "../common/Hero/Hero";
import Hero_notice from "../../assets/img/Hero_notice.jpg";
import { get_categories } from "../../redux/actions/categories/categories";
import {
  get_blog_list,
  get_blog_list_page,
} from "../../redux/actions/blog/blog";
import BlogList from "../../containers/notice/BlogList";
import DynamicHelmetProvider from "../../provider/HelmetProvider";

const Notices = ({
  get_categories,
  categories,
  get_blog_list,
  get_blog_list_page,
  posts,
  count,
  next,
  previous,
}) => {
  useEffect(() => {
    const fetchData = async () => {
      await get_categories();
      await get_blog_list();
    };
    fetchData();
  }, [get_categories, get_blog_list]);

  return (
    <Layout>
      <DynamicHelmetProvider
        title="Noticias y Eventos - IKO Matsushima Chile"
        description="Encuentra toda la información relevante sobre eventos recientes y novedades de IKO Matsushima Chile. No te pierdas ninguna actualización."
        keywords="Noticias, Actualizaciones, IKO Matsushima Chile, Novedades, Información"
      />

      <Hero
        title="Noticias y Novedades"
        subtitle="Entérate de las últimas noticias y novedades de IKO Matsushima Chile"
        heroImage={Hero_notice}
      />
      <section className="notices-section">
        <BlogList
          post={posts && posts}
          get_blog_list_page={get_blog_list_page && get_blog_list_page}
          count={count && count}
          categories={categories && categories}
        />
      </section>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list,
  count: state.blog.count,
  next: state.blog.next,
  previous: state.blog.previous,
});

export default connect(mapStateToProps, {
  // actions here
  get_categories,
  get_blog_list,
  get_blog_list_page,
})(Notices);
