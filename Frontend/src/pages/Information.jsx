import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieWithId } from '../axios/axiosRequest';

const InformationPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  console.log("movieid", movieId)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieWithId(movieId);
        const releaseDate = new Date(response.data.release_date).toLocaleDateString();
        const updatedMovie = { ...response.data, release_date: releaseDate };
        setMovie(updatedMovie);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container mx-auto py-10">
      <div className="flex">
        <div className="w-1/2">
          <img src={movie.poster_path} alt={movie.title} className="object-cover w-full" />
        </div>
        <div className="w-1/2 pl-5">
          <h1 className="text-3xl font-bold mb-3">{movie.title}</h1>
          <p className="text-gray-500 mb-3">Release Date: {movie.release_date}</p>
          <p className="text-gray-500 mb-3">Votes: {movie.vote_count}</p>
          <p className="text-gray-500 mb-3">Vote Average: {movie.vote_average}</p>
          <h2 className="text-xl font-bold mb-3">Overview</h2>
          <p className="text-gray-500">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationPage;
