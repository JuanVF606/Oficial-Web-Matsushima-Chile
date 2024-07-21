import React, { useState, useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

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

  const items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => visitPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex justify-content-center">
      <Pagination className="border-top px-4">
        <Pagination.Prev onClick={previous_number} disabled={active === 1} />
        {items}
        <Pagination.Next
          onClick={next_number}
          disabled={active === totalPages}
        />
      </Pagination>
    </div>
  );
}

export default SmallSetPagination;
