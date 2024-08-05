import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_blog } from "../../redux/actions/blog/blog";
import { get_categories } from "../../redux/actions/categories/categories";
import Layout from "../../components/Layout/Layout";
import DynamicHelmetProvider from "../../provider/HelmetProvider";
import PostHeader from "./PostHeader.jsx";
import PostContent from "./PostContent.jsx";
import PostSidebar from "./PostSidebar.jsx";
import RelatedPosts from "./RelatedPosts.jsx";
import { Spinner } from "react-bootstrap";

const Details = () => {
  const { slug } = useParams();
  const postUrl = `https://www.ikomatsushima.cl/noticias/${slug}`;
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const post = useSelector((state) => state.blog.post);
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(get_categories());
        await dispatch(get_blog(slug));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, dispatch]);

  if (loading) {
    return (
      <Layout>
        <div className="container my-5">
          <div className="text-center p-5">
            <Spinner animation="border" variant="primary" />
          </div>
        </div>
      </Layout>
    );
  }

  const categorySlug = post?.category?.slug;
  const currentPostSlug = slug;
  const shortDescription =
    post?.description?.length > 100
      ? post.description.substring(0, 60) + "..."
      : post.description;

  return (
    <Layout>
      <DynamicHelmetProvider
        title={`${post.title} - Noticias y Eventos - IKO Matsushima Chile`}
        description={shortDescription}
        keywords="Actividades, Eventos, IKO Matsushima Chile"
      />

      <div className="container-Ndetails my-5">
        <div className="row">
          {/* Contenido Principal */}
          <div className="col-md-8">
            <PostHeader post={post} />
            <PostContent post={post} />
            <RelatedPosts categorySlug={categorySlug} currentPostSlug={currentPostSlug} />
          </div>

          {/* Sidebar */}
          <div className="col-md-4">
            <PostSidebar categories={categories} postUrl={postUrl} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Details;
