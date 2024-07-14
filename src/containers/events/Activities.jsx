import React, { Fragment } from "react";
import CardActivites from "../../components/common/CardActivites.jsx";
import SmallSetPagination from "../../components/common/Pagination/SmallSetPagination.jsx";
const Activities = ({
  next,
  previous,
  post,
  count,
  get_activities_by_page,
}) => {
  const handleNext = (event, nextPage) => {
    event.preventDefault();
    get_activities_by_page(nextPage);
  };
  const handlePrevious = (event, previousPage) => {
    event.preventDefault();
    get_activities_by_page(previousPage);
  };

  return (
    <div>
      {post && post.length > 0 ? (
        <Fragment>
          <CardActivites posts={post && post} />
          <SmallSetPagination
            list_page={get_activities_by_page && get_activities_by_page}
            count={count}
            next={handleNext}
            previous={handlePrevious}
          />
        </Fragment>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>No hay actividades disponibles</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Activities;
