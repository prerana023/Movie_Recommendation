import express from 'express';
import { handleFetchAllMovies, handleFetchPopularMovies } from '../controller/ThirdPartyController.js';


const router = express.Router();
router.get("/discover", handleFetchAllMovies)
router.get('/popular', handleFetchPopularMovies)

export { router as ThirdPartyRoutes };