import React, { Fragment } from "react";
import SmallSetPagination from "../../components/common/Pagination/SmallSetPagination";
import CardActivites from "../../components/common/Cards/CardActivites.jsx";
const Activities = ({
  next,
  previous,
  post,
  count,
  get_actividades_list_page,
}) => {
  const handleNextPage = (event, nextPage) => {
    event.preventDefault();
    get_actividades_list_page(nextPage);
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handlePreviousPage = (event, previousPage) => {
    event.preventDefault();
    get_actividades_list_page(previousPage);
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return (
    <>
      {post && post.length > 0 ? (
        <Fragment>
          <div className="mt-5">
            <CardActivites posts={post && post} />
          </div>
          <SmallSetPagination
            list_page={get_actividades_list_page && get_actividades_list_page}
            count={count && count}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </Fragment>
      ) : (
        <div className="alert alert-warning text-center bg-red" role="alert">
          No hay actividades para mostrar
        </div>
      )}
    </>
  );
};

export default Activities;
