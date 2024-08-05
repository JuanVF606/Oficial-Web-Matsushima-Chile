/* eslint-disable no-unused-vars */
// src/components/Notices.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/common/Hero/Hero";
import Hero_notice from "../../assets/img/Hero_notice.jpg";
import { get_categories } from "../../redux/actions/categories/categories";
import {
  get_blog_list_category,
  get_blog_list_category_page,
} from "../../redux/actions/blog/blog";
import BlogList from "../../containers/notice/BlogList";
import { useParams } from "react-router-dom";
import DynamicHelmetProvider from "../../provider/HelmetProvider";

const Notices = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const slug = params.slug;

  const categories = useSelector((state) => state.categories.categories);
  const posts = useSelector((state) => state.blog.blog_list_category);
  const count = useSelector((state) => state.blog.blog_count);
  const next = useSelector((state) => state.blog.blog_next);
  const previous = useSelector((state) => state.blog.blog_previous);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(get_categories());
        await dispatch(get_blog_list_category(slug));
      } catch (error) {
        // Manejar el error estableciendo el estado de error
      }
    };

    fetchData();
  }, [dispatch, slug]);

  const handlePageChange = (page) => {
    // Llamar a la acción para obtener la siguiente página de blogs de la categoría
    dispatch(get_blog_list_category_page(slug, page));
  };

  return (
    <Layout>
      <DynamicHelmetProvider 
        title={`${slug} - Noticias y Actividades Recientes - IKO Matsushima Chile`} 
        description={`Descubre todas las Actividades de ${slug} que tenemos preparados para ti`} 
        keywords={"Actividades, Eventos, IKO Matsushima Chile"} 
      />
      <Hero
        title="Noticias y Novedades"
        subtitle="Entérate de las últimas noticias y novedades de IKO Matsushima Chile"
        heroImage={Hero_notice}
      />
      <section className="notices-section">
        <BlogList
          categories={categories}
          post={posts}
          get_blog_list_page={handlePageChange}
          count={count}
        />
      </section>
    </Layout>
  );
};

export default Notices;
