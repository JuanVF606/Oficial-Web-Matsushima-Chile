import React from "react";
import Categories from "./Categories";
import NoticiasList from "../notice/NoticiaList";
import SmallSetPagination from "../../components/common/Pagination/SmallSetPagination";

const BlogList = ({
  post,
  get_blog_list_page,
  count,
  categories,
  next,
  previous,
}) => {
  const handleNextPage = (event, nextPage) => {
    event.preventDefault();
    if (nextPage) {
      get_blog_list_page(nextPage);
      window.scrollTo(0, 0); // Scroll hacia arriba
    }
  };

  const handlePreviousPage = (event, previousPage) => {
    event.preventDefault();
    if (previousPage) {
      get_blog_list_page(previousPage);
      window.scrollTo(0, 0); // Scroll hacia arriba
    }
  };

  return (
    <div>
      <Categories categories={categories && categories} />
      <div className="mt-5">
        <NoticiasList posts={post && post} />
      </div>
      <SmallSetPagination
        list_page={get_blog_list_page}
        count={count}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default BlogList;
