import React from "react";
import Categories from "./Categories";
import Noticia from "./Noticia";
import SmallSetPagination from "../../components/common/Pagination/SmallSetPagination";

const BlogList = ({ post, get_blog_list_page, count, categories }) => {
  const handleNextPage = (event, nextPage) => {
    event.preventDefault();
    // Lógica para cambiar la página
    get_blog_list_page(nextPage);
    // Desplazar hacia arriba después de cambiar la página
  };
  const handlePreviousPage = (event, previousPage) => {
    event.preventDefault();
    // Lógica para cambiar la página
    get_blog_list_page(previousPage);
    // Desplazar hacia arriba después de cambiar la página
  };
  return (
    <div>
      <Categories categories={categories && categories} />

      <Noticia posts={post && post} />
      <SmallSetPagination
        list_page={get_blog_list_page && get_blog_list_page}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        count={count && count}
      />
    </div>
  );
};

export default BlogList;
