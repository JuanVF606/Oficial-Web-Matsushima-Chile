// src/components/RelatedPost/RelatedPost.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import defaultThumbnail from "../../assets/img/logo.jpg";
import { fetchRelatedPosts } from "../../services/api";

const RelatedPost = ({ categorySlug, currentPostSlug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRelatedPosts = async () => {
      try {
        setLoading(true);
        const posts = await fetchRelatedPosts(categorySlug, currentPostSlug);
        setRelatedPosts(posts);
      } catch (err) {
        setError("No se pudieron cargar los posts relacionados.");
      } finally {
        setLoading(false);
      }
    };

    getRelatedPosts();
  }, [categorySlug, currentPostSlug]);

  if (loading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" variant="primary" />
        <p>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <div className="related-posts">
      <h2 className="mb-4">Posts Relacionados</h2>
      {relatedPosts.length === 0 ? (
        <p>No hay posts relacionados.</p>
      ) : (
        <div className="d-flex flex-wrap">
          {relatedPosts.map((post) => (
            <Card key={post.id} className="related-post-card mb-3 me-3">
              <Link
                to={`/noticias/${post.slug}`}
                className="text-decoration-none"
              >
                <Card.Img
                  variant="top"
                  src={post.thumbnail || defaultThumbnail}
                  alt={post.title}
                  className="related-post-thumbnail rounded-0 img-fluid"
                  onError={(e) => {
                    e.target.src = defaultThumbnail;
                    e.target.onError = null;
                  }}
                />
                <Card.Body className="related-post-card-body">
                  <Card.Title className="related-post-card-title">
                    {post.title}
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

RelatedPost.propTypes = {
  categorySlug: PropTypes.string.isRequired,
  currentPostSlug: PropTypes.string.isRequired,
};

export default RelatedPost;
