import axios from "axios";

const API_URL = "http://localhost:3000";
console.log(API_URL)

const api = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });


export const getMovies = () => api.get('/movies/all')

export const getPopularMovies = () => api.get('/movies/top20popular')

export const getMovieWithId = (movieId) => api.get(`/movies/${movieId}`);
