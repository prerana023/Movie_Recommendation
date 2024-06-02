import { fetchAllMovies, fetchPopularMovies } from "../../accessors/fetchMovies";

describe('Third party routes to get movies', () => {
    test('fetchAllMovies function should fetch all movies from the third-party API', async () => {
        const movies = await fetchAllMovies(1); 
        expect(Array.isArray(movies)).toBe(true);
        expect(movies.length).toBeGreaterThan(0);
    });

    test('fetchPopularMovies function should fetch popular movies from the third-party API', async () => {
        const movies = await fetchPopularMovies(1);
        expect(Array.isArray(movies)).toBe(true);
        expect(movies.length).toBeGreaterThan(0);
    });
});