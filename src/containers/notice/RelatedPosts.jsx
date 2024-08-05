import React from "react";
import RelatedPost from "./RelatedPost";

const RelatedPosts = ({ categorySlug, currentPostSlug }) => (
  <RelatedPost categorySlug={categorySlug} currentPostSlug={currentPostSlug} />
);

export default RelatedPosts;
