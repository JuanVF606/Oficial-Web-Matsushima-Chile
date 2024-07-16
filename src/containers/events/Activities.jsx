import React, { Fragment } from "react";
import CardActivites from "../../components/common/CardActivites.jsx";
import SmallSetPagination from "../../components/common/Pagination/SmallSetPagination.jsx";
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
  };
  const handlePreviousPage = (event, previousPage) => {
    event.preventDefault();
    get_actividades_list_page(previousPage);
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
