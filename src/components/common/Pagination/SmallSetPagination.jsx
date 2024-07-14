import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
function SmallSetPagination({ list_page, count }) {
  const [active, setActive] = useState(1);
  const [listingsPerPage] = useState(3);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const total = Math.ceil(count / listingsPerPage);
    setTotalPages(total < 1 ? 1 : total);
  }, [count, listingsPerPage]);

  const visitPage = (page) => {
    setActive(page);
    list_page(page);
  };

  const previous_number = () => {
    const newPage = active - 1;
    if (newPage >= 1) {
      setActive(newPage);
      list_page(newPage);
    }
  };

  const next_number = () => {
    const newPage = active + 1;
    if (newPage <= totalPages) {
      setActive(newPage);
      list_page(newPage);
    }
  };

  const renderPaginationItems = () => {
    const items = [];
    let startPage = Math.max(1, active - 2);
    let endPage = Math.min(totalPages, active + 2);

    if (startPage > 1) {
      items.push(
        <Pagination.Item key={1} active={1 === active} onClick={() => visitPage(1)}>
          1
        </Pagination.Item>
      );
      if (startPage > 2) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" />);
      }
    }

    for (let number = startPage; number <= endPage; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={() => visitPage(number)}>
          {number}
        </Pagination.Item>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" />);
      }
      items.push(
        <Pagination.Item key={totalPages} active={totalPages === active} onClick={() => visitPage(totalPages)}>
          {totalPages}
        </Pagination.Item>
      );
    }

    return items;
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <Pagination className="border-top px-4 py-2 shadow-sm rounded">
        <Pagination.Prev onClick={previous_number} disabled={active === 1} />
        {renderPaginationItems()}
        <Pagination.Next onClick={next_number} disabled={active === totalPages} />
      </Pagination>
    </div>
  );
}

export default SmallSetPagination;
