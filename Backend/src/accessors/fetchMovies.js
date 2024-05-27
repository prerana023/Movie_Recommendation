import axios from 'axios';
import { response } from 'express';

/**
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
 * Fetch movies from TMDB
 *  @returns {Array} movies
 */
export const fetchAllMovies = async(page) => {

    try{
        let allMovies;
        await axios
            .get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_API_KEY}&page=${page}`
            )
            .then((response) =>{
                allMovies = response.data.results
            })
            .catch((error) =>{
                console.log(error)
            });
            return allMovies;
    }
    catch(error){
        console.log(error);
      }      
    }


