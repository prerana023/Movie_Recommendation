import Movie from "../models/Movies.js"

export const getAllMovies = async () =>{
    try{
        const movies = await Movie.findAll();
        return movies;
    }
    catch(error){
        console.log(error);
    }
}

export const getTop20PopularMovies = async () => {
    try {
      const movies = await Movie.findAll({
        order: [['popularity', 'DESC']],
        limit: 5
      });
      return movies;
    } catch (error) {
    }
  }

  export const getMovieById = async (id) => {
    try {
      const movie = await Movie.findByPk(id);
      if (!movie) {
        throw new Error('Movie not found');
      }
      return movie;
    } catch (error) {
      throw error
      // console.error('Error fetching movie by ID:', error);
    }
  };