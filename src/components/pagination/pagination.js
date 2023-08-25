import React from 'react';

const Pagination = ({ productsPerPage, currentPage, setCurrentPage, totalProducts }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination is-rounded mb-6" role="navigation" aria-label="pagination">
      <a
        className={`pagination-previous ${currentPage === 1 ? "is-disabled" : ""}`}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Anterior
      </a>
      <a
        className={`pagination-next ${currentPage === totalPages ? "is-disabled" : ""}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Siguiente página
      </a>
      <ul className="pagination-list">
        {pageNumbers.map(number => (
          <li key={number}>
            <a
              className={`pagination-link ${number === currentPage ? "is-current" : ""}`}
              aria-label={`Ir a la página ${number}`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
