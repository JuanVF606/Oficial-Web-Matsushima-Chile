import React from "react";
import Categories from "./Categories";
import Noticia from "./Noticia";

const BlogList = ({ post, get_blog_list_page, count, categories }) => {
  return (
    <div>
      <Categories categories={categories && categories} />
      
        <Noticia
          posts={post && post}
          categories={categories && categories}
          get_blog_list_page={get_blog_list_page && get_blog_list_page}
          count={count && count}
        />
    </div>
  );
};

export default BlogList;
