import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../axios/axiosRequest';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const PopularMoviesCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const imageBaseURL = 'https://image.tmdb.org/t/p/w500'; 

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await getPopularMovies();
        const mappedMovies = response.data.map(movie => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          vote_average: movie.vote_average,
          poster_path: `${imageBaseURL}${movie.poster_path}`, 
        }));
        console.log("Popular path", )
        const circularMovies = [...mappedMovies, mappedMovies[0], mappedMovies[mappedMovies.length - 1]];
        setPopularMovies(mappedMovies);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      <Carousel 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop 
        useKeyboardArrows 
        autoPlay 
        showArrows={popularMovies.length > 4} 
        showIndicators={false} 
        renderIndicator={false} 
        interval={5000} 
        stopOnHover={false} 
        swipeScrollTolerance={5} 
        centerMode={popularMovies.length > 4} 
        centerSlidePercentage={40} 
      >
        {popularMovies.map(movie => (
          <div key={movie.id} className="bg-zinc-800 shadow-md rounded-lg overflow-hidden mx-2">
            <div className="relative">
              <img src={movie.poster_path} alt={movie.title} className="w-full object-cover" />
            </div>
            <div className="p-4 bg-gradient-to-t from-black to-transparent">
              <h2 className="text-lg font-semibold text-white mb-2">{movie.title}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMoviesCarousel;
