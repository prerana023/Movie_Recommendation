import { fetchPopularMovies, fetchAllMovies } from "../accessors/fetchMovies.js";


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
  

export const handleFetchAllMovies = async(req, res) =>{
    try{
        const{ page } = req.query;
        const data = await fetchAllMovies(page);

        return res.status(200).json({
            status: 200,
            message: `${data.length} movies discovered`,
            data
        })
    }
    catch(error) {
        return error;
    }
}