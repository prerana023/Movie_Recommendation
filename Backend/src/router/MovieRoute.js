import express from 'express';
import { handleGetAllMovies, handleGetTop20PopularMovies } from '../controller/MovieController.js';

const router = express.Router();
router.get("/all", handleGetAllMovies);
router.get("/top20popular", handleGetTop20PopularMovies)

export { router as Movies };