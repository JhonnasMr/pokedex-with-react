import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './pagination.css';

function Pagination({ children, itemsPerPage = 9 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = React.Children.count(children);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = React.Children.toArray(children).slice(startIndex, endIndex);

  return (
    <div className="pagination">
      <div className="content">
        {currentItems}
      </div>
      <div className="controls">
        <button onClick={handlePrevious} className="pagination__btn" disabled={currentPage === 1}>
          <i class='bx bxs-chevrons-left'></i>
        </button>
        <span className="pagination__info">
            {currentPage} de {totalPages}
        </span>
        <button onClick={handleNext} className="pagination__btn" disabled={currentPage === totalPages}>
          <i class='bx bx-chevrons-right' ></i>
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
  itemsPerPage: PropTypes.number,
};

export default Pagination;