import axios from 'axios';

/**
 * 
 * Fetch popular movies from TMDB
 *  @returns {Array} movies
 */
export const fetchPopularMovies = async (page) => {
    try {
      let popularMovies;
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_DB_API_KEY}&page=${page}`
        )
        .then((response) => {
            popularMovies = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
      return popularMovies;
    } catch (error) {
      console.error(error);
    }
  };


/**
 * 
 * Fetch movies from TMDB
 *  @returns {Array} movies
 */
  export const fetchAllMovies = async (page) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_API_KEY}&page=${page}`
      );
      const allMovies = response.data.results;
  
      const filteredMovies = allMovies.map(movie => ({
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        release_date: movie.release_date,
        popularity: movie.popularity,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count,
        backdrop_path: movie.backdrop_path,
        poster_path: movie.poster_path,
        genre_ids: movie.genre_ids,
      }));

      return filteredMovies;
    } catch (error) {
      console.error('Error fetching or saving movies:', error);
      return [];
    }
  };


