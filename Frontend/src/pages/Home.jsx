
import React, { useState, useEffect } from 'react';
import MoviesCard from '../components/MovieCard';
import PopularMoviesCarousel from '../components/PopularMovie';
import { getMovies } from '../axios/axiosRequest';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

    console.log('Search Query:', searchQuery);
  console.log('Filtered Movies:', filteredMovies);

  return (
    <div className="home-body">
      <div className="search-container my-10 flex justify-center">
        <div className="search-box flex">
          <input 
            className="w-80 h-8 border border-gray-300 rounded-l-md outline-none text-black px-2" 
            type="text" 
            placeholder='Search for movies here...'
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button 
            id="suggestion-search-button" 
            type="submit" 
            aria-label="Submit Search" 
            className="bg-white text-black hover:text-yellow-500 border border-gray-300 border-l-0 rounded-r-md flex items-center justify-center px-3"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              className="ipc-icon ipc-icon--magnify" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              role="presentation"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className='discover-movies'>
        <PopularMoviesCarousel />
        <MoviesCard filtermovies ={filteredMovies} />
      </div>
    </div>
  );
}

export default HomePage;
