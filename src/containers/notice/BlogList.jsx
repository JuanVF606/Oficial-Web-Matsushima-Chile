import React from "react";
import Categories from "./Categories";
import Noticia from "./Noticia";

const BlogList = ({ post, get_blog_list_page, count, categories }) => {
  return (
    <div>
      <Categories categories={categories && categories} />
      <div className="row g-5">
        <Noticia
          posts={post && post}
          categories={categories && categories}
          get_blog_list_page={get_blog_list_page && get_blog_list_page}
          count={count && count}
        />
      </div>
    </div>
  );
};

export default BlogList;
