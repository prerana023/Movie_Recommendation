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
        limit: 20
      });
      return movies;
    } catch (error) {
      throw error;
    }
  }