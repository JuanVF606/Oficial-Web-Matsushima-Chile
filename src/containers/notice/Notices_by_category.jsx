// src/components/Notices.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/common/Hero";
import Hero_notice from "../../assets/img/Hero_notice.jpg";
import { get_categories } from "../../redux/actions/categories/categories";
import {
  get_blog_list_category,
  get_blog_list_category_page,
} from "../../redux/actions/blog/blog";
import BlogList from "../../containers/notice/BlogList";
import { useParams } from "react-router-dom";

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
  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await get_categories();
        await get_blog_list_category(slug);
      } catch (error) {
        // Manejar el error estableciendo el estado de error
      }
    };

    fetchData();
  }, [get_categories, slug]);
  const handlePageChange = (page) => {
    // Llamar a la acción para obtener la siguiente página de blogs de la categoría
    get_blog_list_category_page(slug, page);
  };
  return (
    <Layout>
      <Hero
        title="Noticias y Novedades"
        subtitle="Entérate de las últimas noticias y novedades de IKO Matsushima Chile"
        heroImage={Hero_notice}
      />
      <section className="notices-section">
        <BlogList
          categories={categories && categories}
          post={posts && posts}
          get_blog_list_page={handlePageChange && handlePageChange}
          count={count && count}
        />
      </section>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.blog.blog_list_category,
  count: state.blog.blog_count,
  next: state.blog.blog_next,
  previous: state.blog.blog_previous,
});

export default connect(mapStateToProps, {
  // actions here
  get_categories,
  get_blog_list_category,
  get_blog_list_category_page,
})(Notices);
