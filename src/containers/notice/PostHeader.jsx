import React from "react";
import defaultThumbnail from "../../assets/img/Hero_Dojos.jpg";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

const PostHeader = ({ post }) => (
  <div className="post-details card border-light shadow-sm">
    {post?.thumbnail ? (
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
    ) : (
      <img
        src={defaultThumbnail}
        className="card-img-top"
        alt="Default Thumbnail"
        style={{ borderRadius: "0.5rem" }}
      />
    )}
    <div className="card-body">
      <h1 className="card-title mb-4">{post.title}</h1>
      <div className="d-flex justify-content-between mb-3 text-muted">
        <span>
          <FaUser /> Autor : IKO MATSUSHIMA CHILE
        </span>
        <span>
          <FaCalendarAlt /> {new Date(post.published).toLocaleDateString()}
        </span>
      </div>
    </div>
  </div>
);

export default PostHeader;
