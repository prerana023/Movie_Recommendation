import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../axios/axiosRequest';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import starLogo from "../assets/star.svg";
import Poster from "../assets/Poster/Captain_America_Civil_War.jpg";

const PopularMoviesCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await getPopularMovies();
        const mappedMovies = response.data.map(movie => ({
          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          vote_average: movie.vote_average,
          poster_path: movie.poster_path, 
        }));
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
        interval={5000} 
        stopOnHover={false} 
        swipeScrollTolerance={5} 
        centerMode={popularMovies.length > 4} 
        centerSlidePercentage={40} 
      >
        {popularMovies.map(movie => (
          <div key={movie.id} className="bg-zinc-800 shadow-md rounded-lg overflow-hidden mx-2 h-96">
            <div className="relative h-3/4">
              <img src={Poster} alt={movie.title} className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="p-4 h-1/4 flex flex-col justify-between bg-gradient-to-t from-black to-transparent">
              <h2 className="text-lg font-semibold text-white mb-2">{movie.title}</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-300">Rating: {movie.vote_average}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PopularMoviesCarousel;
