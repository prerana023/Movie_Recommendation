import { fetchPopularMovies, fetchAllMovies } from "../accessors/fetchMovies.js";
import Movie from "../models/Movies.js";


export const handleFetchAllMovies = async (req, res) => {
  try {
    const { page } = req.query;
    const data = await fetchAllMovies(page);

    await saveMoviesToDatabase(data);

    return res.status(200).json({
      status: 200,
      message: `${data.length} movies discovered and saved to the database`,
      data
    });
  } catch (error) {
    console.error('Error handling fetch all movies:', error);
    return res.status(500).json({
      status: 500,
      message: 'An error occurred while fetching and saving movies',
      error: error.message
    });
  }
};


const saveMoviesToDatabase = async (movies) => {
  try {
    await Movie.bulkCreate(movies, {
      updateOnDuplicate: ["title", "overview", "release_date", "popularity", "vote_average", "vote_count", "backdrop_path", "poster_path", "genre_ids"]
    });
    console.log(`${movies.length} movies saved to the database`);
  } catch (error) {
    console.error('Error saving movies to the database:', error);
    throw error;
  }
};


export const handleFetchPopularMovies =  async (req, res, next)=>{
    try {
        const {page} = req.query;
        const data = await fetchPopularMovies(page);
  
        return res.status(200).json({
          status:200,
          message: `${data.length} movies found`, 
          data
        })
      } catch (err) {
        return next(err);
      }
  };

