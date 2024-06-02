import { getAllMovies, getTop20PopularMovies, getMovieById } from "../services/MovieService.js";

export const handleGetAllMovies = async (req, res) => {
    try {
      const movies = await getAllMovies();
      const moviesData = movies.map(movie => movie.toJSON());
      res.status(200).send({ message: "Fetching all movie from database"}).json(moviesData);
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ error: 'An error occurred while fetching movies' });
    }
  };


  export const handleGetTop20PopularMovies = async (req, res) => {
    try {
      const movies = await getTop20PopularMovies();
      const moviesData = movies.map(movie => movie.toJSON()); 
      res.status(200).send({ message: "Fetching top 20 popular movies"}).json(moviesData);
    } catch (error) {
      console.error('Error fetching top 20 popular movies:', error);
      res.status(500).json({ error: 'An error occurred while fetching top 20 popular movies' });
    }
  };


  export const handleGetMovieById = async (req, res) => {
    try {
      const { id } = req.params;
      const movies = await getMovieById(id);
      const moviesData = movies.toJSON(); 
      res.status(200).json(moviesData);
    } catch (error) {
      res.status(500).send({ msg: 'An error occurred while fetching the movie' });
    }
  };