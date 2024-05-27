import { getAllMovies, getTop20PopularMovies } from "../services/MovieService.js";

export const handleGetAllMovies = async (req, res) => {
    try {
      const movies = await getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      res.status(500).json({ error: 'An error occurred while fetching movies' });
    }
  };


  export const handleGetTop20PopularMovies = async (req, res) => {
    try {
      const movies = await getTop20PopularMovies();
      res.status(200).json(movies);
    } catch (error) {
      console.error('Error fetching top 20 popular movies:', error);
      res.status(500).json({ error: 'An error occurred while fetching top 20 popular movies' });
    }
  };