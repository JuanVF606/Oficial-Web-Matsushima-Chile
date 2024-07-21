import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { get_related_post } from "../../redux/actions/blog/blog";
import { Link } from "react-router-dom";
import defaultThumbnail from "../../assets/img/Hero_Dojos.jpg";
import { Spinner } from "react-bootstrap";

const RelatedPost = ({ categorySlug, currentPostSlug, get_related_post }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      setLoading(true);
      try {
        const response = await get_related_post(categorySlug, currentPostSlug);
        setRelatedPosts(response.posts || []);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      } finally {
        setLoading(false);
      }
    };

    if (categorySlug && currentPostSlug) {
      fetchRelatedPosts();
    }
  }, [categorySlug, currentPostSlug, get_related_post]);

  return (
    <div className="related-posts mt-5">
      <h2 className="mb-4">Posts Relacionados</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <ul className="list-unstyled">
          {relatedPosts.length > 0 ? (
            relatedPosts.map((post) => (
              <li key={post.id} className="mb-4">
                <div className="card">
                  <Link to={`/noticias/${post.slug}`}>
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
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                    </div>
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <p>No hay posts relacionados.</p>
          )}
        </ul>
      )}
    </div>
  );
};

const mapDispatchToProps = {
  get_related_post,
};

export default connect(null, mapDispatchToProps)(RelatedPost);
