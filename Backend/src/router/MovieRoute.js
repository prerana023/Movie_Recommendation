import express from 'express';
import { handleGetAllMovies, handleGetTop20PopularMovies, handleGetMovieById } from '../controller/MovieController.js';

const router = express.Router();
router.get("/all", handleGetAllMovies);
router.get("/top20popular", handleGetTop20PopularMovies)
router.get('/:id', handleGetMovieById );

export { router as Movies };