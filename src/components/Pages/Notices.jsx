/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

const Notices = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const posts = useSelector((state) => state.blog.blog_list);
  const count = useSelector((state) => state.blog.count);
  const next = useSelector((state) => state.blog.next);
  const previous = useSelector((state) => state.blog.previous);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(get_categories());
      await dispatch(get_blog_list());
    };
    fetchData();
  }, [dispatch]);

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
          post={posts}
          get_blog_list_page={get_blog_list_page}
          count={count}
          categories={categories}
        />
      </section>
    </Layout>
  );
};

export default Notices;
