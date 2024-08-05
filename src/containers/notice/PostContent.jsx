import React from "react";
import DOMPurify from "dompurify";
import { FaTags } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostContent = ({ post }) => (
  <div className="post-content">
    <div
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
);

export default PostContent;
