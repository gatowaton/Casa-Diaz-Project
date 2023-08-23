import React from 'react';

const Pagination = ({ productsPerPage, currentPage, setCurrentPage, totalProducts }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination is-rounded" role="navigation" aria-label="pagination">
      <a
        className="pagination-previous"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </a>
      <a
        className="pagination-next"
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next page
      </a>
      <ul className="pagination-list">
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <a
              className={`pagination-link ${currentPage === pageNumber ? 'is-current' : ''}`}
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
