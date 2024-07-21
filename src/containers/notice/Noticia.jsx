import React from "react";
import Cards from "./Cards";
import SmallSetPagination from "../../components/common/Pagination/SmallSetPagination";
const Noticia = ({ posts, get_blog_list_page, count }) => {
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
      {posts && posts.length > 0 ? (
        <div>
          <Cards posts={posts && posts} />
          <SmallSetPagination
            list_page={get_blog_list_page && get_blog_list_page}
            count={count}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>
      ) : (
        <p className="noticia-placeholder">No se encontraron noticias.</p>
      )}
    </div>
  );
};

export default Noticia;
