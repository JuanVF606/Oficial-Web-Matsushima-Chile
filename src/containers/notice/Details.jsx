import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useParams, Link } from "react-router-dom";
import { get_blog } from "../../redux/actions/blog/blog";
import { get_categories } from "../../redux/actions/categories/categories";
import { connect } from "react-redux";
import DOMPurify from "dompurify";
import {
  FaUser,
  FaCalendarAlt,
  FaTags,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Spinner } from "react-bootstrap";
import defaultThumbnail from "../../assets/img/Hero_Dojos.jpg";
import qrimage from "../../assets/img/matsushimachile_qr.png";
import { Button } from "react-bootstrap";
import RelatedPost from "./RelatedPost";

const Details = ({ get_blog, post, categories, get_categories }) => {
  const { slug } = useParams();
  const postUrl = `https://www.ikomatsushima.cl/noticias/${slug}`;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await get_categories();
      await get_blog(slug);
      setLoading(false);
    };

    fetchData();
  }, [slug, get_blog, get_categories]);

  const categorySlug = post?.category?.slug || '';
  const currentPostSlug = slug;

  return (
    <Layout>
      <div className="container-Ndetails my-5">
        <div className="row">
          {/* Contenido Principal */}
          <div className="col-md-8">
            <div className="post-details card border-light shadow-sm">
              {loading ? (
                <div className="text-center p-5">
                  <Spinner animation="border" variant="primary" />
                </div>
              ) : (
                <>
                  {post?.thumbnail && (
                    <img
                      src={post.thumbnail || defaultThumbnail}
                      className="card-img-top"
                      alt={post.title}
                      style={{ borderRadius: "0.5rem" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = defaultThumbnail;
                      }}
                    />
                  )}
                  <div className="card-body">
                    <h1 className="card-title mb-4">{post.title}</h1>
                    <div className="d-flex justify-content-between mb-3 text-muted">
                      <span>
                        <FaUser /> Autor : IKO MATSUSHIMA CHILE
                      </span>
                      <span>
                        <FaCalendarAlt />{" "}
                        {new Date(post.published).toLocaleDateString()}
                      </span>
                    </div>
                    <div
                      className="post-content"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.content),
                      }}
                    />
                    <div className="mt-4">
                      <div className="d-flex align-items-center mb-3">
                        <FaTags className="me-2" />
                        <span>Tags:</span>
                      </div>
                      <ul className="list-unstyled">
                        {post?.categories?.map((category, index) => (
                          <li key={index} className="mb-1">
                            <Link
                              to={`/noticias/categoria/${category.slug}`}
                              className="text-decoration-none"
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Tarjetas de contenido relacionado */}
            <RelatedPost categorySlug={categorySlug} currentPostSlug={currentPostSlug} />
          </div>

          {/* Sidebar */}
          <div className="col-md-4">
            <div className="sidebar">
              {/* Categorías */}
              <div className="widget card border-light shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="card-title">Categorías</h2>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <Link to="/noticias" className="text-decoration-none">
                        Todas las Categorías
                      </Link>
                    </li>
                    {categories?.map((category, index) => (
                      <li key={index} className="mb-1">
                        <Link
                          to={`/noticias/categoria/${category.slug}`}
                          className="text-decoration-none"
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Compartir */}
              <div className="widget card border-light shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="card-title">Compartir</h2>
                  <div className="d-flex justify-content-between">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${postUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      href={`https://wa.me/?text=${postUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                  <p className="text-muted mt-3">
                    Comparte este post en tus redes sociales.
                  </p>
                </div>
                <div className="card-footer"></div>
              </div>
              <div className="widget card border-light shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="card-title">Síguenos en Instagram</h2>
                  <p className="text-muted">
                    Escanea el código QR para seguirnos o haz clic en el botón de abajo
                  </p>
                  
                  {/* Insertar imagen de qrimage */}
                  <img src={qrimage} alt="QR Code" className="img-fluid mb-3" />

                  <Button
                    href="https://www.instagram.com/ikomatsushimachile"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary w-100"
                  >
                    Síguenos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  post: state.blog.post,
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  get_blog,
  get_categories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
