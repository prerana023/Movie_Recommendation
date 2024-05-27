import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map(num => num + 1);

  return (
    <div className="flex justify-center my-4">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 mx-1 border rounded ${
            number === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
