import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import starLogo from "../assets/star.svg";
import posterImage from "../assets/Poster/godzilla.jpg"; 
import ReactPaginate from 'react-paginate';

const MoviesCard = ({ filtermovies }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  const startIndex = currentPage * itemsPerPage;
  const selectedMovies = filtermovies.slice(startIndex, startIndex + itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Discover All Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {selectedMovies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="bg-zinc-900 shadow-md rounded-lg overflow-hidden h-96">
              <div className="relative h-3/4"> 
                <img 
                  src={posterImage} 
                  alt={movie.title} 
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="p-4 h-1/4 flex flex-col justify-between">
                <div className="flex items-center mb-2">
                  <img src={starLogo} className="w-6 h-6 mr-2 bg-yellow-500" alt="rating star" />
                  <p className="text-sm text-gray-600">{movie.vote_average}</p>
                </div>
                <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(filtermovies.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'flex justify-center mt-8'}
        pageClassName={'mx-1'}
        pageLinkClassName={'px-3 py-2 bg-gray-800 text-white rounded hover:bg-yellow-500'}
        previousLinkClassName={'px-3 py-2 bg-gray-800 text-white rounded hover:bg-yellow-500'}
        nextLinkClassName={'px-3 py-2 bg-gray-800 text-white rounded hover:bg-yellow-500'}
        breakLinkClassName={'px-3 py-2 bg-gray-800 text-white rounded hover:bg-yellow-500'}
        activeLinkClassName={'bg-yellow-500'}
      />
    </div>
  );
};

export default MoviesCard;
